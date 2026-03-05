import path from 'path';
import express from 'express';
import {createHttpTerminator} from 'http-terminator';
import {createLightship} from 'lightship';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {ChunkExtractor} from '@loadable/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom/server';
import configureAppStore from '../app/store';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const {
    READINESS_PERIOD_SECONDS, READINESS_FAILURE_THRESHOLD, DASHBOARD_PORT = 3000, LIGHTSHIP_PORT = 9000,
} = process.env;

const app = express();

// static assets server from the "dist" folder
app.use(express.static(path.join(__dirname, '../../public'), {index: false}));
// app.use(express.json());
// app.use(express.urlencoded());

if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable global-require, import/no-extraneous-dependencies */
    const {default: webpackConfig} = require('../../config/webpack.config.babel.js');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpack = require('webpack');
    /* eslint-enable global-require, import/no-extraneous-dependencies */
    const multiCompiler = webpack(webpackConfig);
    const clientCompiler = multiCompiler.compilers[0];

    clientCompiler.hooks.afterEmit.tap('cleanup-the-require-cache', () => {
        // After webpack rebuild, clear the files from the require cache,
        // so that next server side render will be in sync
        Object.keys(require.cache)
            .filter((key) => key.includes(path.resolve(__dirname, '../client/')))
            .forEach((key) => delete require.cache[key]);
    });

    // First we fire up Webpack and pass in the configuration we
    // created
    let bundleStart = null;
    // We give notice in the terminal when it starts bundling and
    // set the time it started
    clientCompiler.hooks.compile.tap('Client', () => {
        console.log('Bundling...');
        bundleStart = Date.now();
    });
    // We also give notice when it is done compiling, including the
    // time it took. Nice to have
    clientCompiler.hooks.done.tap('Client', () => {
        console.log(`Bundled in ${(Date.now() - bundleStart)}ms!`);
    });

    app.use(
        webpackDevMiddleware(multiCompiler, {
            serverSideRender: true,
            publicPath: '/dist/web/', // TODO get it dynamically
        }),
    );

    app.use(
        webpackHotMiddleware(clientCompiler, {
            path: '/__webpack_hmr',
            heartbeat: 30 * 1000,
            dynamicPublicPath: true,
        }),
    );
}

// TODO use Webpack Hot Server Middleware https://github.com/60frames/webpack-hot-server-middleware

const nodeStats = path.resolve(
    __dirname,
    '../../public/dist/node/loadable-stats.json',
);

const webStats = path.resolve(
    __dirname,
    '../../public/dist/web/loadable-stats.json',
);

app.get('*', (req, res) => {
    const store = configureAppStore();

    const nodeExtractor = new ChunkExtractor({statsFile: nodeStats});
    const {default: App} = nodeExtractor.requireEntrypoint();

    const webExtractor = new ChunkExtractor({statsFile: webStats});

    const jsx = webExtractor.collectChunks(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>,
    );

    global.window = {};
    const html = renderToString(jsx);

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    res.set('content-type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            ${webExtractor.getLinkTags()}
            ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // https://redux.js.org/usage/server-rendering#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);
});

const main = async () => {
    const lightship = await createLightship({
        shutdownDelay: Number(READINESS_PERIOD_SECONDS || 0) * Number(READINESS_FAILURE_THRESHOLD || 0) || 5000,
        detectKubernetes: process.env.NODE_ENV !== 'development',
        port: Number(LIGHTSHIP_PORT),
        terminate: () => process.exit(0),
    });

    // eslint-disable-next-line no-console
    const server = app.listen(Number(DASHBOARD_PORT), () => {
        lightship.signalReady();
        console.log(`Server started http://localhost:${DASHBOARD_PORT}`);
        server.keepAliveTimeout = 0;
    }).on('error', (err) => {
        console.log('Will shutdown', err);
        return lightship.shutdown();
    });

    const httpTerminator = createHttpTerminator({server});

    lightship.registerShutdownHandler(async () => {
        const msg = 'will close server and connections';
        console.time(msg);
        await httpTerminator.terminate();
        console.timeEnd(msg);
    });
};

main();
