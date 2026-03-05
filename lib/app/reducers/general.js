"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intro = exports.error = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
const generalReducer = (0, _toolkit.createSlice)({
  name: 'general',
  initialState: {
    error: '',
    intro: false
  },
  reducers: {
    error: (state, {
      payload
    }) => {
      state.error = payload;
    },
    intro: (state, {
      payload
    }) => {
      state.intro = payload;
    }
  }
});
const {
  error,
  intro
} = generalReducer.actions;
exports.intro = intro;
exports.error = error;
var _default = exports.default = generalReducer;