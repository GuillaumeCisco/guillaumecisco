import path from 'path';
import webpack from 'webpack';
import BabelMinifyPlugin from 'babel-minify-webpack-plugin';
import AutoDllPlugin from 'autodll-webpack-plugin';

import vendors from '../../ssr/vendors';

const DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV));

export default new AutoDllPlugin({
    inject: true,
    context: path.join(__dirname, '../../..'),
    filename: `[name]${DEVELOPMENT ? '' : '_[hash]'}.dll.js`,
    plugins: !DEVELOPMENT ? [
        new BabelMinifyPlugin({}, {
            comments: false,
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ] : [],
    debug: true,
    entry: vendors,
});
