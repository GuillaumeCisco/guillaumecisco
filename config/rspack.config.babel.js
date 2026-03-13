const fs = require('fs');
const path = require('path');
const { rspack } = require('@rspack/core');
const resolve = require('resolve');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const LazySliceVirtualHMRPlugin = require('../src/lib/plugins/LazySliceVirtualHMRPlugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const {TsCheckerRspackPlugin} = require('ts-checker-rspack-plugin');
const WorkboxWebpackPlugin = require('@aaroon/workbox-rspack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ESLintPlugin = require('eslint-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ReactRefreshRspackPlugin = require('@rspack/plugin-react-refresh');
const nodeExternals = require('webpack-node-externals');
const {sentryWebpackPlugin} = require('@sentry/webpack-plugin');
const pwaManifestPlugin = require('./pwaManifest');

const packageInfo = require('../package.json');

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';


// Some apps do not need the benefits of saving a web request, so not inlining the chunk
// makes for a smoother build process.
// const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';

const emitErrorsAsWarnings = process.env.ESLINT_NO_DEV_ERRORS === 'true';
const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';

const imageInlineSizeLimit = parseInt(
    process.env.IMAGE_INLINE_SIZE_LIMIT || '10000',
    10);

// Check if TypeScript is setup
const useTypeScript = fs.existsSync(paths.appTsConfig);

// Check if Tailwind config exists
const useTailwind = fs.existsSync(
    path.join(paths.appPath, 'tailwind.config.js'),
);

// Get the path to the uncompiled service worker (if it exists).
const swSrc = paths.swSrc;

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const hasJsxRuntime = (() => {
    if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
        return false;
    }

    try {
        require.resolve('react/jsx-runtime');
        return true;
    } catch {
        return false;
    }
})();


// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
const getConfig = (target, {isSSR = false} = {}) => {
    const isEnvDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    const isEnvProduction = process.env.NODE_ENV === 'production';

    // Variable used for enabling profiling in Production
    // passed into alias object. Uses a flag if passed into the build command
    const isEnvProductionProfile = isEnvProduction && process.argv.includes('--profile');

    // We will provide `paths.publicUrlOrPath` to our app
    // as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
    // Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
    // Get environment variables to inject into our app.
    const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

    const shouldUseReactRefresh = env.raw.FAST_REFRESH;

    // common function to get style loaders
    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            target === 'web' && isEnvDevelopment && require.resolve('style-loader'),
            (target === 'node' && isEnvDevelopment || isEnvProduction) && {
                loader: rspack.CssExtractRspackPlugin.loader,
                // css is located in `static/css`, use '../../' to locate index.html folder
                // in production `paths.publicUrlOrPath` can be a relative path
                options: paths.publicUrlOrPath.startsWith('.')
                    ? {publicPath: '../../'}
                    : {},
            },
            // TODO check https://www.npmjs.com/package/css-hot-loader if needed
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                    postcssOptions: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebook/create-react-app/issues/2677
                        ident: 'postcss',
                        config: false,
                        plugins: !useTailwind
                            ? [
                                'postcss-flexbugs-fixes',
                                [
                                    'postcss-preset-env',
                                    {
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    },
                                ],
                                // Adds PostCSS Normalize as the reset css with default options,
                                // so that it honors browserslist config in package.json
                                // which in turn let's users customize the target behavior as per their needs.
                                'postcss-normalize',
                            ]
                            : [
                                'tailwindcss',
                                'postcss-flexbugs-fixes',
                                [
                                    'postcss-preset-env',
                                    {
                                        autoprefixer: {
                                            flexbox: 'no-2009',
                                        },
                                        stage: 3,
                                    },
                                ],
                            ],
                    },
                    sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
                },
            },
        ].filter(Boolean);
        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
                        root: paths.appSrc,
                    },
                },
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: true,
                    },
                },
            );
        }
        return loaders;
    };

    return {
        name: isSSR ? 'ssr' : target === 'node' ? 'server' : 'client',
        target: [target === 'node' ? target : 'browserslist'],
        // Webpack noise constrained to errors and warnings
        // stats: 'errors-warnings',
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        // Stop compilation early in production
        bail: isEnvProduction,
        devtool: isEnvProduction
            ? shouldUseSourceMap
                ? 'source-map'
                : false
            : isEnvDevelopment && 'cheap-module-source-map',
        // These are the "entry points" to our application.
        // This means they will be the "root" imports that are included in JS bundle.
        entry: target === 'node'
            ? (isSSR ? './src/server/ssr.js' : './src/server/main.js')
            : [...(isEnvDevelopment ? ['webpack-hot-middleware/client?reload=true'] : []), './src/client/main-web.js'],
        output: {
            path: path.join(paths.appBuild, isSSR ? 'ssr' : target),
            pathinfo: isEnvDevelopment,

            filename: target === 'node'
                ? `static/js/[name].js`
                : isEnvDevelopment
                    ? `static/js/[name].js`
                    : `static/js/[name].[contenthash:8].js`,

            chunkFilename: target === 'node'
                ? `static/js/[name].chunk.js`
                : isEnvDevelopment
                    ? `static/js/[name].chunk.js`
                    : `static/js/[name].[contenthash:8].chunk.js`,

            assetModuleFilename: 'static/media/[name].[hash][ext]',
            publicPath: `/dist/${target}/`,
            libraryTarget: target === 'node' ? 'commonjs2' : undefined,

            uniqueName: isSSR ? 'guillaumecisco-ssr' : 'guillaumecisco',

            devtoolModuleFilenameTemplate: isEnvProduction
                ? info =>
                    path
                        .relative(paths.appSrc, info.absoluteResourcePath)
                        .replace(/\\/g, '/')
                : isEnvDevelopment &&
                (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
        },
        infrastructureLogging: {
            level: 'none',
        },
        optimization: {
            minimize: isEnvProduction,
            runtimeChunk: target === 'web' ? 'single' : false,
            minimizer: [
                // This is only used in production mode
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            // We want terser to parse ecma 8 code. However, we don't want it
                            // to apply any minification steps that turns valid ecma 5 code
                            // into invalid ecma 5 code. This is why the 'compress' and 'output'
                            // sections only apply transformations that are ecma 5 safe
                            // https://github.com/facebook/create-react-app/pull/4234
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            // Disabled because of an issue with Uglify breaking seemingly valid code:
                            // https://github.com/facebook/create-react-app/issues/2376
                            // Pending further investigation:
                            // https://github.com/mishoo/UglifyJS2/issues/2011
                            comparisons: false,
                            // Disabled because of an issue with Terser breaking valid code:
                            // https://github.com/facebook/create-react-app/issues/5250
                            // Pending further investigation:
                            // https://github.com/terser-js/terser/issues/120
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        // Added for profiling in devtools
                        keep_classnames: isEnvProductionProfile,
                        keep_fnames: isEnvProductionProfile,
                        output: {
                            ecma: 5,
                            comments: false,
                            // Turned on because emoji and regex is not minified properly using default
                            // https://github.com/facebook/create-react-app/issues/2488
                            ascii_only: true,
                        },
                    },
                }),
                // This is only used in production mode
                new CssMinimizerPlugin(),
            ],
            moduleIds: 'deterministic',
            chunkIds: 'deterministic',
        },
        externals: target === 'node' ? [
            ({request}, callback) => {
                if (
                    /webpack-hot-middleware/.test(request) ||
                    /rspack\/dev-middleware/.test(request) ||
                    /webpack-dev-middleware/.test(request)
                ) {
                    return callback(null, `commonjs ${request}`);
                }
                callback();
            },
            nodeExternals({
                allowlist: [
                    /\.css$/i,
                    /^react-perfect-scrollbar$/i,
                    /^@emotion\//,
                    /^emotion$/,
                ],
            }),
        ] : undefined,
        resolve: {
            // This allows you to set a fallback for where webpack should look for modules.
            // We placed these paths second because we want `node_modules` to "win"
            // if there are any conflicts. This matches Node resolution mechanism.
            // https://github.com/facebook/create-react-app/issues/253
            modules: ['node_modules', paths.appNodeModules].concat(
                modules.additionalModulePaths || [],
            ),
            // These are the reasonable defaults supported by the Node ecosystem.
            // We also include JSX as a common component filename extension to support
            // some tools, although we do not recommend using it, see:
            // https://github.com/facebook/create-react-app/issues/290
            // `web` extension prefixes have been added for better support
            // for React Native Web.
            extensions: paths.moduleFileExtensions
                .map(ext => `.${ext}`)
                .filter(ext => useTypeScript || !ext.includes('ts')),
            alias: {
                // Support React Native Web
                // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
                'react-native': 'react-native-web',
                // Allows for better profiling with ReactDevTools
                ...(isEnvProductionProfile && {
                    'react-dom$': 'react-dom/profiling',
                    'scheduler/tracing': 'scheduler/tracing-profiling',
                }),
                ...(modules.webpackAliases || {}),
            },
            plugins: [],
        },
        module: {
            strictExportPresence: true,
            rules: [
                // Handle node_modules packages that contain sourcemaps
                shouldUseSourceMap && {
                    enforce: 'pre',
                    exclude: /@babel(?:\/|\\{1,2})runtime/,
                    test: /\.(js|mjs|jsx|ts|tsx|css)$/,
                    loader: require.resolve('source-map-loader'),
                },
                {
                    // "oneOf" will traverse all following loaders until one will
                    // match the requirements. When no loader matches it will fall
                    // back to the "file" loader at the end of the loader list.
                    oneOf: [
                        // TODO: Merge this config once `image/avif` is in the mime-db
                        // https://github.com/jshttp/mime-db
                        {
                            test: [/\.avif$/],
                            type: 'asset',
                            mimetype: 'image/avif',
                            parser: {
                                dataUrlCondition: {
                                    maxSize: imageInlineSizeLimit,
                                },
                            },
                        },
                        // "url" loader works like "file" loader except that it embeds assets
                        // smaller than specified limit in bytes as data URLs to avoid requests.
                        // A missing `test` is equivalent to a match.
                        {
                            // test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                            type: 'asset',
                            parser: {
                                dataUrlCondition: {
                                    maxSize: imageInlineSizeLimit,
                                },
                            },
                        },
                        // TODO use https://github.com/marella/new-url-loader for svgr
                        {
                            test: /\.svg$/,
                            oneOf: [
                                {
                                    issuer: /\.(ts|tsx|js|jsx|md|mdx)$/,
                                    use: [
                                        {
                                            loader: require.resolve('@svgr/webpack'),
                                            options: {
                                                prettier: false,
                                                svgo: false,
                                                svgoConfig: {
                                                    plugins: [{removeViewBox: false}],
                                                },
                                                titleProp: true,
                                                ref: true,
                                            },
                                        },
                                    ],
                                },
                                {
                                    type: 'asset',
                                    parser: {
                                        dataUrlCondition: {
                                            maxSize: imageInlineSizeLimit,
                                        },
                                    },
                                },
                            ],
                        },
                        // Process application JS with Babel.
                        // The preset includes JSX, Flow, TypeScript, and some ESnext features.
                        {
                            test: /\.(js|mjs|jsx|ts|tsx)$/,
                            include: paths.appSrc, // only bundle files in this directory
                            loader: require.resolve('babel-loader'),
                            options: {
                                caller: {target},
                                customize: require.resolve(
                                    'babel-preset-react-app/webpack-overrides',
                                ),
                                presets: [
                                    // do not transpil es6 import into require, webpack needs to see the import and exports statements to do tree-shaking
                                    [require.resolve('@babel/preset-env'), {modules: false}],
                                    [
                                        require.resolve('@babel/preset-react'),
                                        {
                                            runtime: hasJsxRuntime ? 'automatic' : 'classic',
                                            importSource: '@emotion/react'
                                        },
                                    ],
                                ],
                                plugins: [
                                    isEnvDevelopment
                                    && shouldUseReactRefresh
                                    && target === 'web'
                                    && require.resolve('react-refresh/babel'),
                                    ['@emotion/babel-plugin', {
                                        autoLabel: 'never',
                                        sourceMap: false,
                                        hoist: true,  // ← force le hoisting des styles, comportement identique dans les deux builds
                                    }],
                                    '@loadable/babel-plugin'
                                ].filter(Boolean),
                                // This is a feature of `babel-loader` for webpack (not Babel itself).
                                // It enables caching results in ./node_modules/.cache/babel-loader/
                                // directory for faster rebuilds.
                                cacheDirectory: true,
                                // See #6846 for context on why cacheCompression is disabled
                                cacheCompression: false,
                                compact: isEnvProduction,
                            },
                        },
                        // Process any JS outside of the app with Babel.
                        // Unlike the application JS, we only compile the standard ES features.
                        {
                            test: /\.(js|mjs)$/,
                            exclude: /@babel(?:\/|\\{1,2})runtime/,
                            loader: 'builtin:swc-loader',
                            jsc: {
                                parser: {syntax: 'ecmascript'},
                                externalHelpers: true,
                            },
                            env: {targets: 'Chrome >= 48'},
                        },
                        // "postcss" loader applies autoprefixer to our CSS.
                        // "css" loader resolves paths in CSS and adds assets as dependencies.
                        // "style" loader turns CSS into JS modules that inject <style> tags.
                        // In production, we use MiniCSSExtractPlugin to extract that CSS
                        // to a file, but in development "style" loader enables hot editing
                        // of CSS.
                        // By default we support CSS Modules with the extension .module.css
                        {
                            test: cssRegex,
                            exclude: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction
                                    ? shouldUseSourceMap
                                    : isEnvDevelopment,
                                modules: {
                                    mode: 'icss',
                                },
                            }),
                            // Don't consider CSS imports dead code even if the
                            // containing package claims to have no side effects.
                            // Remove this when webpack adds a warning or an error for this.
                            // See https://github.com/webpack/webpack/issues/6571
                            sideEffects: true,
                            type: 'javascript/auto',
                        },
                        // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                        // using the extension .module.css
                        {
                            test: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                sourceMap: isEnvProduction
                                    ? shouldUseSourceMap
                                    : isEnvDevelopment,
                                modules: {
                                    mode: 'local',
                                    getLocalIdent: getCSSModuleLocalIdent,
                                },
                            }),
                            type: 'javascript/auto',
                        },
                        // Opt-in support for SASS (using .scss or .sass extensions).
                        // By default we support SASS Modules with the
                        // extensions .module.scss or .module.sass
                        {
                            test: sassRegex,
                            exclude: sassModuleRegex,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 3,
                                    sourceMap: isEnvProduction
                                        ? shouldUseSourceMap
                                        : isEnvDevelopment,
                                    modules: {
                                        mode: 'icss',
                                    },
                                },
                                'sass-loader',
                            ),
                            // Don't consider CSS imports dead code even if the
                            // containing package claims to have no side effects.
                            // Remove this when webpack adds a warning or an error for this.
                            // See https://github.com/webpack/webpack/issues/6571
                            sideEffects: true,
                        },
                        // Adds support for CSS Modules, but using SASS
                        // using the extension .module.scss or .module.sass
                        {
                            test: sassModuleRegex,
                            use: getStyleLoaders(
                                {
                                    importLoaders: 3,
                                    sourceMap: isEnvProduction
                                        ? shouldUseSourceMap
                                        : isEnvDevelopment,
                                    modules: {
                                        mode: 'local',
                                        getLocalIdent: getCSSModuleLocalIdent,
                                    },
                                },
                                'sass-loader',
                            ),
                            type: 'javascript/auto',
                        },
                        // "file" loader makes sure those assets get served by WebpackDevServer.
                        // When you `import` an asset, you get its (virtual) filename.
                        // In production, they would get copied to the `build` folder.
                        // This loader doesn't use a "test" so it will catch all modules
                        // that fall through the other loaders.
                        {
                            // Exclude `js` files to keep "css" loader working as it injects
                            // its runtime that would otherwise be processed through "file" loader.
                            // Also exclude `html` and `json` extensions so they get processed
                            // by webpacks internal loaders.
                            exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                            type: 'asset/resource',
                        },
                        // ** STOP ** Are you adding a new loader?
                        // Make sure to add the new loader(s) before the "file" loader.
                    ],
                },
            ].filter(Boolean),
        },
        plugins: [
            new ModuleNotFoundPlugin(paths.appPath),
            // Makes some environment variables available to the JS code, for example:
            // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
            // It is absolutely essential that NODE_ENV is set to production
            // during a production build.
            // Otherwise React will be compiled in the very slow development mode.
            new rspack.DefinePlugin(
                target === 'node'
                    ? {__PROJECT_ROOT__: JSON.stringify(paths.appPath, ), __SERVER__: JSON.stringify(true)} // node: only inject __PROJECT_ROOT__
                    : {
                        ...env.stringified,                              // client: full env substitution
                        SHORT_SHA: JSON.stringify(process.env.SHORT_SHA),
                        SENTRY_PROJECT_DASHBOARD: JSON.stringify(process.env.SENTRY_PROJECT_DASHBOARD),
                        __PROJECT_ROOT__: JSON.stringify(paths.appPath),
                        __SERVER__: JSON.stringify(false)
                    }
            ),
            // Experimental hot reloading for React .
            // https://github.com/facebook/react/tree/main/packages/react-refresh
            target === 'web' &&
            isEnvDevelopment
            && shouldUseReactRefresh && new rspack.HotModuleReplacementPlugin(),
            target === 'web' &&
            isEnvDevelopment
            && shouldUseReactRefresh
            && new ReactRefreshRspackPlugin({
                overlay: {
                    sockIntegration: 'whm',
                },
            }),
            target === 'web' &&
            isEnvDevelopment
            && shouldUseReactRefresh
            && new LazySliceVirtualHMRPlugin({
                sliceDir: path.resolve(__dirname, '../src/app'),
            }),
            // Watcher doesn't work well if you mistype casing in a path so we use
            // a plugin that prints an error when you attempt to do this.
            // See https://github.com/facebook/create-react-app/issues/240
            isEnvDevelopment && new CaseSensitivePathsPlugin(),
            (target === 'node' && isEnvDevelopment || isEnvProduction)
            && new rspack.CssExtractRspackPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: 'static/css/[name].[contenthash:8].css',
                chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
            }),
            // Generate an asset manifest file with the following content:
            // - "files" key: Mapping of all asset filenames to their corresponding
            //   output file so that tools can pick it up without having to parse
            //   `index.html`
            // - "entrypoints" key: Array of files which are included in `index.html`,
            //   can be used to reconstruct the HTML if necessary
            new WebpackManifestPlugin({
                fileName: 'asset-manifest.json',
                publicPath: `/dist/${target}/`,
                generate: (seed, files, entrypoints) => {
                    const manifestFiles = files.reduce((manifest, file) => {
                        manifest[file.name] = file.path;
                        return manifest;
                    }, seed);
                    const entrypointFiles = entrypoints.main.filter(
                        fileName => !fileName.endsWith('.map'),
                    );

                    return {
                        files: manifestFiles,
                        entrypoints: entrypointFiles,
                    };
                },
            }),
            // Moment.js is an extremely popular library that bundles large locale files
            // by default due to how webpack interprets its code. This is a practical
            // solution that requires the user to opt into importing specific locales.
            // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
            // You can remove this if you don't use Moment.js:
            new rspack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/,
            }),
            // Generate a service worker script that will precache, and keep up to date,
            // the HTML & assets that are part of the webpack build.
            isEnvProduction
            && fs.existsSync(swSrc)
            && new WorkboxWebpackPlugin.InjectManifest({
                swSrc,
                dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
                exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
                // Bump up the default maximum size (2mb) that's precached,
                // to make lazy-loading failure scenarios less likely.
                // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
                maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
            }),
            isEnvProduction && sentryWebpackPlugin({
                org: process.env.SENTRY_ORG,
                project: process.env.SENTRY_PROJECT_DASHBOARD || 'dashboard',
                authToken: process.env.SENTRY_AUTH_TOKEN,
                release: {
                    name: `${process.env.SENTRY_PROJECT_DASHBOARD || 'dashboard'}@${packageInfo.version}+${process.env.SHORT_SHA}`,
                    deploy: {
                        env: process.env.TARGET_ENV || 'production',
                    },
                },
                sourcemaps: {
                    assets: ['./public/dist/web/**/*.{js,map}'],
                    urlPrefix: '~/dist/web',
                    filesToDeleteAfterUpload: ['./public/dist/web/**/*.map'],
                },
                telemetry: false,
                silent: false,
            }),
            // TypeScript type checking
            useTypeScript
            && new TsCheckerRspackPlugin({
                async: isEnvDevelopment,
                typescript: {
                    typescriptPath: resolve.sync('typescript', {
                        basedir: paths.appNodeModules,
                    }),
                    configOverwrite: {
                        compilerOptions: {
                            sourceMap: isEnvProduction
                                ? shouldUseSourceMap
                                : isEnvDevelopment,
                            skipLibCheck: true,
                            inlineSourceMap: false,
                            declarationMap: false,
                            noEmit: true,
                            incremental: true,
                            tsBuildInfoFile: paths.appTsBuildInfoFile,
                        },
                    },
                    context: paths.appPath,
                    diagnosticOptions: {
                        syntactic: true,
                    },
                    mode: 'write-references',
                    // profile: true,
                },
                issue: {
                    // This one is specifically to match during CI tests,
                    // as micromatch doesn't match
                    // '../cra-template-typescript/template/src/App.tsx'
                    // otherwise.
                    include: [
                        {file: '../**/src/**/*.{ts,tsx}'},
                        {file: '**/src/**/*.{ts,tsx}'},
                    ],
                    exclude: [
                        {file: '**/src/**/__tests__/**'},
                        {file: '**/src/**/?(*.){spec|test}.*'},
                        {file: '**/src/setupProxy.*'},
                        {file: '**/src/setupTests.*'},
                    ],
                },
                logger: {
                    infrastructure: 'silent',
                },
            }),
            !disableESLintPlugin
            && new ESLintPlugin({
                // Plugin options
                files: ['**/*.{js,mjs,jsx,ts,tsx}'],
                exclude: ['**/src/__virtual__/**', '**/__virtual__/**'],
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                failOnError: !(isEnvDevelopment && emitErrorsAsWarnings),
                context: paths.appSrc,
                cache: true,
                cacheLocation: path.resolve(
                    paths.appNodeModules,
                    '.cache/.eslintcache',
                ),
                // ESLint class options
                cwd: paths.appPath,
                overrideConfig: {
                    rules: {
                        ...(!hasJsxRuntime && {
                            'react/react-in-jsx-scope': 'error',
                        }),
                    },
                },
            }),
            target === 'node' &&
            new rspack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
            new LoadablePlugin({
                filename: 'loadable-stats.json',
                writeToDisk: true,
            }),
            target === 'web' && isEnvProduction && pwaManifestPlugin,
        ].filter(Boolean),
        // Turn off performance processing because we utilize
        // our own hints via the FileSizeReporter
        performance: false,
        // Prevent webpack from replacing process.env references in the node bundle.
        // Unlike the client bundle, the server reads env vars at runtime from the OS,
        // so they must not be inlined at build time.
        ...(target === 'node' ? {
            node: {
                __dirname: false,
                __filename: false,
                global: false,
            },
        } : {}),
    };
};

module.exports = [
    getConfig('web'),
    getConfig('node'),
    getConfig('node', {isSSR: true}),
];
