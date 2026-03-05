FROM node:25.8.0-alpine AS dependencies

WORKDIR /usr/src/app

RUN apk add --update --no-cache python3 make g++
COPY --link package.json ./package.json
COPY --link ./packages/base ./packages/base
COPY --link ./packages/ssr ./packages/ssr
COPY --link ./packages/plugins ./packages/plugins
COPY --link .yarnrc.yml ./.yarnrc.yml
COPY --link yarn.lock ./yarn.lock
RUN rm -f /usr/local/bin/yarn /usr/local/bin/yarnpkg \
 && npm install -g corepack \
 && corepack enable
RUN yarn workspaces focus base-package ssr-package plugins-package

FROM dependencies AS build

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV DISABLE_ESLINT_PLUGIN=true

COPY --link src ./src/
COPY --link package.json ./package.json
COPY --link config ./config
COPY --link babel.config.js ./babel.config.js

RUN yarn build:webpack && yarn build:lib\
  && find ./public -type f \( -iname \*.js -o -iname \*.css \) -exec sed -i "s/^.*#\ssourceMappingURL=.*//g" {} \;

FROM node:25.8.0-alpine AS production

ARG redis_host=127.0.0.1
ARG redis_port=6379

WORKDIR /usr/src/app

ENV NODE_ENV=production \
    NODE_PORT=8000 \
    SECURE_NODE_PORT=8443 \
    REDIS_HOST=$redis_host \
    REDIS_PORT=$redis_port

RUN apk add --update --no-cache python3 make g++
# install only needed node_modules
COPY --link package.json ./package.json
COPY --link packages/ssr/ ./packages/ssr
COPY --link yarn.lock ./yarn.lock
COPY --link .yarnrc.yml ./.yarnrc.yml

RUN rm -f /usr/local/bin/yarn /usr/local/bin/yarnpkg \
 && npm install -g corepack \
 && corepack enable


RUN yarn workspaces focus ssr-package --production
RUN rm -f /usr/src/app/.yarnrc.yml

EXPOSE $NODE_PORT $SECURE_NODE_PORT

COPY --link --from=build /usr/src/app/lib /usr/src/app/lib/
COPY --link --from=build /usr/src/app/public /usr/src/app/public/

CMD yarn start
