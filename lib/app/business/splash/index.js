"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _supernova = _interopRequireDefault(require("./supernova"));
var _intro = _interopRequireDefault(require("./intro"));
var _asyncModal = _interopRequireDefault(require("./asyncModal"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _Intro, _Supernova, _AsyncModal;
const Splash = () => (0, _jsxRuntime.jsxs)("div", {
  css: _style.default.container,
  children: [_Intro || (_Intro = (0, _jsxRuntime.jsx)(_intro.default, {})), _Supernova || (_Supernova = (0, _jsxRuntime.jsx)(_supernova.default, {})), _AsyncModal || (_AsyncModal = (0, _jsxRuntime.jsx)(_asyncModal.default, {}))]
});
var _default = exports.default = Splash;