"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("../../style"));
var _github = _interopRequireDefault(require("../../../../../common/ui/svgs/github"));
var _linkedin = _interopRequireDefault(require("../../../../../common/ui/svgs/linkedin"));
var _style2 = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _h, _br, _br2, _br3, _br4, _br5, _p, _LinkedIn, _Github, _br6;
const Core = () => (0, _jsxRuntime.jsxs)("div", {
  css: _style.default.content,
  children: [_h || (_h = (0, _jsxRuntime.jsx)("h1", {
    children: "Hey there!"
  })), (0, _jsxRuntime.jsx)("h3", {
    css: _style.default.h3,
    children: "My name is Guillaume Cisco"
  }), (0, _jsxRuntime.jsxs)("p", {
    css: _style.default.p,
    children: ["If you are here, there is a high probability you want to know more about me.", _br || (_br = (0, _jsxRuntime.jsx)("br", {})), _br2 || (_br2 = (0, _jsxRuntime.jsx)("br", {})), "I created this little interactive website for showing you my skills in the funniest way possible.", _br3 || (_br3 = (0, _jsxRuntime.jsx)("br", {})), "When you will close this window, several planets will appear!!!", _br4 || (_br4 = (0, _jsxRuntime.jsx)("br", {})), "Each planet will tell you more about my professional experience, hobbies and skills.", _br5 || (_br5 = (0, _jsxRuntime.jsx)("br", {})), "Do not hesitate to click on them!"]
  }), _p || (_p = (0, _jsxRuntime.jsx)("p", {
    children: "If you'd like a more conventional version, you can check:"
  })), (0, _jsxRuntime.jsxs)("ul", {
    css: _style.default.ul,
    children: [(0, _jsxRuntime.jsx)("li", {
      children: (0, _jsxRuntime.jsxs)("a", {
        css: _style.default.a,
        href: "https://www.linkedin.com/in/guillaumecisco/",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [_LinkedIn || (_LinkedIn = (0, _jsxRuntime.jsx)(_linkedin.default, {
          width: 48,
          height: 48
        })), (0, _jsxRuntime.jsx)("span", {
          css: _style2.default.span,
          children: "linkedIn"
        })]
      })
    }), (0, _jsxRuntime.jsx)("li", {
      children: (0, _jsxRuntime.jsxs)("a", {
        css: _style.default.a,
        href: "https://github.com/GuillaumeCisco",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [_Github || (_Github = (0, _jsxRuntime.jsx)(_github.default, {
          width: 48,
          height: 48
        })), (0, _jsxRuntime.jsx)("span", {
          css: _style2.default.span,
          children: "github"
        })]
      })
    })]
  }), (0, _jsxRuntime.jsxs)("p", {
    css: _style.default.p,
    children: ["I also give computer science lessons. If you'd like to understand how the matrix works, feel free to contact me via linkedin.", _br6 || (_br6 = (0, _jsxRuntime.jsx)("br", {})), "I promise you a lot of fun and I will make you one of the most skilled developer in this universe ;)"]
  })]
});
var _default = exports.default = Core;