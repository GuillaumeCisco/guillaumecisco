"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("../../style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _h, _p, _br, _p2;
const Spaceship = () => (0, _jsxRuntime.jsxs)("div", {
  css: _style.default.container,
  children: [_h || (_h = (0, _jsxRuntime.jsx)("h1", {
    children: "Nice catch!"
  })), _p || (_p = (0, _jsxRuntime.jsx)("p", {
    children: "For rewarding you, you can now access to an old and mystic knowledge only reserved to the braves!"
  })), _br || (_br = (0, _jsxRuntime.jsx)("br", {})), (0, _jsxRuntime.jsxs)("p", {
    children: [(0, _jsxRuntime.jsx)("a", {
      css: _style.default.a,
      href: "https://github.com/GuillaumeCisco/guillaumecisco",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Here"
    }), ' ', "you can find the code for making this website!"]
  }), _p2 || (_p2 = (0, _jsxRuntime.jsx)("p", {
    children: "And guess what? If you love so much this website, a desktop version thanks to electron is available, clone the repo and launch the npm scripts for creating os packages, you can either install them!"
  }))]
});
var _default = exports.default = Spaceship;