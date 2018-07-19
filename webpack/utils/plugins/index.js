import webpack from 'webpack';
import config from 'config';
import path from 'path';
import glob from 'glob';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HappyPack from 'happypack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import RavenPlugin from './tools/ravenPlugin';

import definePlugin from './definePlugin';
import dll from './dll';
import pwaManifest from './pwaManifest';

import routes from '../../../src/app/routesMap';

const DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV)),
    PRODUCTION = (['production'].includes(process.env.NODE_ENV)),
    DEBUG = !(['production', 'development', 'staging'].includes(process.env.NODE_ENV));

export default env => [
    ...(env === 'client' ? [
        pwaManifest,
        new RavenPlugin(config.apps.frontend.raven_url, path.resolve(__dirname, '../../../assets/js/raven.min.js')),
        ...(PRODUCTION ? [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            new StatsPlugin('stats.json'),
            new SWPrecacheWebpackPlugin({
                cacheId: config.appName,
                filename: 'service-worker.js',
                minify: false,
                dynamicUrlToDependencies: {
                    ...Object.keys(routes).reduce((p, c) => ({
                            ...p,
                            [routes[c].path]: [
                                ...glob.sync(path.resolve(__dirname, '../../../src/app/**/*.{js,png}')),
                                ...glob.sync(path.resolve(__dirname, '../../../src/client/**/*.{js,png}')),
                                ...glob.sync(path.resolve(__dirname, '../../../src/common/**/*.{js,png}')),
                            ],
                        }), {}),
                },
                navigateFallback: '/404', // needed for working offline and avoiding blink on not found pages
                staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/, /index\.html$/, /404\.html$/],
            }),
        ] : [
            dll,
            new BrowserSyncPlugin(
                // BrowserSync options
                {
                    // browse to http://localhost:3001/ during development
                    open: false,
                    port: config.apps.frontend.api_port + 1,
                    proxy: {
                        target: `localhost:${config.apps.frontend.api_port}`,
                    },
                    ghostMode: false,
                },
                // plugin options
                {
                    // prevent BrowserSync require(reloading the page
                    // and let Webpack Dev Server take care of this
                    reload: false,
                    callback: () => console.log('Finished proxifying...'),
                },
            ),
        ]),
    ] : [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ]),
    new WriteFilePlugin(),
    definePlugin(),
    new LodashModuleReplacementPlugin({
        shorthands: true,
    }),
    new HappyPack({
        id: 'babel',
        loaders: [{
            path: 'babel-loader', // Options to configure babel with
            query: {
                // ignore babelrc
                babelrc: false,
                plugins: [
                    ['universal-import', {
                        disableWarnings: true,
                    }],
                    'lodash',
                    'transform-runtime',
                    'emotion',
                    ...(PRODUCTION && env === 'client' ? [
                        'transform-class-properties',
                        'transform-es2015-classes',
                        'transform-react-constant-elements',
                        'transform-react-inline-elements',
                        'transform-react-remove-prop-types',
                    ] : []),
                    ...(DEVELOPMENT ? ['react-hot-loader/babel'] : []),
                ],
                presets: [
                    // do not transpil es6 import into require, webpack needs to see the import and exports statements to do tree-shaking
                    ['env', {
                        modules: false,
                    }],
                    'react',
                    'stage-0',
                ],
            },
        }],
        threads: 4,
    }),
    new ExtractCssChunks({
        filename: '[name].css',
        allChunks: false,
    }),

    ...(DEBUG ? [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
    })] : []),
    ...(DEVELOPMENT ? [new webpack.NamedModulesPlugin()] : [new webpack.HashedModuleIdsPlugin()]),
];
