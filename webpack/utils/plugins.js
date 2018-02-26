import webpack from 'webpack';
import config from 'config';
import path from 'path';
import fs from 'fs';
import util from 'util';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin';
import StatsPlugin from 'stats-webpack-plugin';
import BabelMinifyPlugin from 'babel-minify-webpack-plugin';
import HappyPack from 'happypack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import AddAssetPlugin from './addAssetPlugin';
import RavenPlugin from './ravenPlugin';

import definePlugin from './definePlugin';
import dll from './dll';

import routes from '../../src/app/routesMap';

const DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV)),
    PRODUCTION = (['production'].includes(process.env.NODE_ENV)),
    DEBUG = !(['production', 'development', 'staging'].includes(process.env.NODE_ENV));

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

export default env => [
    ...(env === 'client' ? [
        // https://webpack.js.org/plugins/commons-chunk-plugin/#manifest-file
        new webpack.optimize.CommonsChunkPlugin({
            names: ['bootstrap'], // needed to put webpack bootstrap code before chunks
            filename: '[name].js',
            minChunks: Infinity,
        }),
        new ManifestPlugin({
            seed: {
                name: 'Guillaume Cisco',
                short_name: 'G. Cisco',
                start_url: '/',
                display: 'standalone',
                background_color: '#000',
                theme_color: '#000',
                icons: [
                    {
                        src: 'launcher-icon-0-75x.png',
                        sizes: '36x36',
                        type: 'image/png',
                        density: 0.75,
                    },
                    {
                        src: 'launcher-icon-1x.png',
                        sizes: '48x48',
                        type: 'image/png',
                        density: 1.0,
                    },
                    {
                        src: 'launcher-icon-1-5x.png',
                        sizes: '72x72',
                        type: 'image/png',
                        density: 1.5,
                    },
                    {
                        src: 'launcher-icon-2x.png',
                        sizes: '96x96',
                        type: 'image/png',
                        density: 2.0,
                    },
                    {
                        src: 'launcher-icon-3x.png',
                        sizes: '144x144',
                        type: 'image/png',
                        density: 3.0,
                    },
                    {
                        src: 'launcher-icon-4x.png',
                        sizes: '192x192',
                        type: 'image/png',
                        density: 4.0,
                    },
                    {
                        src: 'launcher-icon-high-res.png',
                        sizes: '512x512',
                        type: 'image/png',
                        density: 4.0,
                    },
                ],
            },
        }),
        new AddAssetPlugin('launcher-icon-0-75x.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-0-75x.png'))),
        new AddAssetPlugin('launcher-icon-1x.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-1x.png'))),
        new AddAssetPlugin('launcher-icon-1-5x.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-1-5x.png'))),
        new AddAssetPlugin('launcher-icon-2x.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-2x.png'))),
        new AddAssetPlugin('launcher-icon-3x.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-3x.png'))),
        new AddAssetPlugin('launcher-icon-4x.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-4x.png'))),
        new AddAssetPlugin('launcher-icon-high-res.png', () => readFile(path.resolve(__dirname, '../../assets/img/launcher-icon-high-res.png'))),

        // raven
        new RavenPlugin(config.apps.frontend.raven_url, path.resolve(__dirname, '../../assets/js/raven.min.js')),
        dll,
        ...(PRODUCTION ? [
            new BabelMinifyPlugin({}, {
                comments: false,
            }),
            new webpack.optimize.AggressiveMergingPlugin(),
            new StatsPlugin('stats.json'),
        ] : [
            new webpack.NoEmitOnErrorsPlugin(),
            new WriteFilePlugin(),
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
    ...(DEVELOPMENT ? [new webpack.NamedModulesPlugin()] : [new webpack.HashedModuleIdsPlugin()]),
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
                    'transform-runtime',
                    'emotion',
                    'lodash',
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
                    'es2015',
                    'react',
                    'stage-0',
                ],
            },
        }],
        threads: 4,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractCssChunks({
        filename: '[name].css',
        allChunks: false,
    }),

    ...(DEBUG ? [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
    })] : []),
    ...(PRODUCTION ? [new SWPrecacheWebpackPlugin({
        cacheId: config.appName,
        filename: 'service-worker.js',
        minify: false,
        dontCacheBustUrlsMatching: '/./',
        dynamicUrlToDependencies: {
            ...Object.keys(routes).reduce((p, c) =>
                ({
                    ...p,
                    [routes[c].path]: [
                        path.resolve(__dirname, '../../src/client/index.js'),
                    ],
                }), {}),
            // add 404 page
            '/404': [path.resolve(__dirname, '../../src/client/index.js')],
        },
        navigateFallback: '/404',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    })] : []),
];
