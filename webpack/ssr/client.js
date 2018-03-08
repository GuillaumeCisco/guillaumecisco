import config from 'config';
import path from 'path';
import rules from '../utils/rules';
import resolve from '../utils/resolve';
import plugins from '../utils/plugins';

const DEBUG = !(['production', 'development', 'staging'].includes(process.env.NODE_ENV)),
    DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV)),
    PRODUCTION = (['production'].includes(process.env.NODE_ENV)),
    PRODUCTION_BASE_NAME = config.apps.frontend.baseName.production,
    DEBUG_BASE_NAME = config.apps.frontend.baseName.debug;


export const vendors = {
    vendor: ['babel-polyfill', 'fetch-everywhere'],
    react: ['react', 'react-dom', 'react-emotion', 'emotion', 'emotion-utils', 'react-redux', 'react-tap-event-plugin', 'react-typist', 'react-universal-component'],
    redux: ['redux', 'redux-actions', 'redux-first-router', 'redux-reducers-injector', 'redux-saga', 'redux-sagas-injector'],
    common: ['fastclick', 'history', 'react-helmet', 'recompose'],
    d3: ['d3', 'd3-interpolate', 'd3-selection', 'd3-transition', 'd3-color', 'd3-timer', 'd3-ease', 'd3-dispatch'],
};
const modulesRegex = new RegExp( `node_modules\\/(?!(${Object.keys(vendors).reduce((p, c) => [
    ...p,
    ...vendors[c],
], []).join('|')})\\/).*`);

export default {
    mode: process.env.NODE_ENV,
    name: 'client',
    target: 'web',
    devtool: DEBUG ? 'source-map' : (DEVELOPMENT ? 'cheap-module-source-map' : '#hidden-source-map'),
    entry: {
        main: [
            'babel-polyfill',
            'fetch-everywhere',
            path.resolve(__dirname, '../../src/client/index.js'),
        ],
    },
    module: {
        rules: rules(),
    },
    // stats: {
    //     colors: true,
    //     reasons: DEBUG,
    //     hash: DEVELOPMENT,
    //     version: DEVELOPMENT,
    //     timings: true,
    //     chunks: DEVELOPMENT,
    //     chunkModules: DEVELOPMENT,
    //     cached: DEVELOPMENT,
    //     cachedAssets: DEVELOPMENT,
    // },
    output: {
        filename: `[name]${PRODUCTION ? '-[hash:6]' : ''}.js`,
        chunkFilename: `[name]${PRODUCTION ? '-[chunkhash:6]' : ''}.js`,
        path: path.resolve(__dirname, '../../build/ssr/client'),
        publicPath: DEBUG ? DEBUG_BASE_NAME : PRODUCTION_BASE_NAME,
    },
    plugins: plugins('client'),
    resolve: resolve(),
    ...(DEVELOPMENT ? {
        devServer: {
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT,PATCH',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization',
            },
        },
        watch: true,
        cache: true,
    } : {}),
    optimization: {
        splitChunks: {
            cacheGroups: {
                // create vendors
                ...(Object.keys(vendors).reduce((p, c) => {
                    const regex = new RegExp(vendors[c].join('|'));
                    return {
                        ...p,
                        [c]: {
                            test: function (module, chunks) {
                                if (!module.nameForCondition) return;
                                return regex.test(module.nameForCondition());
                            },
                            name: c,
                            chunks: 'initial',
                            enforce: true
                        }
                    };
                }, {})),
                // add missing node_modules
                modules: {
                    test: function (module, chunks) {
                        if (!module.nameForCondition) return;
                        return modulesRegex.test(module.nameForCondition());
                    },
                    name: 'modules',
                    chunks: 'initial',
                    enforce: true
                },
            },
        },
        runtimeChunk: {
            name: 'bootstrap',
        },
    },
};
