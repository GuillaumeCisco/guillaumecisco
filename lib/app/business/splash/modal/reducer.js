"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visible = exports.set = exports.default = exports.ModalSlice = void 0;
var _toolkit = require("@reduxjs/toolkit");
const initialState = {
  visible: false,
  component: null
};
const ModalSlice = exports.ModalSlice = (0, _toolkit.createSlice)({
  name: 'session',
  initialState,
  reducers: {
    visible: (state, {
      payload
    }) => {
      state.visible = payload;
      state.component = payload ? state.component : null;
    },
    set: (state, {
      payload
    }) => {
      state.visible = true;
      state.component = payload;
    }
  }
});
const {
  visible,
  set
} = ModalSlice.actions;
exports.set = set;
exports.visible = visible;
var _default = exports.default = ModalSlice;