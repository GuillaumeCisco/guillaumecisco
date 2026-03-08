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
import {createLifecycleServer} from '@guillaumecisco/terminus-lifecycle';
import {renderToPipeableStream} from 'react-dom/server';
import {CacheProvider} from '@emotion/react';
import {ChunkExtractor} from '@loadable/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import configureAppStore from '../app/store';
import App from '../app';
import {createEmotionStream} from './emotionStream';

const {
    DASHBOARD_PORT = 3000,
    LIFECYCLE_PORT = 9000,
    REDIS_HOST = '127.0.0.1',
    REDIS_PORT = 6379,
    SHELL_CACHE_TTL = 3600, // seconds — 1 hour default
} = process.env;

// ── Redis client ───────────────────────────────────────────────────────────
// The client is created at startup and shared across requests.
// On connection error we log and continue — cache misses are handled gracefully,
// the app falls back to a live render so Redis is never a hard dependency.
const redis = createClient({
    socket: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
        // Disable automatic reconnection in dev to avoid log spam.
        // In production, retry with exponential backoff up to 3s.
        reconnectStrategy: process.env.NODE_ENV !== 'production'
            ? false
            : (retries) => Math.min(retries * 100, 3000),
    },
});

// isRedisReady guards all Redis calls — if Redis is down, requests fall back
// to a live render silently without throwing.
const isRedisReady = () => redis.isReady;

redis.on('error', (err) => {
    // Silence connection errors when Redis is not ready (e.g. not available in dev).
    // Once connected, always log errors so prod issues are visible.
    if (isRedisReady()) {
        console.error('Redis error:', err);
    }
});

const CACHE_KEY = 'ssr:shell'; // single key — portfolio has one route

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Build the asset tags from the webpack manifest (production)
 * or from webpack-dev-middleware stats (development).
 */
const buildAssetTags = ({nonce, devMiddlewareInstance, clientCompiler}) => {
    let scriptTags = '';
    let linkTags = '';

    if (process.env.NODE_ENV !== 'production') {
        const devStats = devMiddlewareInstance?.context?.stats;
        if (devStats) {
            const clientStats = devStats.stats
                ? devStats.stats.find(s => s.compilation.name === 'client')
                : devStats;
            if (clientStats) {
                const info = clientStats.toJson({all: false, entrypoints: true});
                const files = info.entrypoints?.main?.assets?.map(a => a.name) || [];
                const pub = clientCompiler.options.output.publicPath;
                scriptTags = files
                    .filter(f => f.endsWith('.js'))
                    .map(f => `<script src="${pub}${f}" nonce="${nonce}" defer></script>`)
                    .join('\n');
                linkTags = files
                    .filter(f => f.endsWith('.css'))
                    .map(f => `<link rel="stylesheet" href="${pub}${f}">`)
                    .join('\n');
            }
        }
    } else {
        // In production, asset URLs are read from the webpack manifest.
        // entrypoints contains paths relative to publicPath (/dist/web/),
        // so the prefix must be added explicitly.
        const manifestPath = path.join(__PROJECT_ROOT__, 'public/dist/web/asset-manifest.json');
        if (fs.existsSync(manifestPath)) {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
            const files = manifest.entrypoints || [];
            const pub = '/dist/web/';
            scriptTags = files
                .filter(f => f.endsWith('.js'))
                .map(f => `<script src="${pub}${f}" nonce="${nonce}" defer></script>`)
                .join('\n');
            linkTags = files
                .filter(f => f.endsWith('.css'))
                .map(f => `<link rel="stylesheet" href="${pub}${f}">`)
                .join('\n');
        }
    }

    return {scriptTags, linkTags};
};

/**
 * Build the full HTML head string.
 * linkTags are static (hashed filenames) so they can safely be cached.
 */
const buildHead = (linkTags) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Guillaume Cisco — Senior Lead FullStack Engineer</title>
    <meta name="description" content="Portfolio of Guillaume Cisco, Senior Lead FullStack Engineer specializing in React, Node.js, Python and cloud architectures. Based in Paris, France.">
    <meta name="author" content="Guillaume Cisco">
    <meta property="og:title" content="Guillaume Cisco — Senior Lead FullStack Engineer">
    <meta property="og:description" content="Interactive portfolio of Guillaume Cisco. Explore my experience, skills and hobbies.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://guillaumecisco.com/">
    <link rel="manifest" href="/manifest.json" />
    ${linkTags}
  </head>
  <body>
    <div id="root">`;

/**
 * Build the tail injected after the React shell.
 * The preloaded state, nonce, and loadable tags are request-specific — never cached.
 *
 * IMPORTANT: loadableTags must be built AFTER renderToPipeableStream completes,
 * because ChunkExtractor only knows which chunks were used once the render is done.
 * loadableTags are placed before scriptTags so async chunks are registered before
 * the main bundle executes.
 */
const buildTail = ({nonce, preloadedState, loadableTags, scriptTags}) => `</div>
    <script nonce="${nonce}">
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    ${loadableTags}
    ${scriptTags}
  </body>
</html>`;

// ── Set CSP header ─────────────────────────────────────────────────────────
// Must be called before writeHead. The nonce is request-scoped so this
// cannot be delegated to helmet (which would generate its own nonce).
const setCSP = (res, nonce) => {
    res.setHeader('Content-Security-Policy',
        `default-src 'self'; ` +
        `script-src 'self' 'nonce-${nonce}'; ` +
        `style-src 'self' 'unsafe-inline'; ` +
        `font-src 'self'; ` +
        `img-src 'self' data:; ` +
        `connect-src 'self'; ` +
        `base-uri 'self'; ` +
        `form-action 'self'; ` +
        `frame-ancestors 'self'; ` +
        `object-src 'none'; ` +
        `upgrade-insecure-requests`
    );
};

// ── Loadable stats path ────────────────────────────────────────────────────
// Resolved once at startup — ChunkExtractor reads this file on every request
// to determine which chunks were used during SSR and inject the matching
// <script> tags before the main bundle.
const LOADABLE_STATS_FILE = path.join(__PROJECT_ROOT__, 'public/dist/web/loadable-stats.json');

// ── Koa app ────────────────────────────────────────────────────────────────
const app = new Koa();

// ── Nonce generation — must run before SSR handler ─────────────────────────
// A fresh nonce is generated per request and stored in ctx.state
// so it can be used consistently in both the CSP header and the HTML script tag.
app.use(async (ctx, next) => {
    ctx.state.nonce = crypto.randomBytes(16).toString('base64');
    await next();
});

// ── Helmet — all security headers except CSP ──────────────────────────────
// CSP is set manually in the SSR handler so that the nonce value
// is guaranteed to match between the header and the inline script tag.
app.use(koaHelmet({contentSecurityPolicy: false}));

// ── Dev middleware ─────────────────────────────────────────────────────────
// __PROJECT_ROOT__ is injected by webpack DefinePlugin (= project root path).
// Hoisted to module scope so the SSR handler can access clientCompiler
// and devMiddlewareInstance without a closure problem.
let clientCompiler = null;
let devMiddlewareInstance = null;

if (process.env.NODE_ENV !== 'production') {
    // eval('require') escapes webpack's static analysis so these dev-only
    // requires are resolved at runtime by Node, not bundled by webpack.
    const nodeRequire = eval('require');
    // const webpackConfig = nodeRequire(path.join(__PROJECT_ROOT__, 'config/webpack.config.babel.js'));
    const webpackConfig = nodeRequire(path.join(__PROJECT_ROOT__, 'config/rspack.config.babel.js'));
    const webpackDevMiddleware = nodeRequire('webpack-dev-middleware');
    const webpackHotMiddleware = nodeRequire('webpack-hot-middleware');
    // const webpack = nodeRequire('webpack');
    const webpack = nodeRequire('@rspack/core').rspack;
    const multiCompiler = webpack(webpackConfig);
    clientCompiler = multiCompiler.compilers.find(c => c.name === 'client');

    // Clear the require cache for client modules after each rebuild
    // so the SSR handler always picks up the latest compiled output.
    clientCompiler.hooks.afterEmit.tap('cleanup-the-require-cache', () => {
        Object.keys(require.cache).forEach((key) => {
            if (key.includes(path.join(__PROJECT_ROOT__, 'src/client/'))) delete require.cache[key];
        });
    });

    // Invalidate the Redis shell cache on every client rebuild in dev
    // so stale Emotion class names never survive a hot reload.
    clientCompiler.hooks.done.tap('invalidate-redis-shell-cache', () => {
        if (isRedisReady()) {
            redis.del(CACHE_KEY).catch((err) => console.error('Redis cache invalidation error:', err));
            console.log('Redis shell cache invalidated.');
        }
    });

    let bundleStart = null;
    clientCompiler.hooks.compile.tap('Client', () => {
        console.log('Bundling...');
        bundleStart = Date.now();
    });
    clientCompiler.hooks.done.tap('Client', () => {
        console.log(`Bundled in ${Date.now() - bundleStart}ms!`);
    });

    // webpack-dev-middleware serves assets from memory — no writeToDisk needed.
    // koa-static must not intercept /dist/* in dev to avoid conflicts.
    devMiddlewareInstance = webpackDevMiddleware(multiCompiler, {
        serverSideRender: true,
        publicPath: clientCompiler.options.output.publicPath,
        writeToDisk: (filePath) => filePath.endsWith('loadable-stats.json'),
    });

    const hotMiddleware = webpackHotMiddleware(clientCompiler, {
        path: '/__webpack_hmr',
        heartbeat: 30 * 1000,
        dynamicPublicPath: true,
    });

    // Wrap Connect-style middleware for Koa
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
        headers: {'Service-Worker-Allowed': '/'},
    },
    '/manifest.json': {
        type: 'application/json',
        file: 'manifest.json',
    },
    '/offline.html': {
        type: 'text/html',
        file: 'offline.html',
    }
};
app.use(async (ctx, next) => {
    const entry = pwaRootFiles[ctx.path];

    if (entry) {
        ctx.type = entry.type;

        if (entry.headers) {
            Object.entries(entry.headers).forEach(([k, v]) => ctx.set(k, v));
        }

        ctx.body = fs.createReadStream(
            path.join(__PROJECT_ROOT__, 'public/dist/web', entry.file)
        );
        return;
    }

    await next();
});

// ── SSR handler ────────────────────────────────────────────────────────────
app.use(async (ctx, next) => {
    if (ctx.path !== '/') return next();

    const {nonce} = ctx.state;
    const {scriptTags, linkTags} = buildAssetTags({nonce, devMiddlewareInstance, clientCompiler});

    // The preloaded state is always fresh — it is never cached.
    const store = configureAppStore();
    const preloadedState = store.getState();

    setCSP(ctx.res, nonce);
    ctx.res.setHeader('Content-Type', 'text/html');
    ctx.res.writeHead(200);

    // ── Cache hit path ─────────────────────────────────────────────────────
    // The cached shell contains: the HTML head (with hashed asset links),
    // the Emotion <style> tags, and the React-rendered HTML.
    // The tail (preloaded state, nonce, loadable tags) is always appended fresh.
    //
    // loadableTags are NOT cached: they embed a nonce and must be rebuilt per
    // request. On cache hit we reconstruct them from the stats file without
    // re-rendering — ChunkExtractor without collectChunks returns all entry
    // chunks, which is correct since the main entry always loads all chunks
    // registered for the route.
    let cachedShell = null;
    try {
        if (isRedisReady() && process.env.NODE_ENV === 'production') {
            cachedShell = await redis.get(CACHE_KEY);
        }
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

    // ── Cache miss path — live render + capture for caching ───────────────
    const {cache, transform: emotionTransform} = createEmotionStream();

    // ChunkExtractor.collectChunks wraps the app so @loadable/component can
    // track which chunks are rendered during SSR. getScriptTags() is called
    // AFTER the render completes (in tee 'finish') so the extractor has the
    // full picture of which chunks were used.
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

    const head = buildHead(linkTags);
    ctx.res.write(head);

    // Tee the emotion transform output: one branch streams to the client,
    // the other buffers into an array so we can store the shell in Redis.
    const shellChunks = [];

    const tee = new Transform({
        transform(chunk, _encoding, callback) {
            shellChunks.push(chunk.toString());
            callback(null, chunk);
        },
    });

    // emotionTransform → tee → res (streaming to client while buffering)
    emotionTransform.pipe(tee);
    tee.pipe(ctx.res, {end: false});

    await new Promise((resolve, reject) => {
        const {pipe} = renderToPipeableStream(jsx, {
            onShellReady() {
                pipe(emotionTransform);
            },
            onShellError(err) {
                console.error('Shell error:', err);
                console.error(err?.stack);
                ctx.res.end('</div></body></html>');
                reject(err);
            },
            onError(err) {
                console.error('Streaming error:', err);
                console.error(err?.stack);
            },
        });

        tee.on('finish', async () => {
            // Build the tail AFTER render — extractor now knows which chunks were used.
            const loadableTags = extractor.getScriptTags({nonce})
                .replace(/<script[^>]*data-chunk="main"[^>]*>[^<]*<\/script>\n?/g, '');
            const tail = buildTail({nonce, preloadedState, loadableTags, scriptTags});

            ctx.res.write(tail);
            ctx.res.end();

            // Store the shell in Redis after the response is sent.
            // head + emotion-transformed HTML = the full cacheable shell.
            // loadableTags and tail are intentionally excluded — they are request-specific.
            const shellData = JSON.stringify({
                shell: head + shellChunks.join(''),
                loadableTags: extractor.getScriptTags({nonce: '%%NONCE%%'}), // placeholder nonce
            });
            try {
                if (isRedisReady() && process.env.NODE_ENV === 'production') {
                    await redis.set(CACHE_KEY, shellData, {EX: Number(SHELL_CACHE_TTL)});
                }
            } catch (err) {
                console.error('Redis set error:', err);
            }

            resolve();
        });

        tee.on('error', (err) => {
            ctx.res.destroy(err);
            reject(err);
        });
    });
});

// ── Static files ───────────────────────────────────────────────────────────
// Serves the public/ directory for production assets (fonts, images, dist/web/*).
// In dev, webpack-dev-middleware handles /dist/web/* from memory,
// but koa-static still serves anything else in public/ (e.g. favicons).
app.use(mount('/', serve(path.join(__PROJECT_ROOT__, 'public'), {index: false})));

// ── Server bootstrap ───────────────────────────────────────────────────────
const main = async () => {
    // Connect to Redis — non-fatal if unavailable (dev without Redis, or Redis down in prod).
    // A 3s timeout prevents the server from hanging on startup if Redis is unreachable.
    try {
        await Promise.race([redis.connect(), new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Redis connection timeout')), 3000)
        )]);
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

main().catch(console.error);
