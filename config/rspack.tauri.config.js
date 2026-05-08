const fs = require('fs');
const path = require('path');

require('./generateTauriIndex');

const {rspack} = require('@rspack/core');
const {HtmlRspackPlugin} = require('@rspack/core');

const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');
const sentryRelease = require('./sentryRelease');

process.env.NODE_ENV =
    process.env.NODE_ENV || 'development';

const isEnvDevelopment =
    process.env.NODE_ENV === 'development';

const isEnvProduction =
    process.env.NODE_ENV === 'production';

const shouldUseSourceMap =
    process.env.GENERATE_SOURCEMAP !== 'false';

const imageInlineSizeLimit = parseInt(
    process.env.IMAGE_INLINE_SIZE_LIMIT || '10000',
    10,
);

const useTypeScript = fs.existsSync(
    paths.appTsConfig,
);

const useTailwind = fs.existsSync(
    path.join(
        paths.appPath,
        'tailwind.config.js',
    ),
);

const env = getClientEnvironment('/');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex =
    /\.module\.(scss|sass)$/;

const getStyleLoaders = (
    cssOptions,
    preProcessor,
) => {
    const loaders = [
        isEnvDevelopment
            ? require.resolve('style-loader')
            : {
                loader:
                rspack.CssExtractRspackPlugin
                    .loader,
            },

        {
            loader:
                require.resolve('css-loader'),

            options: cssOptions,
        },

        {
            loader:
                require.resolve(
                    'postcss-loader',
                ),

            options: {
                postcssOptions: {
                    ident: 'postcss',

                    config: false,

                    plugins: !useTailwind
                        ? [
                            'postcss-flexbugs-fixes',

                            [
                                'postcss-preset-env',
                                {
                                    autoprefixer:
                                        {
                                            flexbox:
                                                'no-2009',
                                        },

                                    stage: 3,
                                },
                            ],

                            'postcss-normalize',
                        ]
                        : [
                            'tailwindcss',

                            'postcss-flexbugs-fixes',

                            [
                                'postcss-preset-env',
                                {
                                    autoprefixer:
                                        {
                                            flexbox:
                                                'no-2009',
                                        },

                                    stage: 3,
                                },
                            ],
                        ],
                },

                sourceMap:
                shouldUseSourceMap,
            },
        },
    ];

    if (preProcessor) {
        loaders.push(
            {
                loader:
                    require.resolve(
                        'resolve-url-loader',
                    ),

                options: {
                    sourceMap:
                    shouldUseSourceMap,

                    root: paths.appSrc,
                },
            },

            {
                loader:
                    require.resolve(
                        preProcessor,
                    ),

                options: {
                    sourceMap: true,
                },
            },
        );
    }

    return loaders;
};

module.exports = {
    name: 'tauri',

    target: 'web',

    mode: isEnvProduction
        ? 'production'
        : 'development',

    devtool: isEnvProduction
        ? false
        : 'cheap-module-source-map',

    entry: './src/client/main-tauri.js',

    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        liveReload: true,
        historyApiFallback: true,
    },
    output: {
        path: path.join(
            paths.appBuild,
            'tauri',
        ),

        filename: isEnvDevelopment
            ? 'static/js/[name].js'
            : 'static/js/[name].[contenthash:8].js',

        chunkFilename:
            isEnvDevelopment
                ? 'static/js/[name].chunk.js'
                : 'static/js/[name].[contenthash:8].chunk.js',

        assetModuleFilename:
            'static/media/[name].[hash][ext]',

        publicPath: '/',

        clean: true,

        uniqueName:
            'guillaumecisco-tauri',
    },

    optimization: {
        minimize: isEnvProduction,

        minimizer: [
            new rspack.SwcJsMinimizerRspackPlugin(),

            new rspack.LightningCssMinimizerRspackPlugin(),
        ],

        runtimeChunk: false,
    },

    resolve: {
        modules: [
            'node_modules',
            paths.appNodeModules,
        ].concat(
            modules.additionalModulePaths ||
            [],
        ),

        extensions:
            paths.moduleFileExtensions
                .map((ext) => `.${ext}`)
                .filter(
                    (ext) =>
                        useTypeScript ||
                        !ext.includes('ts'),
                ),

        alias: {
            'react-native':
                'react-native-web',

            '@loadable/component':
                path.resolve(
                    __dirname,
                    '../src/lib/loadable-static.js',
                ),
        },
    },

    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: [
                            /\.bmp$/,
                            /\.gif$/,
                            /\.jpe?g$/,
                            /\.png$/,
                        ],

                        type: 'asset',

                        parser: {
                            dataUrlCondition: {
                                maxSize:
                                imageInlineSizeLimit,
                            },
                        },
                    },

                    {
                        test: /\.[jt]sx?$/,

                        include: paths.appSrc,

                        loader:
                            'builtin:swc-loader',

                        options: {
                            jsc: {
                                parser:
                                    useTypeScript
                                        ? {
                                            syntax:
                                                'typescript',

                                            tsx: true,
                                        }
                                        : {
                                            syntax:
                                                'ecmascript',

                                            jsx: true,
                                        },

                                transform: {
                                    react: {
                                        runtime:
                                            'automatic',

                                        importSource:
                                            '@emotion/react',
                                    },
                                },
                            },
                        },
                    },

                    {
                        test: cssRegex,

                        exclude:
                        cssModuleRegex,

                        use: getStyleLoaders({
                            importLoaders: 1,

                            sourceMap:
                            shouldUseSourceMap,

                            modules: {
                                mode: 'icss',
                            },
                        }),

                        sideEffects: true,
                    },

                    {
                        test: cssModuleRegex,

                        use: getStyleLoaders({
                            importLoaders: 1,

                            sourceMap:
                            shouldUseSourceMap,

                            modules: {
                                localIdentName:
                                    '[name]__[local]__[hash:base64:5]',
                            },
                        }),
                    },

                    {
                        test: sassRegex,

                        exclude:
                        sassModuleRegex,

                        use: getStyleLoaders(
                            {
                                importLoaders: 3,

                                sourceMap:
                                shouldUseSourceMap,

                                modules: {
                                    mode: 'icss',
                                },
                            },

                            'sass-loader',
                        ),

                        sideEffects: true,
                    },

                    {
                        test: sassModuleRegex,

                        use: getStyleLoaders(
                            {
                                importLoaders: 3,

                                sourceMap:
                                shouldUseSourceMap,

                                modules: {
                                    localIdentName:
                                        '[name]__[local]__[hash:base64:5]',
                                },
                            },

                            'sass-loader',
                        ),
                    },
                ],
            },
        ],
    },

    plugins: [
        new rspack.DefinePlugin({
            ...env.stringified,

            SENTRY_RELEASE:
                JSON.stringify(
                    sentryRelease,
                ),

            __PROJECT_ROOT__:
                JSON.stringify(
                    paths.appPath,
                ),

            __SERVER__:
                JSON.stringify(false),
        }),

        !isEnvDevelopment &&
        new rspack.CssExtractRspackPlugin({
            filename:
                'static/css/[name].[contenthash:8].css',

            chunkFilename:
                'static/css/[name].[contenthash:8].chunk.css',
        }),

        new HtmlRspackPlugin({
            template: paths.appHtml,

            inject: true,
        }),
    ].filter(Boolean),

    experiments: {
        lazyCompilation: false,
    },

    performance: false,
};
