"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
const Canvas = /*#__PURE__*/(0, _react.forwardRef)(function Canvas(props, ref) {
  return (0, _jsxRuntime.jsx)("canvas", {
    ref: ref,
    css: _style.default.container
  });
});
var _default = exports.default = Canvas;