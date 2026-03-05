"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("@emotion/react");
var _reactRouter = require("react-router");
var _globalStyles = _interopRequireDefault(require("../common/ui/globalStyles"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _Outlet;
function Layout() {
  const theme = (0, _react.useTheme)();
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_react.Global, {
      styles: (0, _globalStyles.default)(theme)
    }), _Outlet || (_Outlet = (0, _jsxRuntime.jsx)(_reactRouter.Outlet, {}))]
  });
}
var _default = exports.default = Layout;