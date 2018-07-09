import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';

const DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV)),
    PRODUCTION = (['production'].includes(process.env.NODE_ENV));

export default env => [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // use: 'happypack/loader?id=babel',
        use: {
            loader: 'babel-loader',
            options: {
                // ignore babelrc
                babelrc: false,
                plugins: [
                    'lodash',
                    ['universal-import', {
                        disableWarnings: true,
                    }],
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
                    ['env', {
                        modules: false,
                        targets: {node: 4},
                    }],
                    'react',
                    'stage-0',
                ],
            },
        },
    },
    {
        test: /\.jpe?g$|\.gif$|\.png$/,
        use: 'url-loader?limit=10000&name=img/[hash].[ext]',
    },
    {
        test: /\.(otf|svg)(\?.+)?$/,
        use: 'url-loader?limit=8192&name=font/[name].[ext]',
    },
    {
        test: /\.eot(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject&name=font/[name].[ext]',
    },
    {
        test: /\.woff2(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-woff2&name=font/[name].[ext]',
    },
    {
        test: /\.woff(\?\S*)?$/,
        use: 'url-loader?limit=100000&mimetype=application/font-woff&name=font/[name].[ext]',
    },
    {
        test: /\.ttf(\?\S*)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-ttf&name=font/[name].[ext]',
    },
    {
        test: /\.html$/,
        use: 'html-loader',
    },
    {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
            {
                loader: ExtractCssChunks.loader,
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: true,
                    sourceMap: true,
                },
            },
            {
                loader: 'sass-loader',
            },
        ],
    },
];
