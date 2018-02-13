/* global APP_NAME META_DESCRIPTION META_KEYWORDS */

import config from 'config';
import {Transform} from 'stream';
import redis from 'redis';
import React from 'react';
import {Provider} from 'react-redux';
import {renderToNodeStream} from 'react-dom/server';
import {renderStylesToNodeStream} from 'emotion-server';
import {ReportChunks} from 'react-universal-component';
import {clearChunks, flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import routesMap from '../app/routesMap';

import App from '../app';
import configureStore from './configureStore';
import serviceWorker from './serviceWorker';
import raven from './raven';

const cache = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
});

cache.on('connect', function () {
    console.log('CACHE CONNECTED');
});

const paths = Object.keys(routesMap).map(o => routesMap[o].path).concat('/404');

const createCacheStream = (key) => {
    const bufferedChunks = [];
    return new Transform({
        // transform() is called with each chunk of data
        transform(data, enc, cb) {
            // We store the chunk of data (which is a Buffer) in memory
            bufferedChunks.push(data);
            // Then pass the data unchanged onwards to the next stream
            cb(null, data);
        },

        // flush() is called when everything is done
        flush(cb) {
            // We concatenate all the buffered chunks of HTML to get the full HTML
            // then cache it at "key"

            // only cache '/' path
            if (paths.includes(key) && !key.endsWith('.js.map')) {
                console.log('CACHING: ', key);
                cache.set(key, Buffer.concat(bufferedChunks));
            }
            cb();
        },
    });
};

const createApp = (App, store, chunkNames) => (
    <ReportChunks report={chunkName => chunkNames.push(chunkName)}>
        <Provider store={store}>
            <App />
        </Provider>
    </ReportChunks>
);

const flushDll = clientStats => clientStats.assets.reduce((p, c) => [
    ...p,
    ...(c.name.endsWith('dll.js') ? [`<script type="text/javascript" src="/${c.name}" defer></script>`] : []),
], []).join('\n');

const earlyChunk = (styles, stateJson) => `
    <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${APP_NAME}</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta name="description" content="${META_DESCRIPTION}"/>
          <meta name="keywords" content="${META_KEYWORDS}" />
          ${styles}
          <script src="https://cdn.ravenjs.com/3.22.2/raven.min.js" crossorigin="anonymous"></script>
        </head>
      <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">`,
    lateChunk = (cssHash, js, dll, raven) => `</div>
          ${process.env.NODE_ENV === 'development' ? '<div id="devTools"></div>' : ''}
          ${cssHash}
          ${dll}
          ${js}
          ${serviceWorker}
          ${raven}
        </body>
    </html>
  `;

const renderStreamed = async (req, res, path, clientStats) => {
// Grab the CSS from our sheetsRegistry.
    clearChunks();

    const store = await configureStore(req, res);
    if (!store) return; // no store means redirect was already served
    const stateJson = JSON.stringify(store.getState());

    /* In this project, we do not use css module in chunks, so we know our only main chunk, no need to call flushChunks */
    // const {styles} = flushChunks(clientStats);
    const styles = '<link rel=\'stylesheet\' href=\'/main.css\' />';

    // flush the head with css & js resource tags first so the download starts immediately
    const early = earlyChunk(styles, stateJson);
    const chunkNames = [];
    const app = createApp(App, store, chunkNames);
    const stream = renderToNodeStream(app).pipe(renderStylesToNodeStream());

    const cacheStream = createCacheStream(path);
    cacheStream.pipe(res);
    cacheStream.write(early);
    stream.pipe(cacheStream, {end: false});
    stream.on('end', () => {
        const {js, cssHash} = flushChunks(clientStats, {chunkNames});
        const dll = flushDll(clientStats);

        console.log('CHUNK NAMES', chunkNames);

        const late = lateChunk(cssHash, js, dll, raven);
        cacheStream.end(late);
    });
};

export default ({clientStats}) => (req, res, next) => {
    res.set('Content-Type', 'text/html');

    let path = req.path;

    // check if path is in our whitelist, else give 404 route

    if (!paths.includes(req.path) && !(process.env.NODE_ENV === 'development' && req.path.endsWith('.js.map'))) {
        path = '/404';
    }

    console.log('REQUESTED PATH:', req.path);

    cache.exists(path, (err, reply) => {
        if (reply === 1) {
            console.log('CACHE KEY EXISTS: ', path);
            cache.get(path, (err, reply) => res.end(reply));
        }
        else {
            renderStreamed(req, res, path, clientStats);
        }
    });
};
