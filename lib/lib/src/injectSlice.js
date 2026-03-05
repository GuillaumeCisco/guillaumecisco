"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectSlice;
var _toolkit = require("@reduxjs/toolkit");
const injectSliceInReducer = (arr, slice, baseReducer) => {
  const key = arr.shift();
  if (arr.length) {
    if (!baseReducer[key]) baseReducer[key] = (0, _toolkit.combineSlices)();
    injectSliceInReducer(arr, slice, baseReducer[key]);
  } else {
    baseReducer.inject({
      reducerPath: key,
      reducer: slice.reducer
    }, {
      overrideExisting: true
    });
  }
  return baseReducer;
};
function injectSlice(store, rootReducer) {
  return asyncSlice => {
    const splitRow = [...asyncSlice.reducerParent.split('.'), asyncSlice.reducerPath];
    injectSliceInReducer(splitRow, asyncSlice, rootReducer);
    store.replaceReducer((0, _toolkit.combineReducers)(rootReducer));
  };
}