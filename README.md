# Guillaume Cisco's interactive website

## Installation

This project uses Yarn Berry (v4) and Yarn workspaces for package management and dependency splitting.

## Required versions

```text
npm 11.11.0
yarn 4.13.0
node v26.1.0
```

## Install Node.js

Verify your Node.js version:

```shell
node -v
npm -v
```

---

## Install Corepack + Yarn v4

Enable Corepack:

```shell
npm install -g corepack
corepack enable
```

Verify Yarn version:

```shell
yarn --version
```

---

# Tauri requirements

For Tauri, install the Rust toolchain and system dependencies.

## Rust

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Linux dependencies

```shell
sudo apt install \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf
```

---

# Development

Run the project with true hot module replacement:

```shell
yarn dev
```

---

# Tauri Desktop App

The desktop application is built with Tauri v2.

## Development mode

```shell
yarn tauri:dev
```

## Production build

```shell
yarn tauri:build
```

---

# Production website build

```shell
yarn build
yarn deploy
```

---

# Tests

## Run tests

```shell
yarn test
```

## Coverage

```shell
yarn cover
```

---

# ESLint

```shell
yarn eslint
```

---

# Tauri architecture

## Structure

```text
src-tauri/          Rust backend
packages/tauri/     npm package wrapping the Tauri CLI
src/client/         main-tauri.js entry point

config/
  rspack.config.tauri.js
  generateTauriIndex.js
```

---

## How it works

* In development mode, Tauri loads the Koa SSR server through `devUrl`
* In production mode, a static frontend is generated into `public/dist/tauri/`
* `@loadable/component` is replaced by a lightweight `React.lazy` wrapper

---

## Tauri scripts

| Command            | Description                               |
| ------------------ | ----------------------------------------- |
| `yarn tauri:dev`   | Launch desktop app in development mode    |
| `yarn tauri:build` | Build and package the desktop application |

---

## Icons

Generate application icons:

```shell
npx tauri icon src/assets/img/launcher-icon-high-res.png
```

Generated files are stored in:

```text
src-tauri/icons/
```

---

# Cache

This project uses Redis for SSR shell caching.

---

## AWS ElastiCache

To deploy on AWS, create a Redis cluster:

[Amazon ElastiCache Documentation](https://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/GettingStarted.CreateCluster.html?utm_source=chatgpt.com)

Make sure port `6379` is accessible from your EC2 instance.

---

## Local Redis container

Create the shared Docker network:

```shell
docker network create app-net
```

Run Redis:

```shell
docker run -d \
  --name redis \
  --network app-net \
  redis
```

---

## Redis shell access

```shell
docker exec -it redis sh
redis-cli flushall
```

---

# Docker local testing

For testing your Docker image locally:

```shell
redis-cli flushall

docker run -it \
  -v /etc/letsencrypt/:/etc/letsencrypt/ \
  --network app-net \
  -e REDIS_HOST=redis \
  -e REDIS_PORT=6379 \
  -e SSL_KEY_PATH=/etc/letsencrypt/live/guillaumecisco.com/privkey.pem \
  -e SSL_CERT_PATH=/etc/letsencrypt/live/guillaumecisco.com/fullchain.pem \
  -p 8001:3000 \
  docker_image_name:latest
```

Then open:

```text
https://localhost:8001/
```

---

# SSL (Let's Encrypt) — EC2 + Nginx + Docker

## AWS CLI installation

Install the AWS CLI.

### Linux

```shell
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### macOS

```shell
brew install awscli
```

Verify installation:

```shell
aws --version
```

---

## Configure AWS credentials

```shell
aws configure
```

You will be prompted for:

* AWS Access Key ID
* AWS Secret Access Key
* AWS region
* Output format

Recommended region:

```text
eu-central-1
```

---

## Install Certbot

On the EC2 instance:

```shell
sudo yum install certbot
```

---

## Nginx configuration

File:

```text
/etc/nginx/conf.d/guillaumecisco.conf
```

```nginx
# HTTP
server {
    listen 80;
    server_name guillaumecisco.com www.guillaumecisco.com;

    # ACME challenge
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        default_type "text/plain";
        try_files $uri =404;
    }

    # Redirect to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS
server {
    listen 443 ssl http2;
    server_name guillaumecisco.com www.guillaumecisco.com;

    ssl_certificate     /etc/letsencrypt/live/guillaumecisco.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/guillaumecisco.com/privkey.pem;

    # ACME challenge
    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        default_type "text/plain";
        try_files $uri =404;
    }

    # Reverse proxy
    location / {
        proxy_pass https://127.0.0.1:8001;

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_ssl_server_name on;
        proxy_ssl_verify off;
    }
}
```

Reload nginx:

```shell
sudo systemctl reload nginx
```

---

## Generate SSL certificates

```shell
sudo certbot certonly \
  --webroot \
  -w /var/www/html \
  -d guillaumecisco.com \
  -d www.guillaumecisco.com
```

Certificates are stored in:

```text
/etc/letsencrypt/live/guillaumecisco.com/
```

---

## Automatic renewal

Edit the root crontab:

```shell
sudo crontab -e
```

Add:

```shell
0 3 * * * certbot renew --quiet --deploy-hook "/usr/bin/systemctl reload nginx"
```

---

## Renewal test

```shell
sudo certbot renew --dry-run
```

---

# Deployment

## Create deploy.js

Copy the deployment template:

```shell
cp tools/deploy_template.js deploy.js
```

Template location:

```text
tools/deploy_template.js
```

Update the following values:

* Docker registry
* image name
* Redis host
* Redis port
* optional Sentry DSN

---

## Login to AWS ECR

```shell
aws ecr get-login-password --region eu-central-1 \
  | docker login --username AWS --password-stdin \
  984406419997.dkr.ecr.eu-central-1.amazonaws.com
```

---

## Build and push Docker image

```shell
yarn deploy
```

---

## Production container

The backend server itself runs HTTPS + HTTP/2 internally.

```shell
docker run -d \
  --name guillaumecisco \
  --network app-net \
  -v /etc/letsencrypt/:/etc/letsencrypt/:ro \
  -e REDIS_HOST=redis \
  -e REDIS_PORT=6379 \
  -e SSL_KEY_PATH=/etc/letsencrypt/live/guillaumecisco.com/privkey.pem \
  -e SSL_CERT_PATH=/etc/letsencrypt/live/guillaumecisco.com/fullchain.pem \
  -p 8001:3000 \
  984406419997.dkr.ecr.eu-central-1.amazonaws.com/guillaumecisco:latest
```

---

# Important notes

* Port `80` must remain open for Let's Encrypt
* Do not remove the nginx ACME challenge block
* `certbot-auto` is deprecated
* The Docker container requires:

    * mounted Let's Encrypt certificates
    * Redis connectivity
    * SSL environment variables

---

# Result

* HTTPS + HTTP/2 frontend
* HTTPS + HTTP/2 backend
* Automatic SSL renewal
* Zero downtime
* Redis SSR cache support
* Dockerized production deployment
