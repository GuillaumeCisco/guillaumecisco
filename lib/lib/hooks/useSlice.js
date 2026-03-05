"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRedux = require("react-redux");
var _react = require("react");
function getReducer(state, arr) {
  const key = arr.shift();
  if (arr.length) return getReducer(state?.[key], arr);
  return state?.[key];
}
function useSlice(fun, slicePath) {
  const store = (0, _reactRedux.useStore)();
  const reducer = (0, _reactRedux.useSelector)(state => getReducer(state, slicePath.split('.')));
  (0, _react.useEffect)(() => {
    if (!reducer) {
      fun().then(m => {
        console.log('injecting first time hook', [...m.default.reducerParent.split('.'), m.default.reducerPath].join('.'));
        store.injectSlice(m.default);
      });
    }
  }, [reducer]);
  return reducer || {
    sliceLoading: true
  };
}
var _default = exports.default = useSlice;