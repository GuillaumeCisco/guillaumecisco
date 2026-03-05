"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@emotion/react");
var _reactRouter = require("react-router");
var _splash = _interopRequireDefault(require("./business/splash"));
var _style = _interopRequireDefault(require("./style"));
var _serviceWorker = _interopRequireDefault(require("./business/common/components/serviceWorker"));
var _globalStyles = _interopRequireDefault(require("./common/ui/globalStyles"));
var _layout = _interopRequireDefault(require("./layout"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _ServiceWorker, _Routes;
const App = () => {
  const theme = (0, _react.useTheme)();
  return (0, _jsxRuntime.jsxs)("dic", {
    css: _style.default.container,
    children: [(0, _jsxRuntime.jsx)(_react.Global, {
      styles: (0, _globalStyles.default)(theme)
    }), _ServiceWorker || (_ServiceWorker = (0, _jsxRuntime.jsx)(_serviceWorker.default, {})), _Routes || (_Routes = (0, _jsxRuntime.jsx)(_reactRouter.Routes, {
      children: (0, _jsxRuntime.jsx)(_reactRouter.Route, {
        element: (0, _jsxRuntime.jsx)(_layout.default, {}),
        children: (0, _jsxRuntime.jsx)(_reactRouter.Route, {
          path: "/",
          element: (0, _jsxRuntime.jsx)(_splash.default, {})
        })
      })
    }))]
  });
};
var _default = exports.default = App;