const { getConfig } = require('./rspack.base');

module.exports = [
    {
        ...getConfig('node'),
        experiments: {
            lazyCompilation: false,
        },
    },
    {
        ...getConfig('node', { isSSR: true }),
        experiments: {
            lazyCompilation: false,
        },
    },
];
