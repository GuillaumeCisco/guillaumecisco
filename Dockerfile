FROM mhart/alpine-node:8

WORKDIR /usr/src/app

COPY . .
COPY packages/ssr/package.json package.json
RUN npm install && npm cache clean --force

# setting NODE_ENV need to be AFTER npm install
ENV NODE_ENV production
ENV NODE_PORT 8000
ENV SECURE_NODE_PORT 8443
ENV RAVEN_URL https://b3cdd83872f448ca857649a0e610c1cd@sentry.io/286729

EXPOSE $NODE_PORT
EXPOSE $SECURE_NODE_PORT

CMD ["./node_modules/.bin/babel-node", "./build/ssr/index.js"]
