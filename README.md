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

## Encryption files creation

For creating your own self-signed certificates:

https://blog.didierstevens.com/2008/12/30/howto-make-your-own-cert-with-openssl/

```shell
cd encryption
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 1826 -key ca.key -out ca.crt
openssl genrsa -out ia.key 4096
openssl req -new -key ia.key -out ia.csr
openssl x509 -req -days 730 -in ia.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out ia.crt
```

#### With Let's Encrypt

##### Dev mode

```shell
sudo certbot certonly --manual -d guillaumecisco.com -d www.guillaumecisco.com
```

Place the files in the folder `./well-known/acme-challenge` and build and deploy your website, then continue the process for validating ownership. Then place the generated files in the `encryption` folder.

The certificates will only last 90 days, so be sure to create a cronjob with:
```shell
sudo certbot renew
```

##### EC2

You should run these commands on the server running the Docker app (i.e. the EC2 instance).

https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates

Be sure you can access your EC2 instance with SSH:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

Then in your EC2 instance:

```shell
$> yum install wget python27-virtualenv
$> wget https://dl.eff.org/certbot-auto
$> chmod a+x certbot-auto
```

Be careful — when running the next command, you will need to create two files before pressing `continue` for the third time, then build and deploy your Docker app again. These two files need to be placed in `.well-known/acme-challenge`. Make sure the security group of your EC2 instance has ports 80 and 443 open.

```shell
$> ./certbot-auto certonly --manual -d guillaumecisco.com -d www.guillaumecisco.com
```

After deploying your app with the new files available, press continue — the files will now be accessible on your EC2 instance.

You now need to make these files accessible to your Docker app by modifying permissions:

```shell
$> sudo groupadd certaccess
$> whoami
ec2-user
$> sudo usermod -a -G certaccess ec2-user
$> sudo usermod -a -G certaccess root
$> sudo chown ec2-user.certaccess /etc/letsencrypt/
$> sudo chown ec2-user.certaccess /etc/letsencrypt/live
$> sudo chown ec2-user.certaccess /etc/letsencrypt/archive
```

Now create a volume in your ECS task configuration `/etc/letsencrypt/:/etc/letsencrypt/`:
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html

Or run the Docker run command like this:

```shell
$> docker run -it -v /etc/letsencrypt/:/etc/letsencrypt/ -p 8001:8443 984406419997.dkr.ecr.eu-central-1.amazonaws.com/guillaumecisco:latest
```

Your site is now secured!

###### Renewing

For now this must be done manually as the Docker instance is bound to ports 80 and 443, which Certbot needs for renewal. Stop the Docker container, run the command, then the ECS policy will restart it automatically.

```shell
docker stop `docker ps --format '{{.Names}}' | grep ecs-guillaumecisco` && ./certbot-auto renew --standalone
```

TODO: create a cronjob for renewing the certificate and `docker restart container_name`

Tip: to get the container name: `docker ps --format '{{.Names}}' | grep ecs-guillaumecisco`

### Deploy

```shell
$> aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 984406419997.dkr.ecr.eu-central-1.amazonaws.com
```

Create a `deploy.js` file with the right variables.

```shell
$> sudo systemctl reload nginx
```

### Nginx conf

`/etc/nginx/conf.d/guillaumecisco.conf`

```nginx
# Redirection HTTP -> HTTPS
server {
    listen 80;
    server_name guillaumecisco.com www.guillaumecisco.com;

    return 301 https://$host$request_uri;
}

# Virtual host HTTPS
server {
    listen 443 ssl;
    server_name guillaumecisco.com www.guillaumecisco.com;

    ssl_certificate     /etc/letsencrypt/live/guillaumecisco.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/guillaumecisco.com/privkey.pem;

    # Proxy to Docker container
    location / {
        proxy_pass https://127.0.0.1:8001;

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Backend uses HTTPS with a self-signed certificate, disable verification
        proxy_ssl_server_name on;
        proxy_ssl_verify     off;
    }
}
```
