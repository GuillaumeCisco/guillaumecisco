"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _component = require("@loadable/component");
var _client = require("react-dom/client");
var _reactRedux = require("react-redux");
var _reactRouter = require("react-router");
var _store = _interopRequireDefault(require("../app/store"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _app = _interopRequireDefault(require("../app"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _Provider;
const store = (0, _store.default)(window.__PRELOADED_STATE__);

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// TODO use global styles
(0, _component.loadableReady)(() => {
  (0, _client.hydrateRoot)(document.getElementById('root'), _Provider || (_Provider = (0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: store,
    children: (0, _jsxRuntime.jsx)(_reactRouter.BrowserRouter, {
      children: (0, _jsxRuntime.jsx)(_app.default, {})
    })
  })));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();