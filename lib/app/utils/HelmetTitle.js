"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactHelmet = _interopRequireDefault(require("react-helmet"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
/* global APP_NAME */

const HelmetTitle = ({
  title
}) => (0, _jsxRuntime.jsx)(_reactHelmet.default, {
  title: APP_NAME + (title ? ` - ${title}` : '')
});
HelmetTitle.propTypes = {
  title: _propTypes.default.string.isRequired
};
var _default = exports.default = HelmetTitle;