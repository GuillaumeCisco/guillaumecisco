module.exports = process.env.NODE_ENV === 'production'
    ? null
    : require('./dev.js');
