const path = require('path');
const { rspack } = require('@rspack/core');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { HtmlRspackPlugin } = require('@rspack/core');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');
const sentryRelease = require('./sentryRelease');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000', 10);
const useTailwind = require('fs').existsSync(require('path').join(paths.appPath, 'tailwind.config.js'));
const useTypeScript = require('fs').existsSync(paths.appTsConfig);

const hasJsxRuntime = (() => {
    try { require.resolve('react/jsx-runtime'); return true; } catch { return false; }
})();

const env = getClientEnvironment('/');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        {
            loader: rspack.CssExtractRspackPlugin.loader,
            options: {},
        },
        { loader: require.resolve('css-loader'), options: cssOptions },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    config: false,
                    plugins: !useTailwind
                        ? ['postcss-flexbugs-fixes', ['postcss-preset-env', { autoprefixer: { flexbox: 'no-2009' }, stage: 3 }], 'postcss-normalize']
                        : ['tailwindcss', 'postcss-flexbugs-fixes', ['postcss-preset-env', { autoprefixer: { flexbox: 'no-2009' }, stage: 3 }]],
                },
                sourceMap: shouldUseSourceMap,
            },
        },
    ].filter(Boolean);

    if (preProcessor) {
        loaders.push(
            { loader: require.resolve('resolve-url-loader'), options: { sourceMap: shouldUseSourceMap, root: paths.appSrc } },
            { loader: require.resolve(preProcessor), options: { sourceMap: true } },
        );
    }
    return loaders;
};

module.exports = {
    name: 'tauri',
    target: 'browserslist',
    mode: 'production',
    bail: true,
    devtool: false,
    entry: './src/client/main-tauri.js',
    output: {
        path: path.join(paths.appBuild, 'tauri'),
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
        assetModuleFilename: 'static/media/[name].[hash][ext]',
        publicPath: '/',  // ← critique pour Tauri : pas de /dist/web/
        clean: true,
        uniqueName: 'guillaumecisco-tauri',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: { ecma: 8 },
                    compress: { ecma: 5, warnings: false, comparisons: false, inline: 2 },
                    mangle: { safari10: true },
                    output: { ecma: 5, comments: false, ascii_only: true },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
        // Pas de runtimeChunk: 'single' → tout dans un seul chunk via LimitChunkCount
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(modules.additionalModulePaths || []),
        extensions: paths.moduleFileExtensions
            .map(ext => `.${ext}`)
            .filter(ext => useTypeScript || !ext.includes('ts')),
        alias: {
            'react-native': 'react-native-web',
            // Neutralise @loadable/component → React.lazy wrapper synchrone
            '@loadable/component': path.resolve(__dirname, '../src/lib/loadable-static.js'),
            ...(modules.webpackAliases || {}),
        },
    },
    module: {
        strictExportPresence: true,
        rules: [
            shouldUseSourceMap && {
                enforce: 'pre',
                exclude: /@babel(?:\/|\\{1,2})runtime/,
                test: /\.(js|mjs|jsx|ts|tsx|css)$/,
                loader: require.resolve('source-map-loader'),
            },
            {
                oneOf: [
                    { test: [/\.avif$/], type: 'asset', mimetype: 'image/avif', parser: { dataUrlCondition: { maxSize: imageInlineSizeLimit } } },
                    { test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/], type: 'asset', parser: { dataUrlCondition: { maxSize: imageInlineSizeLimit } } },
                    {
                        test: /\.svg$/,
                        oneOf: [
                            { issuer: /\.(ts|tsx|js|jsx|md|mdx)$/, use: [{ loader: require.resolve('@svgr/webpack'), options: { prettier: false, svgo: false, svgoConfig: { plugins: [{ removeViewBox: false }] }, titleProp: true, ref: true } }] },
                            { type: 'asset', parser: { dataUrlCondition: { maxSize: imageInlineSizeLimit } } },
                        ],
                    },
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            caller: { target: 'web' },
                            customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                            presets: [
                                [require.resolve('@babel/preset-env'), { modules: false }],
                                [require.resolve('@babel/preset-react'), { runtime: hasJsxRuntime ? 'automatic' : 'classic', importSource: '@emotion/react' }],
                            ],
                            plugins: [
                                ['@emotion/babel-plugin', { autoLabel: 'never', sourceMap: false, hoist: true }],
                                // Pas de @loadable/babel-plugin → inutile avec l'alias
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: true,
                        },
                    },
                    {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            configFile: false,
                            compact: false,
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app/dependencies'),
                                    {helpers: true},
                                ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            sourceMaps: false,
                            inputSourceMap: false,
                        }
                    },
                    { test: cssRegex, exclude: cssModuleRegex, use: getStyleLoaders({ importLoaders: 1, sourceMap: shouldUseSourceMap, modules: { mode: 'icss' } }), sideEffects: true, type: 'javascript/auto' },
                    { test: cssModuleRegex, use: getStyleLoaders({ importLoaders: 1, sourceMap: shouldUseSourceMap, modules: { mode: 'local', getLocalIdent: getCSSModuleLocalIdent } }), type: 'javascript/auto' },
                    { test: sassRegex, exclude: sassModuleRegex, use: getStyleLoaders({ importLoaders: 3, sourceMap: shouldUseSourceMap, modules: { mode: 'icss' } }, 'sass-loader'), sideEffects: true },
                    { test: sassModuleRegex, use: getStyleLoaders({ importLoaders: 3, sourceMap: shouldUseSourceMap, modules: { mode: 'local', getLocalIdent: getCSSModuleLocalIdent } }, 'sass-loader'), type: 'javascript/auto' },
                    { exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/], type: 'asset/resource' },
                ],
            },
        ].filter(Boolean),
    },
    plugins: [
        new rspack.DefinePlugin({
            ...env.stringified,
            SENTRY_RELEASE: JSON.stringify(sentryRelease),
            __PROJECT_ROOT__: JSON.stringify(paths.appPath),
            __SERVER__: JSON.stringify(false),
        }),
        new rspack.CssExtractRspackPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
        new HtmlRspackPlugin({
            template: paths.appHtml,
            inject: true,
            minify: true,
        }),
        new rspack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
        // Pas de WorkboxPlugin, LoadablePlugin, SentryPlugin, pwaManifestPlugin
    ].filter(Boolean),
    performance: false,
};
