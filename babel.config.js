function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

module.exports = api => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);

  return {
    presets: [
      [
        '@babel/preset-react',
        {runtime: 'automatic', importSource: '@emotion/react'},
      ],
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          corejs: web ? 'core-js@3' : false,
          targets: !web ? {node: 'current'} : undefined,
          modules: webpack ? false : 'commonjs',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@loadable/babel-plugin',
      '@emotion/babel-plugin',
      '@babel/plugin-transform-react-constant-elements',
      '@babel/plugin-transform-runtime',
      // Do not activate or emotion will break, see if can be enabled in production
      // "@babel/plugin-transform-react-inline-elements",

      // Stage 1
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-do-expressions',

      // Stage 2
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-throw-expressions',

      // Stage 4
      '@babel/plugin-proposal-logical-assignment-operators',
      '@babel/plugin-proposal-numeric-separator'],
  };
};
