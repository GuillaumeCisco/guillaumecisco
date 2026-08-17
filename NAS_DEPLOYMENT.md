# NAS deployment

`guillaumecisco.com` runs on the NAS with this flow:

```text
Cloudflare authoritative DNS and public proxy
  -> Freebox public IPv4 origin
  -> Freebox ports 80/443
  -> NAS ports 8000/4444
  -> Traefik network "proxy"
  -> guillaumecisco app on HTTP port 3000
  -> Redis on an isolated Docker network
```

Cloudflare provides the public edge and HTTP/2 connection. Traefik terminates
HTTPS on the NAS and obtains its origin certificates through the Cloudflare
DNS challenge. The Node.js container receives private HTTP traffic from
Traefik and trusts its forwarded headers. Local development continues to use
HTTPS directly.

## Files on the NAS

The application is installed in:

```text
/volume1/docker/guillaumecisco
```

## Deploy an update from Bento

The NAS SFTP subsystem cannot write to `/volume1`, so use legacy SCP with
`-O`:

```bash
cd ~/Projects/guillaumecisco

scp -O -r \
  Dockerfile package.json yarn.lock .yarnrc.yml .dockerignore \
  compose.nas.yml src config packages \
  nas:/volume1/docker/guillaumecisco/

ssh nas \
  'cd /volume1/docker/guillaumecisco && \
   docker compose -f compose.nas.yml build app && \
   docker compose -f compose.nas.yml up -d --no-deps app'
```

Check the deployment:

```bash
ssh nas \
  'cd /volume1/docker/guillaumecisco && \
   docker compose -f compose.nas.yml ps && \
   docker compose -f compose.nas.yml logs --tail=100 app'

curl -I https://guillaumecisco.com
curl -I https://www.guillaumecisco.com
```

Expected results are `200` for the apex and a `301` from `www` to the apex.

## DNS and TLS

Cloudflare is authoritative for both `guillaumecisco.com` and
`www.guillaumecisco.com`. Its proxied records point to the Freebox public IPv4
origin. Route 53 is not part of the active request path and the application
stack does not update DNS records.

The public connection must remain HTTPS. Plain HTTP exists only between
Traefik and the application container on the private Docker network.

## Roll back the application

Retag a known-good application image as `guillaumecisco:local`, then recreate
only the application service. Redis and Traefik do not need to be restarted:

```bash
ssh nas \
  'cd /volume1/docker/guillaumecisco && \
   docker tag guillaumecisco:rollback-YYYYMMDD-HHMMSS guillaumecisco:local && \
   docker compose -f compose.nas.yml up -d --no-deps --force-recreate app'
```
