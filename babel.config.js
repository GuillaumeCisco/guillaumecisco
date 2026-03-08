// babel.config.js — only used by @babel/register to load webpack.config.babel.js
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}, modules: 'commonjs'}],
    ],
};
