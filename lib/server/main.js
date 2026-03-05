"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _path = _interopRequireDefault(require("path"));
var _express = _interopRequireDefault(require("express"));
var _terminusLifecycle = require("@guillaumecisco/terminus-lifecycle");
var _server = require("react-dom/server");
var _server2 = require("@loadable/server");
var _reactRedux = require("react-redux");
var _reactRouter = require("react-router");
var _store = _interopRequireDefault(require("../app/store"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const {
  DASHBOARD_PORT = 3000,
  LIFECYCLE_PORT = 9000
} = process.env;
const app = (0, _express.default)();

// static assets server from the "dist" folder
app.use(_express.default.static(_path.default.join(__dirname, '../../public'), {
  index: false
}));
// app.use(express.json());
// app.use(express.urlencoded());

if (process.env.NODE_ENV !== 'production') {
  const {
    default: webpackConfig
  } = require('../../config/webpack.config.babel.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const multiCompiler = webpack(webpackConfig);
  const clientCompiler = multiCompiler.compilers[0];
  clientCompiler.hooks.afterEmit.tap('cleanup-the-require-cache', () => {
    // After webpack rebuild, clear the files from the require cache,
    // so that next server side render will be in sync
    Object.keys(require.cache).filter(key => key.includes(_path.default.resolve(__dirname, '../client/'))).forEach(key => delete require.cache[key]);
  });

  // First we fire up Webpack and pass in the configuration we
  // created
  let bundleStart = null;
  // We give notice in the terminal when it starts bundling and
  // set the time it started
  clientCompiler.hooks.compile.tap('Client', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });
  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  clientCompiler.hooks.done.tap('Client', () => {
    console.log(`Bundled in ${Date.now() - bundleStart}ms!`);
  });
  app.use(webpackDevMiddleware(multiCompiler, {
    serverSideRender: true,
    publicPath: '/dist/web/' // TODO get it dynamically
  }));
  app.use(webpackHotMiddleware(clientCompiler, {
    path: '/__webpack_hmr',
    heartbeat: 30 * 1000,
    dynamicPublicPath: true
  }));
}

// TODO use Webpack Hot Server Middleware https://github.com/60frames/webpack-hot-server-middleware

const nodeStats = _path.default.resolve(__dirname, '../../public/dist/node/loadable-stats.json');
const webStats = _path.default.resolve(__dirname, '../../public/dist/web/loadable-stats.json');
app.get('/', (req, res) => {
  const store = (0, _store.default)();
  const nodeExtractor = new _server2.ChunkExtractor({
    statsFile: nodeStats
  });
  const {
    default: App
  } = nodeExtractor.requireEntrypoint();
  const webExtractor = new _server2.ChunkExtractor({
    statsFile: webStats
  });
  const jsx = webExtractor.collectChunks((0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: store,
    children: (0, _jsxRuntime.jsx)(_reactRouter.StaticRouter, {
      location: req.url,
      children: (0, _jsxRuntime.jsx)(App, {})
    })
  }));
  global.window = {};
  const html = (0, _server.renderToString)(jsx);

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  res.set('content-type', 'text/html');
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            ${webExtractor.getLinkTags()}
            ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // https://redux.js.org/usage/server-rendering#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);
});
const main = async () => {
  const lifecycle = (0, _terminusLifecycle.createLifecycleServer)({
    port: Number(LIFECYCLE_PORT),
    onShutdown: async () => {
      const msg = 'will close server and connections';
      console.log(msg);
    }
  });
  const server = app.listen(Number(DASHBOARD_PORT), async () => {
    await lifecycle.setReady(true);
    console.log(`Server started http://localhost:${DASHBOARD_PORT}`);
    server.keepAliveTimeout = 0;
  });
};
main().catch(console.error);