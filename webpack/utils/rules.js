import ExtractCssChunks from 'extract-css-chunks-webpack-plugin-webpack-4';

const DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV)),
    PRODUCTION = (['production'].includes(process.env.NODE_ENV));

export default env => [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        //use: 'happypack/loader?id=babel',
        use: {
            loader: 'babel-loader',
            options: {
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
        }
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
    ...(env === 'electron' ? [
        {
            test: /\.s?css$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: true,
                    },
                },
                {
                    loader: 'sass-loader',
                },
            ],
        },
    ] : [{
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractCssChunks.extract({
            use: [
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
        }),
    }]),
];
