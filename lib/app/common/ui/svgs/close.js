"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
const Close = ({
  width = 24,
  height = 24,
  color = '#eeeeee'
}) => (0, _jsxRuntime.jsx)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: width,
  height: height,
  viewBox: "0 0 1000 1000",
  enableBackground: "new 0 0 1000 1000",
  xmlSpace: "preserve",
  children: (0, _jsxRuntime.jsx)("g", {
    children: (0, _jsxRuntime.jsx)("path", {
      d: "M610.9,499.9L967,856c30.7,30.7,30.7,80.4,0,111c-30.7,30.7-80.4,30.7-111,0L499.9,610.9L143.7,967.1c-30.6,30.6-80.1,30.6-110.7,0c-30.6-30.6-30.6-80.1,0-110.7l356.2-356.2L33,144C2.3,113.3,2.3,63.6,33,33c30.7-30.7,80.4-30.7,111,0l356.2,356.2L853.9,35.5c30.6-30.6,80.1-30.6,110.7,0c30.6,30.6,30.6,80.1,0,110.7L610.9,499.9z",
      fill: color
    })
  })
});
Close.propTypes = {
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  color: _propTypes.default.string
};
var _default = exports.default = Close;