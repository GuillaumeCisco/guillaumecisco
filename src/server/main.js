import './sentry'
import {captureException} from '@sentry/node';

import path from 'path';
import http2 from 'http2';
import fs from 'fs';
import crypto from 'crypto';
import {createClient} from 'redis';
import {Transform} from 'stream';
import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import koaHelmet from 'koa-helmet';
import compress from 'koa-compress';
import {createLifecycleServer} from '@guillaumecisco/terminus-lifecycle';
import {renderToPipeableStream} from 'react-dom/server';
import {CacheProvider} from '@emotion/react';
import {ChunkExtractor} from '@loadable/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {createEmotionStream} from './emotionStream';

process.on('uncaughtException', (err) => {
    captureException(err);
    console.error('uncaughtException', err);
});

process.on('unhandledRejection', (reason) => {
    captureException(reason);
    console.error('unhandledRejection', reason);
});

// App et configureAppStore sont chargés dynamiquement depuis le bundle ssr
// à chaque requête en dev — jamais importés statiquement.
// En prod, le bundle est figé au démarrage donc on les importe directement.
let _App = null;
let _configureAppStore = null;

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
    const nodeRequire = eval('require');
    const ssrBundle = nodeRequire(path.join(__PROJECT_ROOT__, 'public/dist/ssr/static/js/main.js'));
    _App = ssrBundle.App;
    _configureAppStore = ssrBundle.configureAppStore;
}

const SSR_BUNDLE_PATH = path.join(__PROJECT_ROOT__, 'public/dist/ssr/static/js/main.js');

const getSSRModules = () => {
    if (isProd) return {App: _App, configureAppStore: _configureAppStore};
    const nodeRequire = eval('require');
    // Vider le cache pour recharger le bundle ssr à jour après chaque rebuild
    delete nodeRequire.cache[SSR_BUNDLE_PATH];
    const ssrBundle = nodeRequire(SSR_BUNDLE_PATH);
    return {App: ssrBundle.App, configureAppStore: ssrBundle.configureAppStore};
};

const {
    DASHBOARD_PORT = 3000,
    LIFECYCLE_PORT = 9000,
    REDIS_HOST = '127.0.0.1',
    REDIS_PORT = 6379,
    SHELL_CACHE_TTL = 3600,
} = process.env;

const redis = createClient({
    socket: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
        reconnectStrategy: !isProd
            ? false
            : (retries) => Math.min(retries * 100, 3000),
    },
});

const isRedisReady = () => redis.isReady;

redis.on('error', (err) => {
    if (isRedisReady()) console.error('Redis error:', err);
});

const CACHE_KEY = 'ssr:shell';

const buildAssetTags = ({nonce, devMiddlewareInstance, clientCompiler}) => {
    let scriptTags = '';
    let linkTags = '';
    let preloadTags = '';

    const buildTags = (files, pub) => {
        const jsFiles = files.filter(f => f.endsWith('.js'));
        const cssFiles = files.filter(f => f.endsWith('.css'));

        scriptTags = jsFiles
            .map(f => `<script src="${pub}${f}" nonce="${nonce}" defer></script>`)
            .join('\n');

        linkTags = cssFiles
            .map(f => `<link rel="stylesheet" href="${pub}${f}">`)
            .join('\n');

        const criticalJs = jsFiles[0];
        const criticalCss = cssFiles[0];

        preloadTags = [
            criticalJs && `<link rel="preload" href="${pub}${criticalJs}" as="script">`,
            criticalCss && `<link rel="preload" href="${pub}${criticalCss}" as="style">`,
        ].filter(Boolean).join('\n');
    };

    if (!isProd) {
        const devStats = devMiddlewareInstance?.context?.stats;
        if (devStats) {
            const clientStats = devStats.stats
                ? devStats.stats.find(s => s.compilation.name === 'client')
                : devStats;
            if (clientStats) {
                const info = clientStats.toJson({all: false, entrypoints: true});
                const files = (info.entrypoints?.main?.assets || [])
                    .map(a => a.name)
                    .filter(name => !name.includes('hot-update'));
                buildTags(files, clientCompiler.options.output.publicPath);
            }
        }
    } else {
        const manifestPath = path.join(__PROJECT_ROOT__, 'public/dist/web/asset-manifest.json');
        if (fs.existsSync(manifestPath)) {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
            buildTags(manifest.entrypoints || [], '/dist/web/');
        }
    }

    return {scriptTags, linkTags, preloadTags};
};

const buildHead = (linkTags, preloadTags) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="emotion-insertion-point" content="emotion-insertion-point" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Guillaume Cisco — Senior Lead FullStack Engineer</title>
    <meta name="description" content="Portfolio of Guillaume Cisco, Senior Lead FullStack Engineer specializing in React, Node.js, Python and cloud architectures. Based in Paris, France.">
    <meta name="author" content="Guillaume Cisco">
    <meta property="og:title" content="Guillaume Cisco — Senior Lead FullStack Engineer">
    <meta property="og:description" content="Interactive portfolio of Guillaume Cisco. Explore my experience, skills and hobbies.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://guillaumecisco.com/">
    ${isProd ? `<link rel="manifest" href="/manifest.json" crossorigin="use-credentials" />` : ''}
    ${preloadTags}
    ${linkTags}
  </head>
  <body>
    <div id="root">`;

const buildTail = ({nonce, preloadedState, loadableTags, scriptTags}) => `</div>
    <script nonce="${nonce}">
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    ${loadableTags}
    ${scriptTags}
  </body>
</html>`;

const setCSP = (res, nonce) => {
    res.setHeader('Content-Security-Policy',
        `default-src 'self'; ` +
        `script-src 'self' 'nonce-${nonce}'; ` +
        `style-src 'self' 'unsafe-inline'; ` +
        `font-src 'self'; ` +
        `img-src 'self' data:; ` +
        `connect-src 'self' https://o129911.ingest.us.sentry.io; ` +
        `base-uri 'self'; ` +
        `form-action 'self'; ` +
        `frame-ancestors 'self'; ` +
        `object-src 'none'; ` +
        `upgrade-insecure-requests`
    );
};

const LOADABLE_STATS_FILE = path.join(__PROJECT_ROOT__, 'public/dist/web/loadable-stats.json');

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.state.nonce = crypto.randomBytes(16).toString('base64');
    await next();
});

app.use(koaHelmet({contentSecurityPolicy: false}));

app.use(compress({br: true, gzip: true, threshold: 1024}));

let clientCompiler = null;
let devMiddlewareInstance = null;

if (!isProd) {
    const nodeRequire = eval('require');
    const webpackConfig = nodeRequire(path.join(__PROJECT_ROOT__, 'config/rspack.config.babel.js'));
    const webpackDevMiddleware = nodeRequire('webpack-dev-middleware');
    const webpackHotMiddleware = nodeRequire('webpack-hot-middleware');
    const webpack = nodeRequire('@rspack/core').rspack;
    const multiCompiler = webpack(webpackConfig);

    clientCompiler = multiCompiler.compilers.find(c => c.name === 'client');
    const ssrCompiler = multiCompiler.compilers.find(c => c.name === 'ssr');

    let bundleStart = null;
    clientCompiler.hooks.compile.tap('Client', () => {
        console.log('Bundling...');
        bundleStart = Date.now();
    });
    clientCompiler.hooks.done.tap('Client', () => {
        console.log(`Bundled in ${Date.now() - bundleStart}ms!`);
    });

    // HMR uniquement sur le client — le ssr compiler tourne en watch séparé.
    devMiddlewareInstance = webpackDevMiddleware(clientCompiler, {
        serverSideRender: true,
        publicPath: clientCompiler.options.output.publicPath,
        writeToDisk: (filePath) => filePath.endsWith('loadable-stats.json'),
    });

    // SSR compiler en watch séparé — écrit sur disque dans dist/ssr/.
    // Rechargé dynamiquement à chaque requête via getSSRModules().
    // Pas de nodemon — pas de redémarrage serveur nécessaire.
    ssrCompiler.watch({aggregateTimeout: 300}, (err, stats) => {
        if (err) console.error('SSR compiler error:', err);
        else if (stats?.hasErrors()) console.error('SSR bundle errors:', stats.toString({errors: true}));
        else console.log('SSR bundle rebuilt.');
    });

    const hotMiddleware = webpackHotMiddleware(clientCompiler, {
        path: '/__webpack_hmr',
        heartbeat: 30 * 1000,
        dynamicPublicPath: true,
    });

    const koaConnect = (fn) => (ctx, next) =>
        new Promise((resolve, reject) => {
            fn(ctx.req, ctx.res, (err) => {
                if (err) reject(err);
                else resolve(next());
            });
        });

    app.use(koaConnect(devMiddlewareInstance));
    app.use(koaConnect(hotMiddleware));
}

const pwaRootFiles = {
    '/service-worker.js': {
        type: 'application/javascript',
        file: 'service-worker.js',
        headers: {'Service-Worker-Allowed': '/'}
    },
    '/manifest.json': {type: 'application/json', file: 'manifest.json'},
};

app.use(async (ctx, next) => {
    const entry = pwaRootFiles[ctx.path];
    if (entry) {
        const filePath = path.join(__PROJECT_ROOT__, 'public/dist/web', entry.file);
        if (!fs.existsSync(filePath)) {
            await next();
            return;
        }
        ctx.type = entry.type;
        if (entry.headers) Object.entries(entry.headers).forEach(([k, v]) => ctx.set(k, v));
        ctx.body = fs.createReadStream(filePath);
        return;
    }
    await next();
});

app.use(async (ctx, next) => {
    if (ctx.path !== '/') return next();

    ctx.respond = false;

    // Charger App et configureAppStore depuis le bundle ssr à jour
    const {App, configureAppStore} = getSSRModules();

    const {nonce} = ctx.state;
    const {scriptTags, linkTags, preloadTags} = buildAssetTags({nonce, devMiddlewareInstance, clientCompiler});

    const store = configureAppStore();
    const preloadedState = store.getState();

    setCSP(ctx.res, nonce);
    ctx.res.setHeader('Content-Type', 'text/html');
    ctx.res.writeHead(200);

    let cachedShell = null;
    try {
        if (isRedisReady() && isProd) cachedShell = await redis.get(CACHE_KEY);
    } catch (err) {
        console.error('Redis get error (falling back to live render):', err);
    }

    if (cachedShell) {
        const {shell, loadableTags} = JSON.parse(cachedShell);
        const tags = loadableTags.replace(/%%NONCE%%/g, nonce);
        const tail = buildTail({nonce, preloadedState, loadableTags: tags, scriptTags});
        ctx.res.write(shell);
        ctx.res.write(tail);
        ctx.res.end();
        return;
    }

    const {cache, transform: emotionTransform} = createEmotionStream();
    const extractor = new ChunkExtractor({statsFile: LOADABLE_STATS_FILE, publicPath: '/dist/web/'});

    const jsx = extractor.collectChunks(
        <CacheProvider value={cache}>
            <Provider store={store}>
                <StaticRouter location={ctx.url}>
                    <App/>
                </StaticRouter>
            </Provider>
        </CacheProvider>
    );

    const head = buildHead(linkTags, preloadTags);
    ctx.res.write(head);

    const shellChunks = [];
    const tee = new Transform({
        transform(chunk, _encoding, callback) {
            shellChunks.push(chunk.toString());
            callback(null, chunk);
        },
    });

    emotionTransform.pipe(tee);
    tee.pipe(ctx.res, {end: false});

    await new Promise((resolve, reject) => {
        const {pipe} = renderToPipeableStream(jsx, {
            onShellReady() {
                pipe(emotionTransform);
            },
            onShellError(err) {
                console.error('Shell error:', err);
                ctx.res.end('</div></body></html>');
                captureException(err);
                reject(err);
            },
            onError(err) {
                console.error('Streaming error:', err);
                captureException(err);
            },
        });

        tee.on('finish', async () => {
            const loadableTags = extractor.getScriptTags({nonce})
                .replace(/<script[^>]*data-chunk="main"[^>]*>[^<]*<\/script>\n?/g, '');
            const tail = buildTail({nonce, preloadedState, loadableTags, scriptTags});
            ctx.res.write(tail);
            ctx.res.end();

            try {
                if (isRedisReady() && isProd) {
                    const shellData = JSON.stringify({
                        shell: head + shellChunks.join(''),
                        loadableTags: extractor.getScriptTags({nonce: '%%NONCE%%'}),
                    });
                    await redis.set(CACHE_KEY, shellData, {EX: Number(SHELL_CACHE_TTL)});
                }
            } catch (err) {
                console.error('Redis set error:', err);
            }

            resolve();
        });

        tee.on('error', (err) => {
            ctx.res.destroy(err);
            captureException(err);
            reject(err);
        });
    });
});

app.use(mount('/', serve(path.join(__PROJECT_ROOT__, 'public'), {index: false})));

const main = async () => {
    try {
        await Promise.race([
            redis.connect(),
            new Promise((_, reject) => setTimeout(() => reject(new Error('Redis connection timeout')), 3000)),
        ]);
        if (isRedisReady()) {
            await redis.del(CACHE_KEY);
            console.log('Redis shell cache cleared on startup');
        }
        console.log(`Redis connected at ${REDIS_HOST}:${REDIS_PORT}`);
    } catch (err) {
        console.warn('Redis unavailable, SSR cache disabled:', err.message);
    }

    const lifecycle = createLifecycleServer({
        port: Number(LIFECYCLE_PORT),
        onShutdown: async () => {
            console.log('Closing server and connections...');
            await redis.quit();
        },
    });

    const serverOptions = {
        key: fs.readFileSync(process.env.SSL_KEY_PATH || path.join(__PROJECT_ROOT__, 'certs/localhost+2-key.pem')),
        cert: fs.readFileSync(process.env.SSL_CERT_PATH || path.join(__PROJECT_ROOT__, 'certs/localhost+2.pem')),
        allowHTTP1: true,
    };

    const server = http2.createSecureServer(serverOptions, app.callback());
    server.listen(Number(DASHBOARD_PORT), async () => {
        await lifecycle.setReady(true);
        console.log(`Server started https://localhost:${DASHBOARD_PORT} (HTTP/2)`);
    });
};

main().catch((err) => {
    captureException(err);
    console.error(err);
});
