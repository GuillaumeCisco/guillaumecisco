"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLoadableSlice;
var _toolkit = require("@reduxjs/toolkit");
function createLoadableSlice(options) {
  const slice = (0, _toolkit.createSlice)(options);
  slice.reducerParent = options.reducerParent;
  return slice;
}