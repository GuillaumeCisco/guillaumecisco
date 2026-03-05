"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactTypical = _interopRequireDefault(require("react-typical"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
const Intro = () => (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
  children: [(0, _jsxRuntime.jsx)(_reactTypical.default, {
    steps: ['Welcome into (my) space.'],
    wrapper: "span",
    css: _style.default.intro
  }), (0, _jsxRuntime.jsx)(_reactTypical.default, {
    steps: [1700, 'Please click on the core star for instructions.'],
    wrapper: "span",
    css: _style.default.intro2
  })]
});
var _default = exports.default = Intro;