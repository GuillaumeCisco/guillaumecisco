# Guillaume Cisco Website

Interactive SSR website built with React, Webpack, Redis caching, HTTPS local development, and Tauri desktop support.

---

# Stack

* React
* Webpack
* Node.js SSR
* Redis
* Docker
* AWS EC2
* Nginx
* Let's Encrypt
* Tauri v2
* Yarn Berry (v4)

---

# Requirements

## Node.js

Required version:

```text
>=22.0.0
```

Recommended:

```text
node v26.1.0
npm 11.11.0
yarn 4.13.0
```

Verify versions:

```shell
node -v
npm -v
yarn -v
```

---

# Install Corepack + Yarn Berry

Enable Corepack:

```shell
npm install -g corepack
corepack enable
```

Activate Yarn:

```shell
corepack prepare yarn@4.13.0 --activate
```

Verify:

```shell
yarn -v
```

---

# Install dependencies

```shell
yarn install
```

---

# Local HTTPS certificates

Development mode requires local HTTPS certificates generated with `mkcert`.

---

## Install mkcert

### Linux

Install NSS tools:

```shell
sudo apt install libnss3-tools
```

Install mkcert:

```shell
curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"

chmod +x mkcert-v*-linux-amd64

sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert
```

---

### macOS

```shell
brew install mkcert
```

---

## Install local CA

```shell
mkcert -install
```

---

## Generate local certificates

```shell
yarn certs
```

Expected files:

```text
certs/
├── localhost+2-key.pem
└── localhost+2.pem
```

---

# Development

Run the SSR development server with HTTPS and HMR:

```shell
yarn dev
```

Application URL:

```text
https://localhost:3000
```

---

# Production build

Build the production application:

```shell
yarn build
```

Run production locally:

```shell
yarn start
```

---

# Tests

## Run tests

```shell
yarn test
```

---

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

# Tauri Desktop App

The desktop application uses Tauri v2.

---

## Install Rust

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

---

## Linux dependencies

```shell
sudo apt install \
  libwebkit2gtk-4.1-dev \
  libappindicator3-dev \
  librsvg2-dev \
  patchelf
```

---

## Development mode

```shell
yarn tauri:dev
```

---

## Production build

```shell
yarn tauri:build
```

---

# Redis cache

The project uses Redis for SSR shell caching.

---

## Create Docker network

```shell
docker network create app-net
```

---

## Start Redis container

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
```

Flush Redis:

```shell
redis-cli flushall
```

---

# Docker local testing

Run the production container locally:

```shell
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
https://localhost:8001
```

---

# AWS CLI

## Linux

```shell
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install
```

---

## macOS

```shell
brew install awscli
```

Verify:

```shell
aws --version
```

---

# AWS configuration

```shell
aws configure
```

Recommended region:

```text
eu-central-1
```

---

# Nginx configuration

Main nginx file:

```text
/etc/nginx/nginx.conf
```

Enable gzip inside the `http {}` block:

```nginx
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 1024;

    gzip_types
        text/plain
        text/css
        text/javascript
        application/javascript
        application/json
        application/xml
        application/rss+xml
        image/svg+xml;

    include /etc/nginx/conf.d/*.conf;
}
```

---

## Virtual host

File:

```text
/etc/nginx/conf.d/guillaumecisco.conf
```

```nginx
# HTTP
server {
    listen 80;
    server_name guillaumecisco.com www.guillaumecisco.com;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        default_type "text/plain";
        try_files $uri =404;
    }

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

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/html;
        default_type "text/plain";
        try_files $uri =404;
    }

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

Validate nginx:

```shell
sudo nginx -t
```

Reload nginx:

```shell
sudo systemctl reload nginx
```

---

# Install Certbot

Amazon Linux:

```shell
sudo yum install certbot
```

Ubuntu:

```shell
sudo apt install certbot
```

---

# Generate production SSL certificates

```shell
sudo certbot certonly \
  --webroot \
  -w /var/www/html \
  -d guillaumecisco.com \
  -d www.guillaumecisco.com
```

Certificates:

```text
/etc/letsencrypt/live/guillaumecisco.com/
```

---

# Automatic SSL renewal

Edit crontab:

```shell
sudo crontab -e
```

Add:

```shell
0 3 * * * certbot renew --quiet --deploy-hook "/usr/bin/systemctl reload nginx"
```

---

# Renewal test

```shell
sudo certbot renew --dry-run
```

---

# Deployment

---

## Create deploy.js

```shell
cp tools/deploy_template.js deploy.js
```

Update:
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

## Deploy

```shell
yarn deploy
```

---

# Production container

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

# Architecture

```text
packages/
├── webpack/
├── tauri/
├── eslint/
└── test/

src/
public/
tools/
src-tauri/
```

---

# Important notes

* Port `80` must stay open for Let's Encrypt
* Local development requires mkcert certificates
* Redis is required for SSR caching
* HTTPS is enabled in both development and production
* The production backend serves HTTP/2 internally
* The application uses SSR with dynamic chunk loading

---

# Result

* SSR React website
* HTTPS local development
* Automatic SSL renewal
* Dockerized production deployment
* Redis SSR cache
* Tauri desktop support
* Dynamic code splitting
