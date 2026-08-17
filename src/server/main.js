import './sentry';
import {captureException} from '@sentry/node';

import path from 'path';
import http from 'http';
import http2 from 'http2';
import https from 'https';
import fs from 'fs';
import crypto from 'crypto';
import {createClient} from 'redis';
import {Transform} from 'stream';
import httpProxy from 'http-proxy';
import Koa from 'koa';
import serve from 'koa-static';
import koaHelmet from 'koa-helmet';
import compress from 'koa-compress';
import {createLifecycleServer} from '@guillaumecisco/terminus-lifecycle';
import {renderToPipeableStream} from 'react-dom/server.node';
import {CacheProvider} from '@emotion/react';
import {ChunkExtractor} from '@loadable/server';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {createEmotionStream} from './emotionStream';

const ROOT = __PROJECT_ROOT__;

const PATHS = {
    public: path.join(ROOT, 'public'),

    ssrBundle: path.join(
        ROOT,
        'public/dist/ssr/static/js/main.js',
    ),

    assetManifest: path.join(
        ROOT,
        'public/dist/web/asset-manifest-web.json',
    ),

    loadableStats: path.join(
        ROOT,
        'public/dist/web/loadable-stats.json',
    ),

    sslKey:
        process.env.SSL_KEY_PATH ||
        path.join(ROOT, 'certs/localhost+2-key.pem'),

    sslCert:
        process.env.SSL_CERT_PATH ||
        path.join(ROOT, 'certs/localhost+2.pem'),
};

const {
    DASHBOARD_PORT = 3000,
    LIFECYCLE_PORT = 9000,
    REDIS_HOST = '127.0.0.1',
    REDIS_PORT = 6379,
    SHELL_CACHE_TTL = 3600,
    TLS_TERMINATED_BY_PROXY = 'false',
    TRUST_PROXY = 'false',
} = process.env;

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const isHttpsEnabled = TLS_TERMINATED_BY_PROXY !== 'true';

const DEV_ORIGIN = 'https://localhost:8080';
const DEV_PROXY_PATHS = ['/_rspack', '/dist/web'];

const BUILD_ID = fs.existsSync(
    path.join(ROOT, '.build-id'),
)
    ? fs.readFileSync(
        path.join(ROOT, '.build-id'),
        'utf8',
    ).trim()
    : 'dev';
const CACHE_KEY = `ssr:shell:${BUILD_ID}`;

/**
 * Error handling
 */

process.on('uncaughtException', (err) => {
    captureException(err);
    console.error('uncaughtException', err);
});

process.on('unhandledRejection', (reason) => {
    captureException(reason);
    console.error('unhandledRejection', reason);
});

/**
 * SSR modules
 */

let prodSSRModules = null;

if (isProd) {
    const nodeRequire = eval('require');

    prodSSRModules = nodeRequire(PATHS.ssrBundle);
}

const getSSRModules = () => {
    if (isProd) {
        return {
            App: prodSSRModules.App,
            configureAppStore:
            prodSSRModules.configureAppStore,
        };
    }

    const nodeRequire = eval('require');

    delete nodeRequire.cache[PATHS.ssrBundle];

    const ssrBundle = nodeRequire(PATHS.ssrBundle);

    return {
        App: ssrBundle.App,
        configureAppStore:
        ssrBundle.configureAppStore,
    };
};

/**
 * Redis
 */

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
    if (isRedisReady()) {
        console.error('Redis error:', err);
    }
});

/**
 * Asset manifest
 */

let assetManifest = null;

const loadAssetManifest = () => {
    if (!fs.existsSync(PATHS.assetManifest)) {
        return null;
    }

    return JSON.parse(
        fs.readFileSync(PATHS.assetManifest, 'utf-8'),
    );
};

if (isProd) {
    assetManifest = loadAssetManifest();
}

const getAssetManifest = () => {
    if (isDev) {
        return loadAssetManifest();
    }

    return assetManifest;
};

const getPublicPath = () => '/dist/web/';

/**
 * Assets
 */

const buildAssetTags = ({nonce}) => {
    const manifest = getAssetManifest();

    if (!manifest) {
        return {
            scriptTags: '',
            linkTags: '',
            preloadTags: '',
            fontFaceTag: '',
        };
    }

    const files = (manifest.entrypoints || [])
        .filter((f) => !f.includes('.hot-update.'));

    const jsFiles = files
        .filter((f) => f.endsWith('.js'))
        .filter((f) => (
            isProd || !f.includes('runtime')
        ));

    const cssFiles = isProd
        ? files.filter((f) => f.endsWith('.css'))
        : [];

    const publicPath = getPublicPath();

    const scriptTags = jsFiles
        .map((f) => (
            `<script src="${publicPath}${f}" nonce="${nonce}" defer></script>`
        ))
        .join('\n');

    const linkTags = cssFiles
        .map((f) => (
            `<link rel="stylesheet" href="${publicPath}${f}">`
        ))
        .join('\n');

    const criticalJs =
        jsFiles.find((f) => f.includes('main')) ||
        jsFiles[0];

    const criticalCss =
        cssFiles.find((f) => f.includes('main')) ||
        cssFiles[0];

    const criticalFont = manifest.files?.[
        'static/media/nunito-light-webfont.woff2'
    ];

    const fontFaceTag = criticalFont
        ? `<style nonce="${nonce}">
@font-face {
    font-family: 'nunitolight';
    src: url('${criticalFont}') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: optional;
}
</style>`
        : '';

    const preloadTags = [
        criticalJs &&
        `<link rel="preload" href="${publicPath}${criticalJs}" as="script">`,

        criticalCss &&
        `<link rel="preload" href="${publicPath}${criticalCss}" as="style">`,

        criticalFont &&
        `<link rel="preload" href="${criticalFont}" as="font" type="font/woff2" crossorigin="anonymous">`,
    ]
        .filter(Boolean)
        .join('\n');

    return {
        scriptTags,
        linkTags,
        preloadTags,
        fontFaceTag,
    };
};

/**
 * HTML
 */

const buildHead = ({
                       fontFaceTag,
                       linkTags,
                       preloadTags,
                   }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1"
>

<meta
    name="emotion-insertion-point"
    content="emotion-insertion-point"
/>

<title>
Guillaume Cisco | Agentic Engineer
</title>

<meta
    name="description"
    content="Portfolio of Guillaume Cisco, Agentic Engineer with 15 years of full-stack experience building reliable AI agents and production systems."
>

<meta
    name="author"
    content="Guillaume Cisco"
>

<meta
    property="og:title"
    content="Guillaume Cisco | Agentic Engineer"
>

<meta
    property="og:description"
    content="Interactive portfolio of an Agentic Engineer backed by 15 years of full-stack engineering."
>

<meta property="og:type" content="website">

<meta
    property="og:url"
    content="https://guillaumecisco.com/"
>

${isProd
    ? `
<link rel="manifest" href="/manifest.json" />
`
    : ''}

<link rel="icon" href="/favicon.ico" sizes="any" />

${preloadTags}

${fontFaceTag}

${linkTags}
</head>

<body>
<div id="root">`;

const buildTail = ({
                       nonce,
                       preloadedState,
                       loadableTags,
                       scriptTags,
                   }) => `</div>

<script nonce="${nonce}">
window.__PRELOADED_STATE__ =
${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
</script>

${loadableTags}
${scriptTags}

</body>
</html>`;

/**
 * CSP
 */

const setCSP = (res, nonce) => {
    const directives = [
        `default-src 'self' ${isDev ? DEV_ORIGIN : ''}`,

        `script-src 'self' 'nonce-${nonce}' ${
            isDev
                ? `${DEV_ORIGIN} 'unsafe-eval'`
                : ''
        }`,

        `style-src 'self' 'unsafe-inline' ${
            isDev ? DEV_ORIGIN : ''
        }`,

        `font-src 'self' data: ${
            isDev ? DEV_ORIGIN : ''
        }`,

        `img-src 'self' data: blob: ${
            isDev ? DEV_ORIGIN : ''
        }`,

        `connect-src 'self' ws: wss: ${
            isDev ? DEV_ORIGIN : ''
        } https://o129911.ingest.us.sentry.io`,

        `object-src 'none'`,
        `base-uri 'self'`,
        `form-action 'self'`,
        `frame-ancestors 'self'`,
    ];

    res.setHeader(
        'Content-Security-Policy',
        directives.join('; '),
    );
};

/**
 * App
 */

const app = new Koa();
app.proxy = TRUST_PROXY === 'true';
let devProxy = null;

/**
 * Dev proxies
 */

if (isDev) {
    devProxy = httpProxy.createProxyServer({
        target: DEV_ORIGIN,
        changeOrigin: true,
        secure: false,
        ws: true,
    });

    devProxy.on('error', (err, _req, res) => {
        if (res?.writeHead) {
            res.writeHead(502, {
                'Content-Type': 'text/plain',
            });
            res.end('Bad Gateway');
            return;
        }
        console.error('Dev proxy error:', err);
    });

    app.use(async (ctx, next) => {
        const shouldProxy = DEV_PROXY_PATHS.some((prefix) => (
            ctx.path === prefix ||
            ctx.path.startsWith(`${prefix}/`)
        ));

        if (!shouldProxy) {
            return next();
        }

        await new Promise((resolve, reject) => {
            devProxy.web(ctx.req, ctx.res, {}, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });

        ctx.respond = false;
    });
}

/**
 * Static
 */

if (isProd) {
    app.use(
        serve(PATHS.public, {
            index: false,
        }),
    );
}

/**
 * Nonce
 */

app.use(async (ctx, next) => {
    ctx.state.nonce = crypto
        .randomBytes(16)
        .toString('base64');

    await next();
});

/**
 * Security
 */

app.use(
    koaHelmet({
        contentSecurityPolicy: false,
        permissionsPolicy: false,
    }),
);

/**
 * Compression
 */

app.use(
    compress({
        br: true,
        gzip: true,
        threshold: 1024,
    }),
);

/**
 * PWA root files
 */

const pwaRootFiles = {
    '/favicon.ico': {
        type: 'image/x-icon',
        file: 'favicon.ico',
    },

    '/service-worker.js': {
        type: 'application/javascript',
        file: 'service-worker.js',

        headers: {
            'Service-Worker-Allowed': '/',
        },
    },

    '/manifest.json': {
        type: 'application/json',
        file: 'manifest.json',
    },
};

app.use(async (ctx, next) => {
    const entry = pwaRootFiles[ctx.path];

    if (!entry) {
        return next();
    }

    const filePath = path.join(
        ROOT,
        'public/dist/web',
        entry.file,
    );

    if (!fs.existsSync(filePath)) {
        return next();
    }

    ctx.type = entry.type;

    if (entry.headers) {
        Object.entries(entry.headers).forEach(
            ([key, value]) => {
                ctx.set(key, value);
            },
        );
    }

    ctx.body = fs.createReadStream(filePath);
});

/**
 * SSR
 */

app.use(async (ctx, next) => {
    if (ctx.path !== '/') {
        return next();
    }

    ctx.respond = false;

    const {nonce} = ctx.state;

    const {
        scriptTags,
        linkTags,
        preloadTags,
        fontFaceTag,
    } = buildAssetTags({nonce});

    const {
        App,
        configureAppStore,
    } = getSSRModules();

    const store = configureAppStore();

    const preloadedState = store.getState();

    setCSP(ctx.res, nonce);

    ctx.res.setHeader(
        'Content-Type',
        'text/html; charset=utf-8',
    );

    ctx.res.writeHead(200);

    /**
     * Redis cache
     */

    let cachedShell = null;

    try {
        if (isProd && isRedisReady()) {
            cachedShell = await redis.get(CACHE_KEY);
        }
    } catch (err) {
        console.error(
            'Redis get error:',
            err,
        );
    }

    if (cachedShell) {
        const {
            shell,
            loadableTags,
        } = JSON.parse(cachedShell);

        const tags = loadableTags.replace(
            /%%NONCE%%/g,
            nonce,
        );

        const tail = buildTail({
            nonce,
            preloadedState,
            loadableTags: tags,
            scriptTags,
        });

        ctx.res.write(shell);
        ctx.res.write(tail);
        ctx.res.end();

        return;
    }

    const {
        cache,
        transform: emotionTransform,
    } = createEmotionStream();

    const extractor = isProd
        ? new ChunkExtractor({
            statsFile: PATHS.loadableStats,
            publicPath: getPublicPath(),
        })
        : {
            collectChunks: (app) => app,
            getScriptTags: () => '',
        };

    const jsx = extractor.collectChunks(
        <CacheProvider value={cache}>
            <Provider store={store}>
                <StaticRouter location={ctx.url}>
                    <App/>
                </StaticRouter>
            </Provider>
        </CacheProvider>,
    );

    const head = buildHead({
        fontFaceTag,
        linkTags,
        preloadTags,
    });

    ctx.res.write(head);

    const shellChunks = [];

    const tee = new Transform({
        transform(chunk, _encoding, callback) {
            shellChunks.push(chunk.toString());

            callback(null, chunk);
        },
    });

    emotionTransform.pipe(tee);

    tee.pipe(ctx.res, {
        end: false,
    });

    await new Promise((resolve, reject) => {
        const stream = renderToPipeableStream(
            jsx,
            {
                onShellReady() {
                    stream.pipe(emotionTransform);
                },

                onShellError(err) {
                    captureException(err);

                    console.error(
                        'SSR shell error:',
                        err,
                    );

                    ctx.res.statusCode = 500;

                    ctx.res.end(
                        '</div></body></html>',
                    );

                    reject(err);
                },

                onError(err) {
                    captureException(err);

                    console.error(
                        'SSR stream error:',
                        err,
                    );
                },
            },
        );

        const abortTimeout = setTimeout(() => {
            stream.abort();
        }, 10000);

        tee.on('finish', async () => {
            clearTimeout(abortTimeout);

            const loadableTags =
                extractor.getScriptTags({
                    nonce,
                });

            const tail = buildTail({
                nonce,
                preloadedState,
                loadableTags,
                scriptTags
            });

            ctx.res.write(tail);

            ctx.res.end();

            /**
             * Redis shell cache
             */

            try {
                if (isProd && isRedisReady()) {
                    const shellData = JSON.stringify({
                        shell:
                            head +
                            shellChunks.join(''),

                        loadableTags:
                            extractor.getScriptTags({
                                nonce:
                                    '%%NONCE%%',
                            }),
                    });

                    await redis.set(
                        CACHE_KEY,
                        shellData,
                        {
                            EX: Number(
                                SHELL_CACHE_TTL,
                            ),
                        },
                    );
                }
            } catch (err) {
                console.error(
                    'Redis set error:',
                    err,
                );
            }

            resolve();
        });

        tee.on('error', (err) => {
            clearTimeout(abortTimeout);

            captureException(err);

            ctx.res.destroy(err);

            reject(err);
        });
    });
});

/**
 * Main
 */

const main = async () => {
    try {
        await Promise.race([
            redis.connect(),

            new Promise((_, reject) => (
                setTimeout(
                    () => reject(
                        new Error(
                            'Redis timeout',
                        ),
                    ),
                    3000,
                )
            )),
        ]);

        if (isRedisReady()) {
            await redis.del(CACHE_KEY);
        }

        console.log(
            `Redis connected at ${REDIS_HOST}:${REDIS_PORT}`,
        );
    } catch (err) {
        console.warn(
            'Redis unavailable:',
            err.message,
        );
    }

    const lifecycle = createLifecycleServer({
        port: Number(LIFECYCLE_PORT),

        onShutdown: async () => {
            if (isRedisReady()) {
                await redis.quit();
            }
        },
    });

    let server;

    if (!isHttpsEnabled) {
        server = http.createServer(app.callback());
    } else {
        const serverOptions = {
            key: fs.readFileSync(PATHS.sslKey),

            cert: fs.readFileSync(PATHS.sslCert),

            allowHTTP1: true,
        };

        server = isProd
            ? http2.createSecureServer(
                serverOptions,
                app.callback(),
            )
            : https.createServer(
                serverOptions,
                app.callback(),
            );
    }

    if (isDev) {
        server.on('upgrade', (req, socket, head) => {
            const reqPath = req.url || '';
            const shouldProxy = DEV_PROXY_PATHS.some((prefix) => (
                reqPath === prefix ||
                reqPath.startsWith(`${prefix}/`)
            ));

            if (!shouldProxy) {
                socket.destroy();
                return;
            }

            devProxy.ws(req, socket, head);
        });
    }

    server.listen(Number(DASHBOARD_PORT), async () => {
        await lifecycle.setReady(true);
        const protocol = isHttpsEnabled ? 'https' : 'http';
        const transport = isHttpsEnabled && isProd
            ? ' (HTTP/2)'
            : '';

        console.log(
            `Server started ${protocol}://localhost:${DASHBOARD_PORT}${transport}`,
        );
    });
};

main().catch((err) => {
    captureException(err);

    console.error(err);
});
