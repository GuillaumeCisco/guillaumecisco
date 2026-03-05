"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsxRuntime = require("@emotion/react/jsx-runtime");
const log = BaseComponent => props => {
  console.log(`Rendering ${BaseComponent.name}`);
  return (0, _jsxRuntime.jsx)(BaseComponent, {
    ...props
  });
};
var _default = exports.default = log;