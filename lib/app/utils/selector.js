"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reselect = require("reselect");
var _isEqual = _interopRequireDefault(require("lodash-es/isEqual"));
const createDeepEqualSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _isEqual.default);
var _default = exports.default = createDeepEqualSelector;