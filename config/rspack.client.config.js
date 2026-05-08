const { getConfig } = require('./rspack.base');

module.exports = {
    ...getConfig('web'),
    experiments: {
        lazyCompilation: false,
    },
};
