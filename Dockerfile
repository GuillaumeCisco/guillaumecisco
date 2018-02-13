FROM mhart/alpine-node:8

WORKDIR /usr/src/app

COPY . .
COPY packages/ssr/package.json package.json
RUN npm install && npm cache clean --force

ARG raven_url=127.0.0.1
ARG redis_host=127.0.0.1
ARG redis_port=6379

# setting NODE_ENV need to be AFTER npm install
ENV NODE_ENV production
ENV NODE_PORT 8000
ENV SECURE_NODE_PORT 8443
ENV RAVEN_URL $raven_url
ENV REDIS_HOST $redis_host
ENV REDIS_PORT $redis-port

EXPOSE $NODE_PORT
EXPOSE $SECURE_NODE_PORT

CMD ["./node_modules/.bin/babel-node", "./build/ssr/index.js"]
