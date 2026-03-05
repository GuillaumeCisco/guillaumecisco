"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = exports.get = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
const uiReducer = (0, _toolkit.createSlice)({
  name: 'ui',
  initialState: {
    theme: 'default'
  },
  reducers: {
    get: state => {
      const theme = global?.window?.localStorage?.getItem('theme') || (global?.window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default');
      global?.window?.localStorage?.setItem('theme', theme);
      global?.document?.documentElement?.setAttribute('data-theme', theme);
      state.theme = theme;
    },
    toggle: state => {
      const theme = state.theme === 'default' ? 'dark' : 'default';
      state.theme = theme;
      global?.document?.documentElement?.setAttribute('data-theme', theme);
      global?.window?.localStorage?.setItem('theme', theme);
    }
  }
});
const {
  get,
  toggle
} = uiReducer.actions;
exports.toggle = toggle;
exports.get = get;
var _default = exports.default = uiReducer;