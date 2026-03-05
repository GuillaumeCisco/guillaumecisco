"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reduxLazyHmr = require("redux-lazy-hmr");
var _reducers = _interopRequireDefault(require("./reducers"));
const configureAppStore = preloadedState => {
  const store = (0, _toolkit.configureStore)({
    reducer: (0, _toolkit.combineReducers)(_reducers.default),
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: true
    }),
    preloadedState
  });

  // reducer lazy load handling
  store.injectSlice = (0, _reduxLazyHmr.injectSlice)(store, _reducers.default);
  // reducer HMR handling
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    try {
      const enableLazySliceHMR = require('@hmr-cache-lazy').default;
      enableLazySliceHMR(store);
      console.log('Loaded HMR cache!');
    } catch (e) {
      console.error('Could not load @hmr-cache-lazy:', e);
    }
  }
  return store;
};
var _default = exports.default = configureAppStore;