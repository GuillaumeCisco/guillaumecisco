"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _general = _interopRequireDefault(require("./general"));
var _ui = _interopRequireDefault(require("./ui"));
var _reducer = _interopRequireDefault(require("../business/splash/modal/reducer"));
var _default = exports.default = {
  general: _general.default.reducer,
  modal: _reducer.default.reducer,
  ui: _ui.default.reducer
};