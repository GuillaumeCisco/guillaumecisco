"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("../../../style"));
var _style2 = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _h, _ul, _h2, _ul2;
const Awards = () => (0, _jsxRuntime.jsx)("div", {
  css: _style2.default.container,
  children: (0, _jsxRuntime.jsxs)("div", {
    css: _style.default.content,
    children: [_h || (_h = (0, _jsxRuntime.jsx)("h1", {
      children: "Awards"
    })), _ul || (_ul = (0, _jsxRuntime.jsxs)("ul", {
      children: [(0, _jsxRuntime.jsx)("li", {
        children: "+2000 reputation on stackoverflow"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Member of the Django French translation team 2012-2014"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Member of Mensa Association (High Intellectual Potential People)"
      })]
    })), _h2 || (_h2 = (0, _jsxRuntime.jsx)("h1", {
      children: "Hobbies"
    })), _ul2 || (_ul2 = (0, _jsxRuntime.jsxs)("ul", {
      children: [(0, _jsxRuntime.jsx)("li", {
        children: "French gastronomy"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Oenology and bierology"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Musculation and swimming"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Sportive gun shooting"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Technical books"
      }), (0, _jsxRuntime.jsx)("li", {
        children: "Politic, Geopolitic, Economy"
      })]
    }))]
  })
});
var _default = exports.default = Awards;