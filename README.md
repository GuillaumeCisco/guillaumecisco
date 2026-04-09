# Guillaume Cisco's interactive website

## Installation

This project uses yarn and yarn workspaces for package.json splitting and convenience.

```shell
$> npm -v
11.11.0
$> npm install -g corepack
$> yarn init -2
$> yarn --version
4.13.0
$> node -v
v25.8.0
```

For Tauri, you need to install the Rust toolchain and system dependencies:

```shell
# Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Linux system dependencies
sudo apt install libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf
```

For testing and developing on the project with true hot module replacement, run:
```shell
yarn start
```

For testing in the Tauri desktop app (dev mode):
```shell
yarn tauri:dev
```

For building the Tauri desktop app:
```shell
yarn tauri:build
```

For building the production website and deploying it, run:
```shell
yarn build
yarn deploy
```

You can now stop the task on AWS ECS, it will restart automatically if you did not define an autoscaling policy.

Remember to invalidate the cache on your AWS Redis instance.
Connect with SSH to your EC2 instance, then connect to your Redis instance as explained in the ElastiCache documentation.
https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/GettingStarted.ConnectToCacheNode.html#GettingStarted.ConnectToCacheNode.Redis.NoEncrypt
Then run `flushall`. You should automate this part.
More information in the cache part below.

## Test and Cover

For running the test suite:
```shell
yarn test
```

For displaying coverage:
```shell
yarn cover
```

## Eslint

For displaying lint errors:
```shell
yarn eslint
```

## Tauri Desktop App

The desktop app is built with [Tauri v2](https://tauri.app/) and lives in `packages/tauri/` (manifest) and `src-tauri/` (Rust backend).

### Structure

```
src-tauri/          # Rust backend (Cargo.toml, tauri.conf.json, src/)
packages/tauri/     # npm package wrapping the Tauri CLI
src/client/         # main-tauri.js — dedicated entry point (no SSR, no loadable)
config/
  rspack.config.tauri.js      # Rspack build config for the Tauri frontend
  generateTauriIndex.js       # Generates public/index.html before the Tauri build
```

### How it works

- In **dev mode**, Tauri loads your Koa SSR server at `https://localhost:3000` via `devUrl`.
- In **production build**, a static frontend is compiled by Rspack (`yarn build:tauri`) into `public/dist/tauri/`, then bundled into the desktop app by Tauri.
- `@loadable/component` is aliased to a thin `React.lazy` wrapper (`src/lib/loadable-static.js`) so the existing app code works without SSR infrastructure.

### Scripts

| Command | Description |
|---------|-------------|
| `yarn tauri:dev` | Start the desktop app in dev mode (starts the Koa server automatically) |
| `yarn tauri:build` | Build the static frontend then package the desktop app |

### Icons

Icons are generated from the source PNG using the Tauri CLI:

```shell
npx tauri icon src/assets/img/launcher-icon-high-res.png
```

This generates all required sizes and formats (`.ico`, `.icns`, PNG variants) into `src-tauri/icons/`.

## Cache

This project uses a Redis cache manager for the server routes, avoiding re-rendering the same HTML per route.

For deploying with Amazon, please create a Redis cluster by following this documentation:
https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/GettingStarted.CreateCluster.html

Don't forget to create an isolated security group for opening port 6379 as described in the documentation.
For keeping costs low on Amazon, you can simply run a Redis Docker instance on your EC2 instance and get the container instance IP for your Redis.

```shell
$> docker run --name redis -p 6379:6379 -d redis
$> docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' redis
```

You will need to go inside this Docker container for flushing the cache in the future.

```shell
$> docker exec -it redis bash
# redis-cli flushall
```

### Test

For testing your generated Docker image with your locally hosted Redis, update your `deploy.js` file and do not forget to comment out the part that pushes to your registry, then:

```shell
$> redis-cli flushall && docker run -it -v /etc/letsencrypt/:/etc/letsencrypt/ --net="host" -p 8000:8000 docker_image_name:latest
```

You'll notice the Let's Encrypt folder is also bound — more information in the next section.

Then head to https://localhost:8001/

Remember to `redis-cli flushall` when testing multiple times.

## SSL (Let's Encrypt) — EC2 + Nginx

### Installation

On your EC2 instance:

```shell
sudo yum install certbot
```

---

### Nginx Configuration (required)

`/etc/nginx/conf.d/guillaumecisco.conf`

```nginx
# HTTP
server {
    listen 80;
    server_name guillaumecisco.com www.guillaumecisco.com;

    # ACME challenge (required for Let's Encrypt)
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        default_type "text/plain";
        try_files $uri =404;
    }

    # Redirect everything else to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS
server {
    listen 443 ssl;
    server_name guillaumecisco.com www.guillaumecisco.com;

    ssl_certificate     /etc/letsencrypt/live/guillaumecisco.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/guillaumecisco.com/privkey.pem;

    # ACME challenge (also required here)
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        default_type "text/plain";
        try_files $uri =404;
    }

    # Proxy to Docker container
    location / {
        proxy_pass https://127.0.0.1:8001;

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_ssl_server_name on;
        proxy_ssl_verify     off;
    }
}
```

Reload nginx:

```shell
sudo systemctl reload nginx
```

---

### Certificate generation

```shell
sudo certbot certonly --webroot -w /var/www/html -d guillaumecisco.com -d www.guillaumecisco.com
```

Certificates are generated here:

```
/etc/letsencrypt/live/guillaumecisco.com/
```

---

### 🔄 Automatic renewal (CRON)

Add a cron job:

```shell
sudo crontab -e
```

```shell
0 3 * * * certbot renew --quiet --deploy-hook "systemctl reload nginx"
```

#### Behavior

- Runs every day at 03:00
- Renews only if needed (<30 days before expiration)
- Reloads nginx only if the certificate was renewed

---

### 🧪 Renewal test

```shell
sudo certbot renew --dry-run
```

---

### ⚠️ Important notes

- The directory `/var/www/html/.well-known/acme-challenge` must be accessible
- Port **80 must remain open** (AWS Security Group)
- Do not remove this nginx block:

```nginx
location ^~ /.well-known/acme-challenge/
```

---

### 🚫 Important

- `certbot-auto` is **deprecated** → do not use
- `standalone` mode is not compatible with nginx in production
- Manual renewal is no longer required

---

### 🔗 Docker + certificates

Mount certificates into your container:

```shell
-v /etc/letsencrypt/:/etc/letsencrypt/
```

---

### ✅ Result

- Automatically renewed valid certificate
- Zero downtime
- No manual intervention required

### Deploy

```shell
$> aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 984406419997.dkr.ecr.eu-central-1.amazonaws.com
```

Create a `deploy.js` file with the right variables.

```shell
$> sudo systemctl reload nginx
```

```
