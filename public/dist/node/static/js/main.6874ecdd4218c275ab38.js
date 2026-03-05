/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/business/common/components/serviceWorker.js"
/*!*************************************************************!*\
  !*** ./src/app/business/common/components/serviceWorker.js ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceWorker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _span,
  _span2,
  _s = __webpack_require__.$Refresh$.signature();



const fade = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
  0% {opacity: 0}
  25% {opacity: 1}
  50% {opacity: 0}
  75% {opacity: 1}
  100% {opacity: 0}
`;
const worker = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("position:fixed;top:20px;right:20px;width:10px;height:10px;z-index:1;border-radius:50%;display:block;opacity:0;animation:", fade, " 3s;" + ( false ? 0 : ";label:worker;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL2NvbW1vbi9jb21wb25lbnRzL3NlcnZpY2VXb3JrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2tCIiwiZmlsZSI6Ii9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL2NvbW1vbi9jb21wb25lbnRzL3NlcnZpY2VXb3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nzcywga2V5ZnJhbWVzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IGZhZGUgPSBrZXlmcmFtZXNgXG4gIDAlIHtvcGFjaXR5OiAwfVxuICAyNSUge29wYWNpdHk6IDF9XG4gIDUwJSB7b3BhY2l0eTogMH1cbiAgNzUlIHtvcGFjaXR5OiAxfVxuICAxMDAlIHtvcGFjaXR5OiAwfVxuYDtcblxuY29uc3Qgd29ya2VyID0gY3NzYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogJHtmYWRlfSAzcztcbmA7XG5cbmNvbnN0IGdyZWVuID0gY3NzYFxuICAke3dvcmtlcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2U4NmQ7XG5gO1xuXG5jb25zdCByZWQgPSBjc3NgXG4gICR7d29ya2VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzMGUxNTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VXb3JrZXIoKSB7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldFN0YXR1cyh3aW5kb3cubmF2aWdhdG9yLm9uTGluZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCB1cGRhdGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdXBkYXRlKTtcbiAgICB1cGRhdGUoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgdXBkYXRlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdXBkYXRlKTtcbiAgICB9O1xuICB9LCBbdXBkYXRlXSk7XG5cbiAgaWYgKCEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB0eXBlb2Ygc3RhdHVzICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBudWxsO1xuICByZXR1cm4gc3RhdHVzID8gPHNwYW4gY3NzPXtncmVlbn0gLz4gOiA8c3BhbiBjc3M9e3JlZH0gLz47XG59XG4iXX0= */");
const green = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)(worker, ";background-color:#27e86d;" + ( false ? 0 : ";label:green;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL2NvbW1vbi9jb21wb25lbnRzL3NlcnZpY2VXb3JrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JpQiIsImZpbGUiOiIvaG9tZS9ndWlsbGF1bWUvUHJvamVjdHMvZ3VpbGxhdW1lY2lzY28vc3JjL2FwcC9idXNpbmVzcy9jb21tb24vY29tcG9uZW50cy9zZXJ2aWNlV29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjc3MsIGtleWZyYW1lc30gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCBmYWRlID0ga2V5ZnJhbWVzYFxuICAwJSB7b3BhY2l0eTogMH1cbiAgMjUlIHtvcGFjaXR5OiAxfVxuICA1MCUge29wYWNpdHk6IDB9XG4gIDc1JSB7b3BhY2l0eTogMX1cbiAgMTAwJSB7b3BhY2l0eTogMH1cbmA7XG5cbmNvbnN0IHdvcmtlciA9IGNzc2BcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246ICR7ZmFkZX0gM3M7XG5gO1xuXG5jb25zdCBncmVlbiA9IGNzc2BcbiAgJHt3b3JrZXJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdlODZkO1xuYDtcblxuY29uc3QgcmVkID0gY3NzYFxuICAke3dvcmtlcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMzBlMTU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlV29ya2VyKCkge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzZXRTdGF0dXMod2luZG93Lm5hdmlnYXRvci5vbkxpbmUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgdXBkYXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIHVwZGF0ZSk7XG4gICAgdXBkYXRlKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29ubGluZScsIHVwZGF0ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIHVwZGF0ZSk7XG4gICAgfTtcbiAgfSwgW3VwZGF0ZV0pO1xuXG4gIGlmICghKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgdHlwZW9mIHN0YXR1cyAhPT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHN0YXR1cyA/IDxzcGFuIGNzcz17Z3JlZW59IC8+IDogPHNwYW4gY3NzPXtyZWR9IC8+O1xufVxuIl19 */");
const red = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)(worker, ";background-color:#c30e15;" + ( false ? 0 : ";label:red;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL2NvbW1vbi9jb21wb25lbnRzL3NlcnZpY2VXb3JrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJlIiwiZmlsZSI6Ii9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL2NvbW1vbi9jb21wb25lbnRzL3NlcnZpY2VXb3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nzcywga2V5ZnJhbWVzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IGZhZGUgPSBrZXlmcmFtZXNgXG4gIDAlIHtvcGFjaXR5OiAwfVxuICAyNSUge29wYWNpdHk6IDF9XG4gIDUwJSB7b3BhY2l0eTogMH1cbiAgNzUlIHtvcGFjaXR5OiAxfVxuICAxMDAlIHtvcGFjaXR5OiAwfVxuYDtcblxuY29uc3Qgd29ya2VyID0gY3NzYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogJHtmYWRlfSAzcztcbmA7XG5cbmNvbnN0IGdyZWVuID0gY3NzYFxuICAke3dvcmtlcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2U4NmQ7XG5gO1xuXG5jb25zdCByZWQgPSBjc3NgXG4gICR7d29ya2VyfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzMGUxNTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VXb3JrZXIoKSB7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldFN0YXR1cyh3aW5kb3cubmF2aWdhdG9yLm9uTGluZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCB1cGRhdGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdXBkYXRlKTtcbiAgICB1cGRhdGUoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb25saW5lJywgdXBkYXRlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvZmZsaW5lJywgdXBkYXRlKTtcbiAgICB9O1xuICB9LCBbdXBkYXRlXSk7XG5cbiAgaWYgKCEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB0eXBlb2Ygc3RhdHVzICE9PSAndW5kZWZpbmVkJykpIHJldHVybiBudWxsO1xuICByZXR1cm4gc3RhdHVzID8gPHNwYW4gY3NzPXtncmVlbn0gLz4gOiA8c3BhbiBjc3M9e3JlZH0gLz47XG59XG4iXX0= */");
function ServiceWorker() {
  _s();
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (typeof window !== 'undefined') {
      setStatus(window.navigator.onLine);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, [update]);
  if (!(typeof window !== 'undefined' && window.navigator && typeof status !== 'undefined')) return null;
  return status ? _span || (_span = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    css: green
  })) : _span2 || (_span2 = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    css: red
  }));
}
_s(ServiceWorker, "JcJ57YZsdKLV6RcmcaUqwxTSbc8=");
_c = ServiceWorker;
var _c;
__webpack_require__.$Refresh$.register(_c, "ServiceWorker");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/asyncModal.js"
/*!***********************************************!*\
  !*** ./src/app/business/splash/asyncModal.js ***!
  \***********************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncModal)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _Modal;
/* Async wrapper for loading chunk only when needed */


// need to be imported before being imported by react-perfect-scrollbar


const Modal = _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
  resolved: {},
  chunkName() {
    return "modal";
  },
  isReady(props) {
    const key = this.resolve(props);
    if (this.resolved[key] !== true) {
      return false;
    }
    if (true) {
      return !!__webpack_require__.m[key];
    }
    // removed by dead control flow

  },
  importAsync: () => __webpack_require__.e(/*! import() | modal */ "modal").then(__webpack_require__.bind(__webpack_require__, /*! ./modal */ "./src/app/business/splash/modal/index.js")),
  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync(props) {
    const id = this.resolve(props);
    if (true) {
      return __webpack_require__(id);
    }
    // removed by dead control flow

  },
  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./modal */ "./src/app/business/splash/modal/index.js");
    }
    // removed by dead control flow

  }
});
_c = Modal;
function AsyncModal() {
  return _Modal || (_Modal = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Modal, {}));
}
_c2 = AsyncModal;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Modal");
__webpack_require__.$Refresh$.register(_c2, "AsyncModal");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/index.js"
/*!******************************************!*\
  !*** ./src/app/business/splash/index.js ***!
  \******************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supernova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supernova */ "./src/app/business/splash/supernova/index.js");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro */ "./src/app/business/splash/intro/index.js");
/* harmony import */ var _asyncModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncModal */ "./src/app/business/splash/asyncModal.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/app/business/splash/style.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _Intro, _Supernova, _AsyncModal;





const Splash = () => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
  css: _style__WEBPACK_IMPORTED_MODULE_3__["default"].container,
  children: [_Intro || (_Intro = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_intro__WEBPACK_IMPORTED_MODULE_1__["default"], {})), _Supernova || (_Supernova = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_supernova__WEBPACK_IMPORTED_MODULE_0__["default"], {})), _AsyncModal || (_AsyncModal = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_asyncModal__WEBPACK_IMPORTED_MODULE_2__["default"], {}))]
});
_c = Splash;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Splash);
var _c;
__webpack_require__.$Refresh$.register(_c, "Splash");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/intro/index.js"
/*!************************************************!*\
  !*** ./src/app/business/splash/intro/index.js ***!
  \************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-typical */ "react-typical");
/* harmony import */ var react_typical__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_typical__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/app/business/splash/intro/style.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const Intro = () => (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
  children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_typical__WEBPACK_IMPORTED_MODULE_0___default()), {
    steps: ['Welcome into (my) space.'],
    wrapper: "span",
    css: _style__WEBPACK_IMPORTED_MODULE_1__["default"].intro
  }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_typical__WEBPACK_IMPORTED_MODULE_0___default()), {
    steps: [1700, 'Please click on the core star for instructions.'],
    wrapper: "span",
    css: _style__WEBPACK_IMPORTED_MODULE_1__["default"].intro2
  })]
});
_c = Intro;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);
var _c;
__webpack_require__.$Refresh$.register(_c, "Intro");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/intro/style.js"
/*!************************************************!*\
  !*** ./src/app/business/splash/intro/style.js ***!
  \************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const pos =  false ? 0 : {
  name: "u6pma8-pos",
  styles: "position:absolute;z-index:2;left:15px;color:green;&:after{content:\"\"!important;};label:pos;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9pbnRyby9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFZSIsImZpbGUiOiIvaG9tZS9ndWlsbGF1bWUvUHJvamVjdHMvZ3VpbGxhdW1lY2lzY28vc3JjL2FwcC9idXNpbmVzcy9zcGxhc2gvaW50cm8vc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCBwb3MgPSBjc3NgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYFxuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW50cm86IGNzc2BcbiAgICAgICAgJHtwb3N9O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgYCwgaW50cm8yOiBjc3NgXG4gICAgICAgICR7cG9zfTtcbiAgICAgICAgdG9wOiAzOXB4O1xuICAgIGBcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  intro: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(pos, ";top:15px;" + ( false ? 0 : ";label:intro;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9pbnRyby9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlYyIsImZpbGUiOiIvaG9tZS9ndWlsbGF1bWUvUHJvamVjdHMvZ3VpbGxhdW1lY2lzY28vc3JjL2FwcC9idXNpbmVzcy9zcGxhc2gvaW50cm8vc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCBwb3MgPSBjc3NgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYFxuO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW50cm86IGNzc2BcbiAgICAgICAgJHtwb3N9O1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgYCwgaW50cm8yOiBjc3NgXG4gICAgICAgICR7cG9zfTtcbiAgICAgICAgdG9wOiAzOXB4O1xuICAgIGBcbn07XG4iXX0= */"),
  intro2: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)(pos, ";top:39px;" + ( false ? 0 : ";label:intro2;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9pbnRyby9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCIiwiZmlsZSI6Ii9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9pbnRyby9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IHBvcyA9IGNzc2BcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICBjb2xvcjogZ3JlZW47XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgXG47XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbnRybzogY3NzYFxuICAgICAgICAke3Bvc307XG4gICAgICAgIHRvcDogMTVweDtcbiAgICBgLCBpbnRybzI6IGNzc2BcbiAgICAgICAgJHtwb3N9O1xuICAgICAgICB0b3A6IDM5cHg7XG4gICAgYFxufTtcbiJdfQ== */")
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/modal/reducer.js"
/*!**************************************************!*\
  !*** ./src/app/business/splash/modal/reducer.js ***!
  \**************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalSlice: () => (/* binding */ ModalSlice),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   visible: () => (/* binding */ visible)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const initialState = {
  visible: false,
  component: null
};
const ModalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalSlice);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/style.js"
/*!******************************************!*\
  !*** ./src/app/business/splash/style.js ***!
  \******************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  container:  false ? 0 : {
    name: "cpv84f-container",
    styles: "height:100%;label:container;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IiLCJmaWxlIjoiL2hvbWUvZ3VpbGxhdW1lL1Byb2plY3RzL2d1aWxsYXVtZWNpc2NvL3NyYy9hcHAvYnVzaW5lc3Mvc3BsYXNoL3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYFxufTtcbiJdfQ== */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  }
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/background/index.js"
/*!***************************************************************!*\
  !*** ./src/app/business/splash/supernova/background/index.js ***!
  \***************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/range */ "lodash-es/range");
/* harmony import */ var lodash_es_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canvas */ "./src/app/business/splash/supernova/canvas/index.js");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./star */ "./src/app/business/splash/supernova/background/star.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






function Background({
  w,
  h,
  size
}) {
  _s();
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ctxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const starsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    starsRef.current = [];
    lodash_es_range__WEBPACK_IMPORTED_MODULE_2___default()(0, size).forEach(() => {
      const star = new _star__WEBPACK_IMPORTED_MODULE_4__["default"](w, h);
      star.draw(ctx);
      starsRef.current.push(star);
    });
  }, [w, h, size]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(0, 0, w, h);
    starsRef.current.forEach(star => {
      star.update(w, h);
      star.draw(ctx);
    });
  }, [w, h]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_canvas__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: canvasRef
  });
}
_s(Background, "zKqlRrJF/1VMmq6/YKQ8l17bWns=");
_c = Background;
Background.propTypes = {
  w: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  h: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Background));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Background");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/background/star.js"
/*!**************************************************************!*\
  !*** ./src/app/business/splash/supernova/background/star.js ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/random */ "lodash-es/random");
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es_random__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const Star = function Star(w, h) {
  const padding = 10;
  this.originW = w;
  this.originH = h;
  this.originX = this.x = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(padding, this.originW - padding);
  this.originY = this.y = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(padding, this.originH - padding);
  this.radius = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(1, 3);
  this.alpha = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0.6, 0.9);

  // rgb color
  this.r = 255;
  this.g = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(150, 255);
  this.b = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(150, 255);
  const update = (w, h) => {
    this.x = this.originX * w / this.originW;
    this.y = this.originY * h / this.originH;
  };
  const draw = ctx => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'white';
    ctx.fill();
  };
  const reinit = (w, h) => {
    // update originW and originH, if originally initialized to 0
    this.originW = this.originW || w;
    this.originH = this.originH || h;
    this.originX = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(padding, this.originW - padding);
    this.originY = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(padding, this.originH - padding);
  };
  return {
    update,
    draw,
    reinit
  };
};
_c = Star;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Star);
var _c;
__webpack_require__.$Refresh$.register(_c, "Star");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/canvas/index.js"
/*!***********************************************************!*\
  !*** ./src/app/business/splash/supernova/canvas/index.js ***!
  \***********************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/app/business/splash/supernova/canvas/style.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const Canvas = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(_c = function Canvas(props, ref) {
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("canvas", {
    ref: ref,
    css: _style__WEBPACK_IMPORTED_MODULE_1__["default"].container
  });
});
_c2 = Canvas;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Canvas$forwardRef");
__webpack_require__.$Refresh$.register(_c2, "Canvas");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/canvas/style.js"
/*!***********************************************************!*\
  !*** ./src/app/business/splash/supernova/canvas/style.js ***!
  \***********************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  container:  false ? 0 : {
    name: "c5frcu-container",
    styles: "position:absolute;top:0;left:0;bottom:0;right:0;label:container;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9zdXBlcm5vdmEvY2FudmFzL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQiIsImZpbGUiOiIvaG9tZS9ndWlsbGF1bWUvUHJvamVjdHMvZ3VpbGxhdW1lY2lzY28vc3JjL2FwcC9idXNpbmVzcy9zcGxhc2gvc3VwZXJub3ZhL2NhbnZhcy9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICBgXG59O1xuIl19 */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  }
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/core.js"
/*!***************************************************!*\
  !*** ./src/app/business/splash/supernova/core.js ***!
  \***************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas */ "./src/app/business/splash/supernova/canvas/index.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();




function Core({
  w,
  h,
  radius
}) {
  _s();
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ctxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    const r = 255;
    const g = 250;
    const b = 230;
    const alpha = 0.9;
    ctx.clearRect(-w, -h, 2 * w, 2 * h);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.shadowBlur = 100;
    ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
    ctx.fill();
  }, [w, h, radius]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_canvas__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: canvasRef
  });
}
_s(Core, "I6HOKD3xwyvr1jqfaC6aF0OK2rQ=");
_c = Core;
Core.propTypes = {
  w: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  h: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  radius: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Core));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Core");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/ellipse/index.js"
/*!************************************************************!*\
  !*** ./src/app/business/splash/supernova/ellipse/index.js ***!
  \************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/range */ "lodash-es/range");
/* harmony import */ var lodash_es_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "d3-timer");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_timer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-transition */ "d3-transition");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_transition__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-interpolate */ "d3-interpolate");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_interpolate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canvas */ "./src/app/business/splash/supernova/canvas/index.js");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./star */ "./src/app/business/splash/supernova/ellipse/star.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();









function Ellipse({
  w,
  h,
  size,
  a,
  b,
  padding
}) {
  _s();
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ctxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const starsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(-Math.PI / 20);
    const radians = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.interpolate)(0, Math.PI * 2);
    starsRef.current = [];
    lodash_es_range__WEBPACK_IMPORTED_MODULE_2___default()(0, size).forEach(o => {
      const teta = radians(o / size);
      starsRef.current.push(new _star__WEBPACK_IMPORTED_MODULE_7__["default"](w, h, size, a, b, teta, padding));
    });
    timerRef.current?.stop?.();
    timerRef.current = (0,d3_timer__WEBPACK_IMPORTED_MODULE_3__.timer)(() => {
      ctx.clearRect(-w, -h, 2 * w, 2 * h);
      starsRef.current.forEach(star => {
        star.move();
        star.draw(ctx);
      });
    });
    return () => {
      timerRef.current?.stop?.();
    };
  }, [w, h, size, a, b, padding]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(-Math.PI / 20);
    starsRef.current.forEach(star => {
      star.update(a, b);
    });
  }, [w, h, a, b]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_canvas__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: canvasRef
  });
}
_s(Ellipse, "JQmGWu9sKsD3uziAKuifAIthCaA=");
_c = Ellipse;
Ellipse.propTypes = {
  w: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  h: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  a: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  b: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  padding: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Ellipse));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Ellipse");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/ellipse/star.js"
/*!***********************************************************!*\
  !*** ./src/app/business/splash/supernova/ellipse/star.js ***!
  \***********************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/random */ "lodash-es/random");
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es_random__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const Star = function Star(w, h, size, orbitA, orbitB, teta, padding) {
  this.originW = this.w = w;
  this.originH = this.h = h;
  this.size = size;
  this.orbitA = orbitA;
  this.orbitB = orbitB;

  // set own radius
  const radius = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(1, 3);
  // set own alpha
  const alpha = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0.5, 0.9);
  // set speed
  const speed = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0.5, 0.8) * -1;
  // get real carthesian coordonate
  // see https://www.mathopenref.com/coordparamellipse.html for understanding ellipse parametric equation
  let x = Math.cos(teta) * orbitA,
    y = Math.sin(teta) * orbitB;

  // generate deltaed coordinate
  const padX = (Math.random() > 0.5 ? 1 : -1) * lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0, padding);
  const padY = (Math.random() > 0.5 ? 1 : -1) * lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0, padding);
  x += padX;
  y += padY;
  this.teta = teta;
  this.x = x;
  this.y = y;
  this.padX = padX;
  this.padY = padY;
  this.radius = radius;
  this.originAlpha = this.alpha = alpha;
  this.speed = speed;
  const draw = ctx => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // full centered circle
    // create different light power
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
  };
  const move = () => {
    // move to + this.speed
    const index = this.size * this.teta / (2 * Math.PI) + this.speed;
    // update with new angle
    this.teta = index * 2 * Math.PI / this.size % (2 * Math.PI);
    const x = Math.cos(this.teta) * this.orbitA,
      y = Math.sin(this.teta) * this.orbitB;

    // update carthesian coordinate by respecting initial randomized padding
    this.x = x + this.padX;
    this.y = y + this.padY;

    // make it randomly brite
    this.alpha = this.alpha === 1 ? this.originAlpha : Math.random() < 0.01 ? 1 : this.alpha;
  };
  const update = (a, b) => {
    this.orbitA = a;
    this.orbitB = b;
  };
  return {
    draw,
    move,
    update
  };
};
_c = Star;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Star);
var _c;
__webpack_require__.$Refresh$.register(_c, "Star");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/index.js"
/*!****************************************************!*\
  !*** ./src/app/business/splash/supernova/index.js ***!
  \****************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/reducer */ "./src/app/business/splash/modal/reducer.js");
/* harmony import */ var _reducers_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/general */ "./src/app/reducers/general.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/app/business/splash/supernova/style.js");
/* harmony import */ var _background_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background/index */ "./src/app/business/splash/supernova/background/index.js");
/* harmony import */ var _shootingStar_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shootingStar/index */ "./src/app/business/splash/supernova/shootingStar/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./src/app/business/splash/supernova/core.js");
/* harmony import */ var _ellipse_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ellipse/index */ "./src/app/business/splash/supernova/ellipse/index.js");
/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spaceship */ "./src/app/business/splash/supernova/spaceship.js");
/* harmony import */ var _planet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./planet */ "./src/app/business/splash/supernova/planet/index.js");
/* harmony import */ var _planet_mars_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./planet/mars.png */ "./src/app/business/splash/supernova/planet/mars.png");
/* harmony import */ var _planet_blue_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./planet/blue.png */ "./src/app/business/splash/supernova/planet/blue.png");
/* harmony import */ var _planet_white_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./planet/white.png */ "./src/app/business/splash/supernova/planet/white.png");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();
















function SuperNova() {
  _s();
  // redux hooks
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const intro = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.general.intro);

  // constants (old: this.nbBackgroundStars / this.nbStars / this.padding)
  const nbBackgroundStars = 100;
  const nbStars = 1000;
  const padding = 50;
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const redPlanetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const bluePlanetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const orangePlanetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    over: false,
    loaded: false,
    w: 0,
    h: 0,
    a: 0,
    b: 0,
    coreRadius: 0,
    redPlanet: null,
    bluePlanet: null,
    orangePlanet: null
  });
  const resize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const w = wrapper.offsetWidth;
    const h = wrapper.offsetHeight;
    const a = w / 2.5;
    const b = a / 2.3;
    const coreRadius = (a - b) / 5;
    const redPlanet = {
      radius: (a - b) / 12,
      a: 3 * a / 8,
      b: 3 * a / 8 / 2
    };
    const bluePlanet = {
      radius: (a - b) / 8,
      a: 9 * a / 8,
      b: 9 * a / 8 / 2
    };
    const orangePlanet = {
      radius: (a - b) / 9,
      a: 4 * a / 8,
      b: 4 * a / 8 / 2
    };
    setState(prev => ({
      ...prev,
      loaded: true,
      w,
      h,
      a,
      b,
      coreRadius,
      redPlanet,
      bluePlanet,
      orangePlanet
    }));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [resize]);
  const isInCircle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((x, y, r, a, b) => (a - x) ** 2 + (b - y) ** 2 < r ** 2, []);
  const isInCore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((x, y) => {
    const {
      w,
      h,
      coreRadius
    } = state;
    return isInCircle(w / 2, h / 2, coreRadius, x, y);
  }, [isInCircle, state]);
  const isInPlanet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((a, b, planetRef, radius) => {
    const planet = planetRef.current;
    if (!planet) return false;
    const coord = planet.getCoordinate?.();
    if (!coord) return false;
    return isInCircle(a, b, radius, coord.x, coord.y);
  }, [isInCircle]);
  const click = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const {
      redPlanet,
      orangePlanet,
      bluePlanet
    } = state;
    if (!redPlanet || !orangePlanet || !bluePlanet) return;
    const [x, y] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__.pointer)(e, wrapper);
    if (isInCore(x, y)) {
      dispatch((0,_modal_reducer__WEBPACK_IMPORTED_MODULE_3__.set)('core'));
      dispatch((0,_reducers_general__WEBPACK_IMPORTED_MODULE_4__.intro)(true));
    }
    if (isInPlanet(x, y, redPlanetRef, redPlanet.radius)) {
      dispatch((0,_modal_reducer__WEBPACK_IMPORTED_MODULE_3__.set)('skills'));
    }
    if (isInPlanet(x, y, orangePlanetRef, orangePlanet.radius)) {
      dispatch((0,_modal_reducer__WEBPACK_IMPORTED_MODULE_3__.set)('awards'));
    }
    if (isInPlanet(x, y, bluePlanetRef, bluePlanet.radius)) {
      dispatch((0,_modal_reducer__WEBPACK_IMPORTED_MODULE_3__.set)('experience'));
    }
  }, [dispatch, isInCore, isInPlanet, state]);
  const mouseMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const {
      redPlanet,
      orangePlanet,
      bluePlanet,
      over
    } = state;
    if (!redPlanet || !orangePlanet || !bluePlanet) return;
    const [x, y] = (0,d3_selection__WEBPACK_IMPORTED_MODULE_1__.pointer)(e, wrapper);
    const nextOver = isInCore(x, y) || isInPlanet(x, y, redPlanetRef, redPlanet.radius) || isInPlanet(x, y, orangePlanetRef, orangePlanet.radius) || isInPlanet(x, y, bluePlanetRef, bluePlanet.radius);
    if (nextOver !== over) {
      setState(prev => ({
        ...prev,
        over: nextOver
      }));
    }
  }, [isInCore, isInPlanet, state]);
  const spaceshipClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch((0,_modal_reducer__WEBPACK_IMPORTED_MODULE_3__.set)('spaceship'));
  }, [dispatch]);
  const {
    loaded,
    w,
    h,
    coreRadius,
    a,
    b,
    redPlanet,
    bluePlanet,
    orangePlanet
  } = state;
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
    ref: wrapperRef,
    css: _style__WEBPACK_IMPORTED_MODULE_5__["default"].wrapper(state.over),
    onClick: click,
    onMouseMove: mouseMove,
    children: loaded && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
      children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_background_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        w: w,
        h: h,
        size: nbBackgroundStars
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_shootingStar_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
        w: w,
        h: h
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
        w: w,
        h: h,
        radius: coreRadius
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ellipse_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        w: w,
        h: h,
        size: nbStars,
        a: a,
        b: b,
        padding: padding
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_spaceship__WEBPACK_IMPORTED_MODULE_10__["default"], {
        w: w,
        h: h,
        width: 48,
        height: 48,
        onClick: spaceshipClick
      }), intro && redPlanet && bluePlanet && orangePlanet && (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_planet__WEBPACK_IMPORTED_MODULE_11__["default"], {
          w: w,
          h: h,
          color: "#97140c",
          radius: redPlanet.radius,
          a: redPlanet.a,
          b: redPlanet.b,
          intervals: 4000,
          teta: Math.PI / 2,
          img: _planet_mars_png__WEBPACK_IMPORTED_MODULE_12__,
          ref: redPlanetRef
        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_planet__WEBPACK_IMPORTED_MODULE_11__["default"], {
          w: w,
          h: h,
          color: "#7399b8",
          radius: bluePlanet.radius,
          a: bluePlanet.a,
          b: bluePlanet.b,
          intervals: 3500,
          teta: -Math.PI / 2,
          img: _planet_blue_png__WEBPACK_IMPORTED_MODULE_13__,
          ref: bluePlanetRef
        }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_planet__WEBPACK_IMPORTED_MODULE_11__["default"], {
          w: w,
          h: h,
          color: "#8a451f",
          radius: orangePlanet.radius,
          a: orangePlanet.a,
          b: orangePlanet.b,
          intervals: 2000,
          teta: 0,
          img: _planet_white_png__WEBPACK_IMPORTED_MODULE_14__,
          ref: orangePlanetRef
        })]
      })]
    })
  });
}
_s(SuperNova, "oYIi8l+3ilIkBDNBf1wpzf0W78Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});
_c = SuperNova;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuperNova);
var _c;
__webpack_require__.$Refresh$.register(_c, "SuperNova");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/planet/index.js"
/*!***********************************************************!*\
  !*** ./src/app/business/splash/supernova/planet/index.js ***!
  \***********************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "d3-timer");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-transition */ "d3-transition");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_transition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-interpolate */ "d3-interpolate");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_interpolate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas */ "./src/app/business/splash/supernova/canvas/index.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();







const Planet = /*#__PURE__*/_s(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(_c = _s(function Planet({
  w,
  h,
  a,
  b,
  intervals,
  teta,
  img,
  radius
}, ref) {
  _s();
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ctxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const orbitARef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(a);
  const orbitBRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(b);
  const intervalsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(intervals);
  const tetaRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((teta || 0) % (2 * Math.PI));
  const radiansRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,d3_interpolate__WEBPACK_IMPORTED_MODULE_4__.interpolate)(0, Math.PI * 2));
  const xRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const yRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const canvasRotationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-Math.PI / 20);
  const originWRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(w);
  const originHRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(h);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    getCoordinate: () => ({
      x: yRef.current * Math.sin(-canvasRotationRef.current) + xRef.current * Math.cos(-canvasRotationRef.current) + originWRef.current / 2,
      y: yRef.current * Math.cos(-canvasRotationRef.current) - xRef.current * Math.sin(-canvasRotationRef.current) + originHRef.current / 2
    })
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    orbitARef.current = a;
    orbitBRef.current = b;
    intervalsRef.current = intervals;
    originWRef.current = w;
    originHRef.current = h;
  }, [a, b, intervals, w, h]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(canvasRotationRef.current);
    const image = new Image();
    image.src = img;
    const onLoad = () => {
      timerRef.current?.stop?.();
      timerRef.current = (0,d3_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(() => {
        const c = ctxRef.current;
        if (!c) return;
        c.clearRect(-w, -h, 2 * w, 2 * h);
        const index = tetaRef.current * intervalsRef.current / (Math.PI * 2) - 1;
        tetaRef.current = radiansRef.current(index / intervalsRef.current) % (2 * Math.PI);
        xRef.current = Math.cos(tetaRef.current) * orbitARef.current;
        yRef.current = Math.sin(tetaRef.current) * orbitBRef.current;
        c.drawImage(image, xRef.current - radius, yRef.current - radius, radius * 2, radius * 2);
      });
    };
    image.addEventListener('load', onLoad, false);
    return () => {
      image.removeEventListener('load', onLoad, false);
      timerRef.current?.stop?.();
    };
  }, [img, radius, w, h]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(-w, -h, 2 * w, 2 * h);
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(canvasRotationRef.current);
  }, [w, h]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_canvas__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: canvasRef
  });
}, "YLzwSt2pbutXkJ+uzrkEXNVTT7E=")), "YLzwSt2pbutXkJ+uzrkEXNVTT7E=");
_c2 = Planet;
Planet.propTypes = {
  w: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  h: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  a: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  b: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  intervals: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  teta: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  img: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  radius: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Planet));
var _c, _c2, _c3;
__webpack_require__.$Refresh$.register(_c, "Planet$forwardRef");
__webpack_require__.$Refresh$.register(_c2, "Planet");
__webpack_require__.$Refresh$.register(_c3, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/shootingStar/index.js"
/*!*****************************************************************!*\
  !*** ./src/app/business/splash/supernova/shootingStar/index.js ***!
  \*****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/random */ "lodash-es/random");
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "d3-timer");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_timer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas */ "./src/app/business/splash/supernova/canvas/index.js");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./star */ "./src/app/business/splash/supernova/shootingStar/star.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();







function ShootingStars({
  w,
  h
}) {
  _s();
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ctxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const shootingStarsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const luckRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(100);
  const maxStepsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(70);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    ctxRef.current = canvas.getContext('2d');
    timerRef.current?.stop?.();
    timerRef.current = (0,d3_timer__WEBPACK_IMPORTED_MODULE_3__.timer)(() => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.clearRect(-w, -h, 2 * w, 2 * h);
      if (lodash_es_random__WEBPACK_IMPORTED_MODULE_2___default()(1, luckRef.current) === luckRef.current) {
        shootingStarsRef.current.push(new _star__WEBPACK_IMPORTED_MODULE_5__["default"](w, h));
      }
      shootingStarsRef.current = shootingStarsRef.current.filter(star => star.getStep() <= maxStepsRef.current);
      shootingStarsRef.current.forEach(star => {
        star.move();
        star.draw(ctx);
      });
    });
    return () => {
      timerRef.current?.stop?.();
    };
  }, [w, h]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    shootingStarsRef.current.forEach(star => star.update(w, h));
  }, [w, h]);
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_canvas__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: canvasRef
  });
}
_s(ShootingStars, "ECykwEZPq4nfCqxJLSQ3uRWwfBs=");
_c = ShootingStars;
ShootingStars.propTypes = {
  w: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  h: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(ShootingStars));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ShootingStars");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/shootingStar/star.js"
/*!****************************************************************!*\
  !*** ./src/app/business/splash/supernova/shootingStar/star.js ***!
  \****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/random */ "lodash-es/random");
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es_random__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const ShootingStar = function ShootingStar(w, h) {
  this.originW = w;
  this.originH = h;
  this.radius = 1;
  this.teta = 5 * Math.PI / 8;
  this.originX = this.x = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0, w);
  this.originY = this.y = lodash_es_random__WEBPACK_IMPORTED_MODULE_0___default()(0, h / 2);
  this.step = 0;
  const draw = ctx => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2); // full centered circle
    // create different light power
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
  };
  const move = () => {
    // we increment the radius of the circle, so the shooting star move along its teta angle constantly
    this.radius += 15;
    this.step += 1;
    this.x = Math.cos(this.teta) * this.radius + this.originX;
    this.y = Math.sin(this.teta) * this.radius + this.originY;
  };
  const update = (w, h) => {
    this.originX = this.originX * w / this.originW;
    this.originY = this.originY * h / this.originH;
    this.originW = w;
    this.originH = h;
  };
  const getStep = () => this.step;
  return {
    draw,
    move,
    getStep,
    update
  };
};
_c = ShootingStar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShootingStar);
var _c;
__webpack_require__.$Refresh$.register(_c, "ShootingStar");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/spaceship.js"
/*!********************************************************!*\
  !*** ./src/app/business/splash/supernova/spaceship.js ***!
  \********************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/random */ "lodash-es/random");
/* harmony import */ var lodash_es_random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_es_random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "d3-interpolate");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_interpolate__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-timer */ "d3-timer");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_timer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-transition */ "d3-transition");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_transition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _circle,
  _path,
  _path2,
  _polygon,
  _polygon2,
  _path3,
  _path4,
  _g,
  _rect,
  _rect2,
  _s = __webpack_require__.$Refresh$.signature();







function Spaceship({
  w,
  h,
  width,
  height,
  onClick
}) {
  _s();
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const originWRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(w);
  const originHRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(h);
  const luckRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(300);
  const stepRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const speedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(200);
  const iRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,d3_interpolate__WEBPACK_IMPORTED_MODULE_3__.interpolate)(-width, h));
  const xRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(lodash_es_random__WEBPACK_IMPORTED_MODULE_2___default()(width, w - width));
  const yRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(h - height);
  const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    zIndex: 1,
    position: 'absolute'
  });
  const [isSpaceShift, setIsSpaceShift] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const draw = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setStyle(prev => ({
      ...prev,
      top: yRef.current,
      left: xRef.current
    }));
    setIsSpaceShift(stepRef.current < speedRef.current);
  }, []);
  const move = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    yRef.current = originHRef.current - height - iRef.current(stepRef.current / speedRef.current);
    xRef.current = stepRef.current === speedRef.current ? lodash_es_random__WEBPACK_IMPORTED_MODULE_2___default()(width, originWRef.current - width) : xRef.current;
  }, [height, width]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // init / re-init when size changes
    originWRef.current = w;
    originHRef.current = h;
    iRef.current = (0,d3_interpolate__WEBPACK_IMPORTED_MODULE_3__.interpolate)(-width, h);

    // keep current x in proportion
    xRef.current = xRef.current * w / (originWRef.current || w);
    yRef.current = h - height;
  }, [w, h, width, height]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    timerRef.current?.stop?.();
    timerRef.current = (0,d3_timer__WEBPACK_IMPORTED_MODULE_4__.timer)(() => {
      if (!isSpaceShift) {
        if (lodash_es_random__WEBPACK_IMPORTED_MODULE_2___default()(0, luckRef.current) === luckRef.current) {
          stepRef.current = 0;
          draw();
        }
      } else if (stepRef.current <= speedRef.current) {
        move();
        draw();
        stepRef.current += 1;
      }
    });
    return () => {
      timerRef.current?.stop?.();
    };
  }, [draw, isSpaceShift, move]);
  if (!isSpaceShift) return null;
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 512 512",
    style: style,
    onClick: onClick,
    children: [_circle || (_circle = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("circle", {
      fill: "#FFDA44",
      cx: "256",
      cy: "428.973",
      r: "55.351"
    })), _path || (_path = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
      fill: "#FF9811",
      d: "M290.595,401.297c0,16.812-8.271,33.84-24.583,50.612c-3.363,3.458-6.765,6.58-10.012,9.335c-3.246-2.755-6.649-5.877-10.012-9.335c-16.312-16.771-24.583-33.8-24.583-50.612H290.595 M256,359.784l-76.108,41.514C179.892,470.487,256,512,256,512s76.108-41.513,76.108-110.703L256,359.784z"
    })), _path2 || (_path2 = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
      fill: "#FF5023",
      d: "M256,359.784v41.514h34.595c0,16.812-8.271,33.84-24.583,50.612c-3.363,3.458-6.765,6.58-10.012,9.335V512c0,0,76.108-41.513,76.108-110.703L256,359.784z"
    })), _polygon || (_polygon = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polygon", {
      fill: "#3C5D76",
      points: "84.522,252.827 65.075,359.784 262.919,359.784 262.919,74.43 "
    })), _polygon2 || (_polygon2 = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polygon", {
      fill: "#1E2E3B",
      points: "427.479,252.827 249.081,74.43 249.081,359.784 446.925,359.784 "
    })), _path3 || (_path3 = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
      fill: "#CCE9F9",
      d: "M332.108,401.297V110.703C332.108,41.514,256,0,256,0s-76.108,41.514-76.108,110.703v290.595H332.108z"
    })), _path4 || (_path4 = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
      fill: "#93C7EF",
      d: "M332.108,401.297V110.703C332.108,41.514,256,0,256,0v401.297H332.108z"
    })), _g || (_g = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("g", {
      children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
        fill: "#1E2E3B",
        d: "M283.676,110.703c0-15.285-12.392-27.676-27.676-27.676l0,0c-15.284,0-27.676,12.39-27.676,27.676H283.676z"
      }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
        x: "235.243",
        y: "262.919",
        fill: "#1E2E3B",
        width: "41.514",
        height: "96.865"
      })]
    })), _rect || (_rect = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
      x: "179.892",
      y: "359.784",
      fill: "#78B9EB",
      width: "152.216",
      height: "41.514"
    })), _rect2 || (_rect2 = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
      x: "256",
      y: "359.784",
      fill: "#5A8BB0",
      width: "76.108",
      height: "41.514"
    }))]
  });
}
_s(Spaceship, "i/zuCdaODsww07T77IP68ursrEg=");
_c = Spaceship;
Spaceship.propTypes = {
  w: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  h: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Spaceship));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Spaceship");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/business/splash/supernova/style.js"
/*!****************************************************!*\
  !*** ./src/app/business/splash/supernova/style.js ***!
  \****************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  wrapper: over => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("height:100%;overflow:hidden;background-color:#111;width:100%;position:relative;cursor:", over ? 'pointer' : 'default', ";" + ( false ? 0 : ";label:wrapper;"),  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9zdXBlcm5vdmEvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRzBCIiwiZmlsZSI6Ii9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2J1c2luZXNzL3NwbGFzaC9zdXBlcm5vdmEvc3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgd3JhcHBlcjogKG92ZXIpID0+IGNzc2BcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjdXJzb3I6ICR7b3ZlciA/ICdwb2ludGVyJyA6ICdkZWZhdWx0J307XG4gICAgYFxufTtcbiJdfQ== */")
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/common/ui/globalStyles.js"
/*!*******************************************!*\
  !*** ./src/app/common/ui/globalStyles.js ***!
  \*******************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fonts_nunito_nunito_black_webfont_woff2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/nunito/nunito-black-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-black-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_black_webfont_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/nunito/nunito-black-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-black-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_bold_webfont_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/nunito/nunito-bold-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-bold-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_bold_webfont_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/nunito/nunito-bold-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-bold-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_extrabold_webfont_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/nunito/nunito-extrabold-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-extrabold-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_extrabold_webfont_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonts/nunito/nunito-extrabold-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-extrabold-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_extralight_webfont_woff2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fonts/nunito/nunito-extralight-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-extralight-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_extralight_webfont_woff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fonts/nunito/nunito-extralight-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-extralight-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_light_webfont_woff2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fonts/nunito/nunito-light-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-light-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_light_webfont_woff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fonts/nunito/nunito-light-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-light-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_medium_webfont_woff2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fonts/nunito/nunito-medium-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-medium-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_medium_webfont_woff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fonts/nunito/nunito-medium-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-medium-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_regular_webfont_woff2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fonts/nunito/nunito-regular-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-regular-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonts/nunito/nunito-regular-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-regular-webfont.woff");
/* harmony import */ var _fonts_nunito_nunito_semibold_webfont_woff2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fonts/nunito/nunito-semibold-webfont.woff2 */ "./src/app/common/ui/fonts/nunito/nunito-semibold-webfont.woff2");
/* harmony import */ var _fonts_nunito_nunito_semibold_webfont_woff__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fonts/nunito/nunito-semibold-webfont.woff */ "./src/app/common/ui/fonts/nunito/nunito-semibold-webfont.woff");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



// Import assets so webpack emits them and returns the final public URL
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)("html,body,#root,#root>div{height:100%;}body{margin:0;padding:0;background:#fefefe;color:rgb(68, 66, 87);font-family:'nunitolight',sans-serif;font-size:16px;letter-spacing:0.5px;}h1,h2,h3,h4{margin:0;}button,html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:none;}@font-face{font-family:'nunitoblack';src:url(", _fonts_nunito_nunito_black_webfont_woff2__WEBPACK_IMPORTED_MODULE_1__, ") format('woff2'),url(", _fonts_nunito_nunito_black_webfont_woff__WEBPACK_IMPORTED_MODULE_2__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitobold';src:url(", _fonts_nunito_nunito_bold_webfont_woff2__WEBPACK_IMPORTED_MODULE_3__, ") format('woff2'),url(", _fonts_nunito_nunito_bold_webfont_woff__WEBPACK_IMPORTED_MODULE_4__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitoextrabold';src:url(", _fonts_nunito_nunito_extrabold_webfont_woff2__WEBPACK_IMPORTED_MODULE_5__, ") format('woff2'),url(", _fonts_nunito_nunito_extrabold_webfont_woff__WEBPACK_IMPORTED_MODULE_6__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitoextralight';src:url(", _fonts_nunito_nunito_extralight_webfont_woff2__WEBPACK_IMPORTED_MODULE_7__, ") format('woff2'),url(", _fonts_nunito_nunito_extralight_webfont_woff__WEBPACK_IMPORTED_MODULE_8__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitolight';src:url(", _fonts_nunito_nunito_light_webfont_woff2__WEBPACK_IMPORTED_MODULE_9__, ") format('woff2'),url(", _fonts_nunito_nunito_light_webfont_woff__WEBPACK_IMPORTED_MODULE_10__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitomedium';src:url(", _fonts_nunito_nunito_medium_webfont_woff2__WEBPACK_IMPORTED_MODULE_11__, ") format('woff2'),url(", _fonts_nunito_nunito_medium_webfont_woff__WEBPACK_IMPORTED_MODULE_12__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitoregular';src:url(", _fonts_nunito_nunito_regular_webfont_woff2__WEBPACK_IMPORTED_MODULE_13__, ") format('woff2'),url(", _fonts_nunito_nunito_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_14__, ") format('woff');font-weight:normal;font-style:normal;}@font-face{font-family:'nunitosemibold';src:url(", _fonts_nunito_nunito_semibold_webfont_woff2__WEBPACK_IMPORTED_MODULE_15__, ") format('woff2'),url(", _fonts_nunito_nunito_semibold_webfont_woff__WEBPACK_IMPORTED_MODULE_16__, ") format('woff');font-weight:normal;font-style:normal;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL2NvbW1vbi91aS9nbG9iYWxTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QiIsImZpbGUiOiIvaG9tZS9ndWlsbGF1bWUvUHJvamVjdHMvZ3VpbGxhdW1lY2lzY28vc3JjL2FwcC9jb21tb24vdWkvZ2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gSW1wb3J0IGFzc2V0cyBzbyB3ZWJwYWNrIGVtaXRzIHRoZW0gYW5kIHJldHVybnMgdGhlIGZpbmFsIHB1YmxpYyBVUkxcbmltcG9ydCBudW5pdG9CbGFja1dvZmYyIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1ibGFjay13ZWJmb250LndvZmYyJztcbmltcG9ydCBudW5pdG9CbGFja1dvZmYgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLWJsYWNrLXdlYmZvbnQud29mZic7XG5pbXBvcnQgbnVuaXRvQm9sZFdvZmYyIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1ib2xkLXdlYmZvbnQud29mZjInO1xuaW1wb3J0IG51bml0b0JvbGRXb2ZmIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1ib2xkLXdlYmZvbnQud29mZic7XG5pbXBvcnQgbnVuaXRvRXh0cmFCb2xkV29mZjIgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLWV4dHJhYm9sZC13ZWJmb250LndvZmYyJztcbmltcG9ydCBudW5pdG9FeHRyYUJvbGRXb2ZmIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1leHRyYWJvbGQtd2ViZm9udC53b2ZmJztcbmltcG9ydCBudW5pdG9FeHRyYUxpZ2h0V29mZjIgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLWV4dHJhbGlnaHQtd2ViZm9udC53b2ZmMic7XG5pbXBvcnQgbnVuaXRvRXh0cmFMaWdodFdvZmYgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLWV4dHJhbGlnaHQtd2ViZm9udC53b2ZmJztcbmltcG9ydCBudW5pdG9MaWdodFdvZmYyIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1saWdodC13ZWJmb250LndvZmYyJztcbmltcG9ydCBudW5pdG9MaWdodFdvZmYgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLWxpZ2h0LXdlYmZvbnQud29mZic7XG5pbXBvcnQgbnVuaXRvTWVkaXVtV29mZjIgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLW1lZGl1bS13ZWJmb250LndvZmYyJztcbmltcG9ydCBudW5pdG9NZWRpdW1Xb2ZmIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1tZWRpdW0td2ViZm9udC53b2ZmJztcbmltcG9ydCBudW5pdG9SZWd1bGFyV29mZjIgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLXJlZ3VsYXItd2ViZm9udC53b2ZmMic7XG5pbXBvcnQgbnVuaXRvUmVndWxhcldvZmYgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLXJlZ3VsYXItd2ViZm9udC53b2ZmJztcbmltcG9ydCBudW5pdG9TZW1pQm9sZFdvZmYyIGZyb20gJy4vZm9udHMvbnVuaXRvL251bml0by1zZW1pYm9sZC13ZWJmb250LndvZmYyJztcbmltcG9ydCBudW5pdG9TZW1pQm9sZFdvZmYgZnJvbSAnLi9mb250cy9udW5pdG8vbnVuaXRvLXNlbWlib2xkLXdlYmZvbnQud29mZic7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IGNzc2BcbiAgICBodG1sLCBib2R5LCAjcm9vdCwgI3Jvb3QgPiBkaXYge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbiAgICAgICAgY29sb3I6IHJnYig2OCwgNjYsIDg3KTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdudW5pdG9saWdodCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cblxuICAgIGgxLCBoMiwgaDMsIGg0IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGJ1dHRvbixcbiAgICBodG1sIFt0eXBlPVwiYnV0dG9uXCJdLCAvKiAxICovXG4gICAgW3R5cGU9XCJyZXNldFwiXSxcbiAgICBbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogMiAqL1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b2JsYWNrJztcbiAgICAgICAgc3JjOiB1cmwoJHtudW5pdG9CbGFja1dvZmYyfSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJHtudW5pdG9CbGFja1dvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b2JvbGQnO1xuICAgICAgICBzcmM6IHVybCgke251bml0b0JvbGRXb2ZmMn0pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCR7bnVuaXRvQm9sZFdvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b2V4dHJhYm9sZCc7XG4gICAgICAgIHNyYzogdXJsKCR7bnVuaXRvRXh0cmFCb2xkV29mZjJ9KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgke251bml0b0V4dHJhQm9sZFdvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b2V4dHJhbGlnaHQnO1xuICAgICAgICBzcmM6IHVybCgke251bml0b0V4dHJhTGlnaHRXb2ZmMn0pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCR7bnVuaXRvRXh0cmFMaWdodFdvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b2xpZ2h0JztcbiAgICAgICAgc3JjOiB1cmwoJHtudW5pdG9MaWdodFdvZmYyfSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJHtudW5pdG9MaWdodFdvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b21lZGl1bSc7XG4gICAgICAgIHNyYzogdXJsKCR7bnVuaXRvTWVkaXVtV29mZjJ9KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgIHVybCgke251bml0b01lZGl1bVdvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b3JlZ3VsYXInO1xuICAgICAgICBzcmM6IHVybCgke251bml0b1JlZ3VsYXJXb2ZmMn0pIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgdXJsKCR7bnVuaXRvUmVndWxhcldvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cblxuICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ251bml0b3NlbWlib2xkJztcbiAgICAgICAgc3JjOiB1cmwoJHtudW5pdG9TZW1pQm9sZFdvZmYyfSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICB1cmwoJHtudW5pdG9TZW1pQm9sZFdvZmZ9KSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cbmA7XG4iXX0= */")));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/index.js"
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _business_splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business/splash */ "./src/app/business/splash/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/app/style.js");
/* harmony import */ var _business_common_components_serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business/common/components/serviceWorker */ "./src/app/business/common/components/serviceWorker.js");
/* harmony import */ var _common_ui_globalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/ui/globalStyles */ "./src/app/common/ui/globalStyles.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout */ "./src/app/layout/index.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _ServiceWorker,
  _Routes,
  _s = __webpack_require__.$Refresh$.signature();








const App = () => {
  _s();
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("dic", {
    css: _style__WEBPACK_IMPORTED_MODULE_3__["default"].container,
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.Global, {
      styles: (0,_common_ui_globalStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(theme)
    }), _ServiceWorker || (_ServiceWorker = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_business_common_components_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["default"], {})), _Routes || (_Routes = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Routes, {
      children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
        element: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
        children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
          path: "/",
          element: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_business_splash__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        })
      })
    }))]
  });
};
_s(App, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme];
});
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
__webpack_require__.$Refresh$.register(_c, "App");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/layout/index.js"
/*!*********************************!*\
  !*** ./src/app/layout/index.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ui_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ui/globalStyles */ "./src/app/common/ui/globalStyles.js");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _Outlet,
  _s = __webpack_require__.$Refresh$.signature();




function Layout() {
  _s();
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.Global, {
      styles: (0,_common_ui_globalStyles__WEBPACK_IMPORTED_MODULE_2__["default"])(theme)
    }), _Outlet || (_Outlet = (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet, {}))]
  });
}
_s(Layout, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme];
});
_c = Layout;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
var _c;
__webpack_require__.$Refresh$.register(_c, "Layout");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/reducers/general.js"
/*!*************************************!*\
  !*** ./src/app/reducers/general.js ***!
  \*************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   intro: () => (/* binding */ intro)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const generalReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generalReducer);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/app/style.js"
/*!**************************!*\
  !*** ./src/app/style.js ***!
  \**************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  container:  false ? 0 : {
    name: "cpv84f-container",
    styles: "height:100%;label:container;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2d1aWxsYXVtZS9Qcm9qZWN0cy9ndWlsbGF1bWVjaXNjby9zcmMvYXBwL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQiIsImZpbGUiOiIvaG9tZS9ndWlsbGF1bWUvUHJvamVjdHMvZ3VpbGxhdW1lY2lzY28vc3JjL2FwcC9zdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3NzfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGBcbn1cbiJdfQ== */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  }
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/client/main-node.js"
/*!*********************************!*\
  !*** ./src/client/main-node.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

/* global __webpack_require__ */
var Refresh = __webpack_require__(/*! react-refresh/runtime */ "react-refresh/runtime");

/**
 * Extracts exports from a webpack module object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {*} An exports object from the module.
 */
function getModuleExports(moduleId) {
  if (typeof moduleId === 'undefined') {
    // `moduleId` is unavailable, which indicates that this module is not in the cache,
    // which means we won't be able to capture any exports,
    // and thus they cannot be refreshed safely.
    // These are likely runtime or dynamically generated modules.
    return {};
  }
  var maybeModule = __webpack_require__.c[moduleId];
  if (typeof maybeModule === 'undefined') {
    // `moduleId` is available but the module in cache is unavailable,
    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).
    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.
    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');
    return {};
  }
  var exportsOrPromise = maybeModule.exports;
  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {
    return exportsOrPromise.then(function (exports) {
      return exports;
    });
  }
  return exportsOrPromise;
}

/**
 * Calculates the signature of a React refresh boundary.
 * If this signature changes, it's unsafe to accept the boundary.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {string[]} A React refresh boundary signature array.
 */
function getReactRefreshBoundarySignature(moduleExports) {
  var signature = [];
  signature.push(Refresh.getFamilyByType(moduleExports));
  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return signature;
  }
  for (var key in moduleExports) {
    if (key === '__esModule') {
      continue;
    }
    signature.push(key);
    signature.push(Refresh.getFamilyByType(moduleExports[key]));
  }
  return signature;
}

/**
 * Creates a data object to be retained across refreshes.
 * This object should not transtively reference previous exports,
 * which can form infinite chain of objects across refreshes, which can pressure RAM.
 *
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {*} A React refresh boundary signature array.
 */
function getWebpackHotData(moduleExports) {
  return {
    signature: getReactRefreshBoundarySignature(moduleExports),
    isReactRefreshBoundary: isReactRefreshBoundary(moduleExports)
  };
}

/**
 * Creates a helper that performs a delayed React refresh.
 * @returns {function(function(): void): void} A debounced React refresh function.
 */
function createDebounceUpdate() {
  /**
   * A cached setTimeout handler.
   * @type {number | undefined}
   */
  var refreshTimeout;

  /**
   * Performs react refresh on a delay and clears the error overlay.
   * @param {function(): void} callback
   * @returns {void}
   */
  function enqueueUpdate(callback) {
    if (typeof refreshTimeout === 'undefined') {
      refreshTimeout = setTimeout(function () {
        refreshTimeout = undefined;
        Refresh.performReactRefresh();
        callback();
      }, 30);
    }
  }
  return enqueueUpdate;
}

/**
 * Checks if all exports are likely a React component.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {boolean} Whether the exports are React component like.
 */
function isReactRefreshBoundary(moduleExports) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    return true;
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }
  var hasExports = false;
  var areAllExportsComponents = true;
  for (var key in moduleExports) {
    hasExports = true;

    // This is the ES Module indicator flag
    if (key === '__esModule') {
      continue;
    }

    // We can (and have to) safely execute getters here,
    // as Webpack manually assigns harmony exports to getters,
    // without any side-effects attached.
    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281
    var exportValue = moduleExports[key];
    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }
  return hasExports && areAllExportsComponents;
}

/**
 * Checks if exports are likely a React component and registers them.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).
 * @param {*} moduleExports A Webpack module exports object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {void}
 */
function registerExportsForReactRefresh(moduleExports, moduleId) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    // Register module.exports if it is likely a component
    Refresh.register(moduleExports, moduleId + ' %exports%');
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over the exports.
    return;
  }
  for (var key in moduleExports) {
    // Skip registering the ES Module indicator
    if (key === '__esModule') {
      continue;
    }
    var exportValue = moduleExports[key];
    if (Refresh.isLikelyComponentType(exportValue)) {
      var typeID = moduleId + ' %exports% ' + key;
      Refresh.register(exportValue, typeID);
    }
  }
}

/**
 * Compares previous and next module objects to check for mutated boundaries.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).
 * @param {*} prevSignature The signature of the current Webpack module exports object.
 * @param {*} nextSignature The signature of the next Webpack module exports object.
 * @returns {boolean} Whether the React refresh boundary should be invalidated.
 */
function shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {
  if (prevSignature.length !== nextSignature.length) {
    return true;
  }
  for (var i = 0; i < nextSignature.length; i += 1) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }
  return false;
}
var enqueueUpdate = createDebounceUpdate();
function executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {
  registerExportsForReactRefresh(moduleExports, moduleId);
  if (webpackHot) {
    var isHotUpdate = !!webpackHot.data;
    var prevData;
    if (isHotUpdate) {
      prevData = webpackHot.data.prevData;
    }
    if (isReactRefreshBoundary(moduleExports)) {
      webpackHot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevData = getWebpackHotData(moduleExports);
      });
      webpackHot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {
          refreshOverlay.handleRuntimeError(error);
        }
        if (typeof isTest !== 'undefined' && isTest) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }
        __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);
      });
      if (isHotUpdate) {
        if (prevData && prevData.isReactRefreshBoundary && shouldInvalidateReactRefreshBoundary(prevData.signature, getReactRefreshBoundarySignature(moduleExports))) {
          webpackHot.invalidate();
        } else {
          enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {
              refreshOverlay.clearRuntimeErrors();
            }
          });
        }
      }
    } else {
      if (isHotUpdate && typeof prevData !== 'undefined') {
        webpackHot.invalidate();
      }
    }
  }
}
module.exports = Object.freeze({
  enqueueUpdate: enqueueUpdate,
  executeRuntime: executeRuntime,
  getModuleExports: getModuleExports,
  isReactRefreshBoundary: isReactRefreshBoundary,
  registerExportsForReactRefresh: registerExportsForReactRefresh
});

/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js"
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = /** @type {HTMLScriptElement} */document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest(/** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ },

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
(module) {

"use strict";


/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ },

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



 true && function () {
  function computeFullKey(signature) {
    if (null !== signature.fullKey) return signature.fullKey;
    var fullKey = signature.ownKey;
    try {
      var hooks = signature.getCustomHooks();
    } catch (err) {
      return signature.forceReset = !0, signature.fullKey = fullKey;
    }
    for (var i = 0; i < hooks.length; i++) {
      var hook = hooks[i];
      if ("function" !== typeof hook) return signature.forceReset = !0, signature.fullKey = fullKey;
      hook = allSignaturesByType.get(hook);
      if (void 0 !== hook) {
        var nestedHookKey = computeFullKey(hook);
        hook.forceReset && (signature.forceReset = !0);
        fullKey += "\n---\n" + nestedHookKey;
      }
    }
    return signature.fullKey = fullKey;
  }
  function resolveFamily(type) {
    return updatedFamiliesByType.get(type);
  }
  function cloneMap(map) {
    var clone = new Map();
    map.forEach(function (value, key) {
      clone.set(key, value);
    });
    return clone;
  }
  function cloneSet(set) {
    var clone = new Set();
    set.forEach(function (value) {
      clone.add(value);
    });
    return clone;
  }
  function getProperty(object, property) {
    try {
      return object[property];
    } catch (err) {}
  }
  function register(type, id) {
    if (!(null === type || "function" !== typeof type && "object" !== typeof type || allFamiliesByType.has(type))) {
      var family = allFamiliesByID.get(id);
      void 0 === family ? (family = {
        current: type
      }, allFamiliesByID.set(id, family)) : pendingUpdates.push([family, type]);
      allFamiliesByType.set(type, family);
      if ("object" === typeof type && null !== type) switch (getProperty(type, "$$typeof")) {
        case REACT_FORWARD_REF_TYPE:
          register(type.render, id + "$render");
          break;
        case REACT_MEMO_TYPE:
          register(type.type, id + "$type");
      }
    }
  }
  function setSignature(type, key) {
    var forceReset = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
      getCustomHooks = 3 < arguments.length ? arguments[3] : void 0;
    allSignaturesByType.has(type) || allSignaturesByType.set(type, {
      forceReset: forceReset,
      ownKey: key,
      fullKey: null,
      getCustomHooks: getCustomHooks || function () {
        return [];
      }
    });
    if ("object" === typeof type && null !== type) switch (getProperty(type, "$$typeof")) {
      case REACT_FORWARD_REF_TYPE:
        setSignature(type.render, key, forceReset, getCustomHooks);
        break;
      case REACT_MEMO_TYPE:
        setSignature(type.type, key, forceReset, getCustomHooks);
    }
  }
  function collectCustomHooksForSignature(type) {
    type = allSignaturesByType.get(type);
    void 0 !== type && computeFullKey(type);
  }
  var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
    REACT_MEMO_TYPE = Symbol.for("react.memo"),
    PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
    allFamiliesByID = new Map(),
    allFamiliesByType = new PossiblyWeakMap(),
    allSignaturesByType = new PossiblyWeakMap(),
    updatedFamiliesByType = new PossiblyWeakMap(),
    pendingUpdates = [],
    helpersByRendererID = new Map(),
    helpersByRoot = new Map(),
    mountedRoots = new Set(),
    failedRoots = new Set(),
    rootElements = "function" === typeof WeakMap ? new WeakMap() : null,
    isPerformingRefresh = !1;
  exports._getMountedRootCount = function () {
    return mountedRoots.size;
  };
  exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
  exports.createSignatureFunctionForTransform = function () {
    var savedType,
      hasCustomHooks,
      didCollectHooks = !1;
    return function (type, key, forceReset, getCustomHooks) {
      if ("string" === typeof key) return savedType || (savedType = type, hasCustomHooks = "function" === typeof getCustomHooks), null == type || "function" !== typeof type && "object" !== typeof type || setSignature(type, key, forceReset, getCustomHooks), type;
      !didCollectHooks && hasCustomHooks && (didCollectHooks = !0, collectCustomHooksForSignature(savedType));
    };
  };
  exports.getFamilyByID = function (id) {
    return allFamiliesByID.get(id);
  };
  exports.getFamilyByType = function (type) {
    return allFamiliesByType.get(type);
  };
  exports.hasUnrecoverableErrors = function () {
    return !1;
  };
  exports.injectIntoGlobalHook = function (globalObject) {
    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (void 0 === hook) {
      var nextID = 0;
      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
        renderers: new Map(),
        supportsFiber: !0,
        inject: function () {
          return nextID++;
        },
        onScheduleFiberRoot: function () {},
        onCommitFiberRoot: function () {},
        onCommitFiberUnmount: function () {}
      };
    }
    if (hook.isDisabled) console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");else {
      var oldInject = hook.inject;
      hook.inject = function (injected) {
        var id = oldInject.apply(this, arguments);
        "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
        return id;
      };
      hook.renderers.forEach(function (injected, id) {
        "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
      });
      var oldOnCommitFiberRoot = hook.onCommitFiberRoot,
        oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};
      hook.onScheduleFiberRoot = function (id, root, children) {
        isPerformingRefresh || (failedRoots.delete(root), null !== rootElements && rootElements.set(root, children));
        return oldOnScheduleFiberRoot.apply(this, arguments);
      };
      hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
        var helpers = helpersByRendererID.get(id);
        if (void 0 !== helpers) {
          helpersByRoot.set(root, helpers);
          helpers = root.current;
          var alternate = helpers.alternate;
          null !== alternate ? (alternate = null != alternate.memoizedState && null != alternate.memoizedState.element && mountedRoots.has(root), helpers = null != helpers.memoizedState && null != helpers.memoizedState.element, !alternate && helpers ? (mountedRoots.add(root), failedRoots.delete(root)) : alternate && helpers || (alternate && !helpers ? (mountedRoots.delete(root), didError ? failedRoots.add(root) : helpersByRoot.delete(root)) : alternate || helpers || didError && failedRoots.add(root))) : mountedRoots.add(root);
        }
        return oldOnCommitFiberRoot.apply(this, arguments);
      };
    }
  };
  exports.isLikelyComponentType = function (type) {
    switch (typeof type) {
      case "function":
        if (null != type.prototype) {
          if (type.prototype.isReactComponent) return !0;
          var ownNames = Object.getOwnPropertyNames(type.prototype);
          if (1 < ownNames.length || "constructor" !== ownNames[0] || type.prototype.__proto__ !== Object.prototype) return !1;
        }
        type = type.name || type.displayName;
        return "string" === typeof type && /^[A-Z]/.test(type);
      case "object":
        if (null != type) switch (getProperty(type, "$$typeof")) {
          case REACT_FORWARD_REF_TYPE:
          case REACT_MEMO_TYPE:
            return !0;
        }
        return !1;
      default:
        return !1;
    }
  };
  exports.performReactRefresh = function () {
    if (0 === pendingUpdates.length || isPerformingRefresh) return null;
    isPerformingRefresh = !0;
    try {
      var staleFamilies = new Set(),
        updatedFamilies = new Set(),
        updates = pendingUpdates;
      pendingUpdates = [];
      updates.forEach(function (_ref) {
        var family = _ref[0];
        _ref = _ref[1];
        var prevType = family.current;
        updatedFamiliesByType.set(prevType, family);
        updatedFamiliesByType.set(_ref, family);
        family.current = _ref;
        prevType.prototype && prevType.prototype.isReactComponent || _ref.prototype && _ref.prototype.isReactComponent ? _ref = !1 : (prevType = allSignaturesByType.get(prevType), _ref = allSignaturesByType.get(_ref), _ref = void 0 === prevType && void 0 === _ref || void 0 !== prevType && void 0 !== _ref && computeFullKey(prevType) === computeFullKey(_ref) && !_ref.forceReset ? !0 : !1);
        _ref ? updatedFamilies.add(family) : staleFamilies.add(family);
      });
      var update = {
        updatedFamilies: updatedFamilies,
        staleFamilies: staleFamilies
      };
      helpersByRendererID.forEach(function (helpers) {
        helpers.setRefreshHandler(resolveFamily);
      });
      var didError = !1,
        firstError = null,
        failedRootsSnapshot = cloneSet(failedRoots),
        mountedRootsSnapshot = cloneSet(mountedRoots),
        helpersByRootSnapshot = cloneMap(helpersByRoot);
      failedRootsSnapshot.forEach(function (root) {
        var helpers = helpersByRootSnapshot.get(root);
        if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
        failedRoots.has(root);
        if (null !== rootElements && rootElements.has(root)) {
          var element = rootElements.get(root);
          try {
            helpers.scheduleRoot(root, element);
          } catch (err) {
            didError || (didError = !0, firstError = err);
          }
        }
      });
      mountedRootsSnapshot.forEach(function (root) {
        var helpers = helpersByRootSnapshot.get(root);
        if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
        mountedRoots.has(root);
        try {
          helpers.scheduleRefresh(root, update);
        } catch (err) {
          didError || (didError = !0, firstError = err);
        }
      });
      if (didError) throw firstError;
      return update;
    } finally {
      isPerformingRefresh = !1;
    }
  };
  exports.register = register;
  exports.setSignature = setSignature;
}();

/***/ },

/***/ "./node_modules/react-refresh/runtime.js"
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) // removed by dead control flow
{} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}

/***/ },

/***/ "./node_modules/react-perfect-scrollbar/dist/css/styles.css"
/*!******************************************************************!*\
  !*** ./node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \******************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1772725831685
      var cssReload = __webpack_require__(/*! ../../../mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-black-webfont.woff"
/*!******************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-black-webfont.woff ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-black-webfont.d6dcd8c52d83c2eb36ba.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-black-webfont.woff2"
/*!*******************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-black-webfont.woff2 ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-black-webfont.70e186e41689f69e0f22.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-bold-webfont.woff"
/*!*****************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-bold-webfont.woff ***!
  \*****************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-bold-webfont.73da2bd2f03f1251dd58.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-bold-webfont.woff2"
/*!******************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-bold-webfont.woff2 ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-bold-webfont.4a31a6afd806239d959b.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-extrabold-webfont.woff"
/*!**********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-extrabold-webfont.woff ***!
  \**********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-extrabold-webfont.7ac49610567585fcc570.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-extrabold-webfont.woff2"
/*!***********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-extrabold-webfont.woff2 ***!
  \***********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-extrabold-webfont.87c36d3f55e42d3d4454.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-extralight-webfont.woff"
/*!***********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-extralight-webfont.woff ***!
  \***********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-extralight-webfont.7ec3dacbfcad83a733b7.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-extralight-webfont.woff2"
/*!************************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-extralight-webfont.woff2 ***!
  \************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-extralight-webfont.07bf2782ec178721bdba.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-light-webfont.woff"
/*!******************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-light-webfont.woff ***!
  \******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-light-webfont.5db290c7b5037e8ecfe3.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-light-webfont.woff2"
/*!*******************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-light-webfont.woff2 ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-light-webfont.78fcc804b33e35205520.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-medium-webfont.woff"
/*!*******************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-medium-webfont.woff ***!
  \*******************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-medium-webfont.1ccccd47ee16e380162e.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-medium-webfont.woff2"
/*!********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-medium-webfont.woff2 ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-medium-webfont.389f18608076ef38bd41.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-regular-webfont.woff"
/*!********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-regular-webfont.woff ***!
  \********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-regular-webfont.e1bc5f0d377163074109.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-regular-webfont.woff2"
/*!*********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-regular-webfont.woff2 ***!
  \*********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-regular-webfont.b40017e18fca443c2c35.woff2";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-semibold-webfont.woff"
/*!*********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-semibold-webfont.woff ***!
  \*********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-semibold-webfont.8d871c30dd8e25c7426c.woff";

/***/ },

/***/ "./src/app/common/ui/fonts/nunito/nunito-semibold-webfont.woff2"
/*!**********************************************************************!*\
  !*** ./src/app/common/ui/fonts/nunito/nunito-semibold-webfont.woff2 ***!
  \**********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/nunito-semibold-webfont.cd7c5240fb038a58bcbb.woff2";

/***/ },

/***/ "./src/app/business/splash/supernova/planet/blue.png"
/*!***********************************************************!*\
  !*** ./src/app/business/splash/supernova/planet/blue.png ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/blue.e4cc071ef12b6c691330.png";

/***/ },

/***/ "./src/app/business/splash/supernova/planet/mars.png"
/*!***********************************************************!*\
  !*** ./src/app/business/splash/supernova/planet/mars.png ***!
  \***********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/mars.3093ad9dcd0e3bcd1b81.png";

/***/ },

/***/ "./src/app/business/splash/supernova/planet/white.png"
/*!************************************************************!*\
  !*** ./src/app/business/splash/supernova/planet/white.png ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "static/media/white.7d2dbed84f10888f09f2.png";

/***/ },

/***/ "@emotion/react"
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
(module) {

"use strict";
module.exports = require("@emotion/react");

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!*********************************************!*\
  !*** external "@emotion/react/jsx-runtime" ***!
  \*********************************************/
(module) {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ },

/***/ "@reduxjs/toolkit"
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ },

/***/ "anser"
/*!************************!*\
  !*** external "anser" ***!
  \************************/
(module) {

"use strict";
module.exports = require("anser");

/***/ },

/***/ "core-js-pure/features/global-this"
/*!****************************************************!*\
  !*** external "core-js-pure/features/global-this" ***!
  \****************************************************/
(module) {

"use strict";
module.exports = require("core-js-pure/features/global-this");

/***/ },

/***/ "d3-interpolate"
/*!*********************************!*\
  !*** external "d3-interpolate" ***!
  \*********************************/
(module) {

"use strict";
module.exports = require("d3-interpolate");

/***/ },

/***/ "d3-selection"
/*!*******************************!*\
  !*** external "d3-selection" ***!
  \*******************************/
(module) {

"use strict";
module.exports = require("d3-selection");

/***/ },

/***/ "d3-timer"
/*!***************************!*\
  !*** external "d3-timer" ***!
  \***************************/
(module) {

"use strict";
module.exports = require("d3-timer");

/***/ },

/***/ "d3-transition"
/*!********************************!*\
  !*** external "d3-transition" ***!
  \********************************/
(module) {

"use strict";
module.exports = require("d3-transition");

/***/ },

/***/ "error-stack-parser"
/*!*************************************!*\
  !*** external "error-stack-parser" ***!
  \*************************************/
(module) {

"use strict";
module.exports = require("error-stack-parser");

/***/ },

/***/ "html-entities"
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
(module) {

"use strict";
module.exports = require("html-entities");

/***/ },

/***/ "lodash-es/random"
/*!***********************************!*\
  !*** external "lodash-es/random" ***!
  \***********************************/
(module) {

"use strict";
module.exports = require("lodash-es/random");

/***/ },

/***/ "lodash-es/range"
/*!**********************************!*\
  !*** external "lodash-es/range" ***!
  \**********************************/
(module) {

"use strict";
module.exports = require("lodash-es/range");

/***/ },

/***/ "perfect-scrollbar"
/*!************************************!*\
  !*** external "perfect-scrollbar" ***!
  \************************************/
(module) {

"use strict";
module.exports = require("perfect-scrollbar");

/***/ },

/***/ "prop-types"
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
(module) {

"use strict";
module.exports = require("prop-types");

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

"use strict";
module.exports = require("react");

/***/ },

/***/ "react-redux"
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
(module) {

"use strict";
module.exports = require("react-redux");

/***/ },

/***/ "react-refresh/runtime"
/*!****************************************!*\
  !*** external "react-refresh/runtime" ***!
  \****************************************/
(module) {

"use strict";
module.exports = require("react-refresh/runtime");

/***/ },

/***/ "react-router"
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
(module) {

"use strict";
module.exports = require("react-router");

/***/ },

/***/ "react-typical"
/*!********************************!*\
  !*** external "react-typical" ***!
  \********************************/
(module) {

"use strict";
module.exports = require("react-typical");

/***/ },

/***/ "@loadable/component"
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
(module) {

"use strict";
module.exports = require("@loadable/component");

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js"
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
/* provided dependency */ var __react_refresh_socket__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js");
/* global __react_refresh_error_overlay__, __react_refresh_socket__ */

if (true) {
  const events = __webpack_require__(/*! ./utils/errorEventHandlers.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js");
  const formatWebpackErrors = __webpack_require__(/*! ./utils/formatWebpackErrors.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js");
  const runWithRetry = __webpack_require__(/*! ./utils/retry.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/retry.js");

  // Setup error states
  let isHotReload = false;
  let hasRuntimeErrors = false;

  /**
   * Try dismissing the compile error overlay.
   * This will also reset runtime error records (if any),
   * because we have new source to evaluate.
   * @returns {void}
   */
  const tryDismissErrorOverlay = function () {
    __react_refresh_error_overlay__.clearCompileError();
    __react_refresh_error_overlay__.clearRuntimeErrors(!hasRuntimeErrors);
    hasRuntimeErrors = false;
  };

  /**
   * A function called after a compile success signal is received from Webpack.
   * @returns {void}
   */
  const handleCompileSuccess = function () {
    isHotReload = true;
    if (isHotReload) {
      tryDismissErrorOverlay();
    }
  };

  /**
   * A function called after a compile errored signal is received from Webpack.
   * @param {string[]} errors
   * @returns {void}
   */
  const handleCompileErrors = function (errors) {
    isHotReload = true;
    const formattedErrors = formatWebpackErrors(errors);

    // Only show the first error
    __react_refresh_error_overlay__.showCompileError(formattedErrors[0]);
  };

  /**
   * Handles compilation messages from Webpack.
   * Integrates with a compile error overlay.
   * @param {*} message A Webpack HMR message sent via WebSockets.
   * @returns {void}
   */
  const compileMessageHandler = function (message) {
    switch (message.type) {
      case 'ok':
      case 'still-ok':
      case 'warnings':
        {
          // TODO: Implement handling for warnings
          handleCompileSuccess();
          break;
        }
      case 'errors':
        {
          handleCompileErrors(message.data);
          break;
        }
      default:
        {
          // Do nothing.
        }
    }
  };

  // Only register if no other overlay have been registered
  if (typeof window !== 'undefined' && !window.__reactRefreshOverlayInjected && __react_refresh_socket__) {
    // Registers handlers for compile errors with retry -
    // This is to prevent mismatching injection order causing errors to be thrown
    runWithRetry(function initSocket() {
      __react_refresh_socket__.init(compileMessageHandler);
    }, 3, 'Failed to set up the socket connection.');
    // Registers handlers for runtime errors
    events.handleError(function handleError(error) {
      hasRuntimeErrors = true;
      __react_refresh_error_overlay__.handleRuntimeError(error);
    });
    events.handleUnhandledRejection(function handleUnhandledPromiseRejection(error) {
      hasRuntimeErrors = true;
      __react_refresh_error_overlay__.handleRuntimeError(error);
    });

    // Mark overlay as injected to prevent double-injection
    window.__reactRefreshOverlayInjected = true;
  }
}

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* global __react_refresh_library__ */

if (true) {
  const safeThis = __webpack_require__(/*! core-js-pure/features/global-this */ "core-js-pure/features/global-this");
  const RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ "react-refresh/runtime");
  if (typeof safeThis !== 'undefined') {
    var $RefreshInjected$ = '__reactRefreshInjected';
    // Namespace the injected flag (if necessary) for monorepo compatibility
    if (false) // removed by dead control flow
{}

    // Only inject the runtime if it hasn't been injected
    if (!safeThis[$RefreshInjected$]) {
      // Inject refresh runtime into global scope
      RefreshRuntime.injectIntoGlobalHook(safeThis);

      // Mark the runtime as injected to prevent double-injection
      safeThis[$RefreshInjected$] = true;
    }
  }
}

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js"
/*!**********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/errorEventHandlers.js ***!
  \**********************************************************************************************/
(module) {

/**
 * @callback EventCallback
 * @param {string | Error | null} context
 * @returns {void}
 */
/**
 * @callback EventHandler
 * @param {Event} event
 * @returns {void}
 */

/**
 * A function that creates an event handler for the `error` event.
 * @param {EventCallback} callback A function called to handle the error context.
 * @returns {EventHandler} A handler for the `error` event.
 */
function createErrorHandler(callback) {
  return function errorHandler(event) {
    if (!event || !event.error) {
      return callback(null);
    }
    if (event.error instanceof Error) {
      return callback(event.error);
    }
    // A non-error was thrown, we don't have a trace. :(
    // Look in your browser's devtools for more information
    return callback(new Error(event.error));
  };
}

/**
 * A function that creates an event handler for the `unhandledrejection` event.
 * @param {EventCallback} callback A function called to handle the error context.
 * @returns {EventHandler} A handler for the `unhandledrejection` event.
 */
function createRejectionHandler(callback) {
  return function rejectionHandler(event) {
    if (!event || !event.reason) {
      return callback(new Error('Unknown'));
    }
    if (event.reason instanceof Error) {
      return callback(event.reason);
    }
    // A non-error was rejected, we don't have a trace :(
    // Look in your browser's devtools for more information
    return callback(new Error(event.reason));
  };
}

/**
 * Creates a handler that registers an EventListener on window for a valid type
 * and calls a callback when the event fires.
 * @param {string} eventType A valid DOM event type.
 * @param {function(EventCallback): EventHandler} createHandler A function that creates an event handler.
 * @returns {register} A function that registers the EventListener given a callback.
 */
function createWindowEventHandler(eventType, createHandler) {
  /**
   * @type {EventHandler | null} A cached event handler function.
   */
  let eventHandler = null;

  /**
   * Unregisters an EventListener if it has been registered.
   * @returns {void}
   */
  function unregister() {
    if (eventHandler === null) {
      return;
    }
    window.removeEventListener(eventType, eventHandler);
    eventHandler = null;
  }

  /**
   * Registers an EventListener if it hasn't been registered.
   * @param {EventCallback} callback A function called after the event handler to handle its context.
   * @returns {unregister | void} A function to unregister the registered EventListener if registration is performed.
   */
  function register(callback) {
    if (eventHandler !== null) {
      return;
    }
    eventHandler = createHandler(callback);
    window.addEventListener(eventType, eventHandler);
    return unregister;
  }
  return register;
}
const handleError = createWindowEventHandler('error', createErrorHandler);
const handleUnhandledRejection = createWindowEventHandler('unhandledrejection', createRejectionHandler);
module.exports = {
  handleError: handleError,
  handleUnhandledRejection: handleUnhandledRejection
};

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js"
/*!***********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/formatWebpackErrors.js ***!
  \***********************************************************************************************/
(module) {

/**
 * @typedef {Object} WebpackErrorObj
 * @property {string} moduleIdentifier
 * @property {string} moduleName
 * @property {string} message
 */

const friendlySyntaxErrorLabel = 'Syntax error:';

/**
 * Checks if the error message is for a syntax error.
 * @param {string} message The raw Webpack error message.
 * @returns {boolean} Whether the error message is for a syntax error.
 */
function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
}

/**
 * Cleans up Webpack error messages.
 *
 * This implementation is based on the one from [create-react-app](https://github.com/facebook/create-react-app/blob/edc671eeea6b7d26ac3f1eb2050e50f75cf9ad5d/packages/react-dev-utils/formatWebpackMessages.js).
 * @param {string} message The raw Webpack error message.
 * @returns {string} The formatted Webpack error message.
 */
function formatMessage(message) {
  let lines = message.split('\n');

  // Strip Webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
  lines = lines.filter(function (line) {
    return !/Module [A-z ]+\(from/.test(line);
  });

  // Remove leading newline
  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  }

  // Remove duplicated newlines
  lines = lines.filter(function (line, index, arr) {
    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
  });

  // Clean up the file name
  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1');

  // Cleans up verbose "module not found" messages for files and packages.
  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {
    lines = [lines[0], lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:')];
  }
  message = lines.join('\n');

  // Clean up syntax errors
  message = message.replace('SyntaxError:', friendlySyntaxErrorLabel);

  // Internal stacks are generally useless, so we strip them -
  // except the stacks containing `webpack:`,
  // because they're normally from user code generated by webpack.
  message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, ''); // at ... ...:x:y
  message = message.replace(/^\s*at\s((?!webpack:).)*<anonymous>[\s)]*(\n|$)/gm, ''); // at ... <anonymous>
  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>

  return message.trim();
}

/**
 * Formats Webpack error messages into a more readable format.
 * @param {Array<string | WebpackErrorObj>} errors An array of Webpack error messages.
 * @returns {string[]} The formatted Webpack error messages.
 */
function formatWebpackErrors(errors) {
  let formattedErrors = errors.map(function (errorObjOrMessage) {
    // Webpack 5 compilation errors are in the form of descriptor objects,
    // so we have to join pieces to get the format we want.
    if (typeof errorObjOrMessage === 'object') {
      return formatMessage([errorObjOrMessage.moduleName, errorObjOrMessage.message].join('\n'));
    }
    // Webpack 4 compilation errors are strings
    return formatMessage(errorObjOrMessage);
  });
  if (formattedErrors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    formattedErrors = formattedErrors.filter(isLikelyASyntaxError);
  }
  return formattedErrors;
}
module.exports = formatWebpackErrors;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/retry.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/utils/retry.js ***!
  \*********************************************************************************/
(module) {

function runWithRetry(callback, maxRetries, message) {
  function executeWithRetryAndTimeout(currentCount) {
    try {
      if (currentCount > maxRetries - 1) {
        console.warn('[React Refresh]', message);
        return;
      }
      callback();
    } catch (err) {
      setTimeout(function () {
        executeWithRetryAndTimeout(currentCount + 1);
      }, Math.pow(10, currentCount));
    }
  }
  executeWithRetryAndTimeout(0);
}
module.exports = runWithRetry;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js ***!
  \***************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const Anser = __webpack_require__(/*! anser */ "anser");
const entities = __webpack_require__(/*! html-entities */ "html-entities");
const utils = __webpack_require__(/*! ../utils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils.js");

/**
 * @typedef {Object} CompileErrorTraceProps
 * @property {string} errorMessage
 */

/**
 * A formatter that turns Webpack compile error messages into highlighted HTML source traces.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {CompileErrorTraceProps} props
 * @returns {void}
 */
function CompileErrorTrace(document, root, props) {
  const errorParts = props.errorMessage.split('\n');
  if (errorParts.length) {
    if (errorParts[0]) {
      errorParts[0] = utils.formatFilename(errorParts[0]);
    }
    const errorMessage = errorParts.splice(1, 1)[0];
    if (errorMessage) {
      // Strip filename from the error message
      errorParts.unshift(errorMessage.replace(/^(.*:)\s.*:(\s.*)$/, '$1$2'));
    }
  }
  const stackContainer = document.createElement('pre');
  stackContainer.style.fontFamily = ['"SFMono-Regular"', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'].join(', ');
  stackContainer.style.margin = '0';
  stackContainer.style.whiteSpace = 'pre-wrap';
  const entries = Anser.ansiToJson(entities.encode(errorParts.join('\n'), {
    level: 'html5',
    mode: 'nonAscii'
  }), {
    json: true,
    remove_empty: true,
    use_classes: true
  });
  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];
    const elem = document.createElement('span');
    elem.innerHTML = entry.content;
    elem.style.color = entry.fg ? `var(--color-${entry.fg})` : undefined;
    elem.style.wordBreak = 'break-word';
    switch (entry.decoration) {
      case 'bold':
        elem.style.fontWeight = 800;
        break;
      case 'italic':
        elem.style.fontStyle = 'italic';
        break;
    }
    stackContainer.appendChild(elem);
  }
  root.appendChild(stackContainer);
}
module.exports = CompileErrorTrace;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js"
/*!********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js ***!
  \********************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const Spacer = __webpack_require__(/*! ./Spacer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js");
const theme = __webpack_require__(/*! ../theme.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js");

/**
 * @typedef {Object} PageHeaderProps
 * @property {string} [message]
 * @property {string} title
 * @property {string} [topOffset]
 */

/**
 * The header of the overlay.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {PageHeaderProps} props
 * @returns {void}
 */
function PageHeader(document, root, props) {
  const pageHeaderContainer = document.createElement('div');
  pageHeaderContainer.style.background = theme['dark-background'];
  pageHeaderContainer.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.3)';
  pageHeaderContainer.style.color = theme.white;
  pageHeaderContainer.style.left = '0';
  pageHeaderContainer.style.right = '0';
  pageHeaderContainer.style.padding = '1rem 1.5rem';
  pageHeaderContainer.style.paddingLeft = 'max(1.5rem, env(safe-area-inset-left))';
  pageHeaderContainer.style.paddingRight = 'max(1.5rem, env(safe-area-inset-right))';
  pageHeaderContainer.style.position = 'fixed';
  pageHeaderContainer.style.top = props.topOffset || '0';
  const title = document.createElement('h3');
  title.innerText = props.title;
  title.style.color = theme.red;
  title.style.fontSize = '1.125rem';
  title.style.lineHeight = '1.3';
  title.style.margin = '0';
  pageHeaderContainer.appendChild(title);
  if (props.message) {
    title.style.margin = '0 0 0.5rem';
    const message = document.createElement('span');
    message.innerText = props.message;
    message.style.color = theme.white;
    message.style.wordBreak = 'break-word';
    pageHeaderContainer.appendChild(message);
  }
  root.appendChild(pageHeaderContainer);

  // This has to run after appending elements to root
  // because we need to actual mounted height.
  Spacer(document, root, {
    space: pageHeaderContainer.offsetHeight.toString(10)
  });
}
module.exports = PageHeader;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js ***!
  \****************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const Spacer = __webpack_require__(/*! ./Spacer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js");
const theme = __webpack_require__(/*! ../theme.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js");

/**
 * @typedef {Object} RuntimeErrorFooterProps
 * @property {string} [initialFocus]
 * @property {boolean} multiple
 * @property {function(MouseEvent): void} onClickCloseButton
 * @property {function(MouseEvent): void} onClickNextButton
 * @property {function(MouseEvent): void} onClickPrevButton
 */

/**
 * A fixed footer that handles pagination of runtime errors.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {RuntimeErrorFooterProps} props
 * @returns {void}
 */
function RuntimeErrorFooter(document, root, props) {
  const footer = document.createElement('div');
  footer.style.backgroundColor = theme['dark-background'];
  footer.style.bottom = '0';
  footer.style.boxShadow = '0 -1px 4px rgba(0, 0, 0, 0.3)';
  footer.style.height = '2.5rem';
  footer.style.left = '0';
  footer.style.right = '0';
  footer.style.lineHeight = '2.5rem';
  footer.style.paddingBottom = '0';
  footer.style.paddingBottom = 'env(safe-area-inset-bottom)';
  footer.style.position = 'fixed';
  footer.style.textAlign = 'center';
  footer.style.zIndex = '2';
  const BUTTON_CONFIGS = {
    prev: {
      id: 'prev',
      label: '◀&ensp;Prev',
      onClick: props.onClickPrevButton
    },
    close: {
      id: 'close',
      label: '×&ensp;Close',
      onClick: props.onClickCloseButton
    },
    next: {
      id: 'next',
      label: 'Next&ensp;▶',
      onClick: props.onClickNextButton
    }
  };
  let buttons = [BUTTON_CONFIGS.close];
  if (props.multiple) {
    buttons = [BUTTON_CONFIGS.prev, BUTTON_CONFIGS.close, BUTTON_CONFIGS.next];
  }

  /** @type {HTMLButtonElement | undefined} */
  let initialFocusButton;
  for (let i = 0; i < buttons.length; i += 1) {
    const buttonConfig = buttons[i];
    const button = document.createElement('button');
    button.id = buttonConfig.id;
    button.innerHTML = buttonConfig.label;
    button.tabIndex = 1;
    button.style.backgroundColor = theme['dark-background'];
    button.style.border = 'none';
    button.style.color = theme.white;
    button.style.cursor = 'pointer';
    button.style.fontSize = 'inherit';
    button.style.height = '100%';
    button.style.padding = '0.5rem 0.75rem';
    button.style.width = `${(100 / buttons.length).toString(10)}%`;
    button.addEventListener('click', buttonConfig.onClick);
    if (buttonConfig.id === props.initialFocus) {
      initialFocusButton = button;
    }
    footer.appendChild(button);
  }
  root.appendChild(footer);
  Spacer(document, root, {
    space: '2.5rem'
  });
  if (initialFocusButton) {
    initialFocusButton.focus();
  }
}
module.exports = RuntimeErrorFooter;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js"
/*!****************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js ***!
  \****************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const Spacer = __webpack_require__(/*! ./Spacer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js");
const theme = __webpack_require__(/*! ../theme.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js");

/**
 * @typedef {Object} RuntimeErrorHeaderProps
 * @property {number} currentErrorIndex
 * @property {number} totalErrors
 */

/**
 * A fixed header that shows the total runtime error count.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {RuntimeErrorHeaderProps} props
 * @returns {void}
 */
function RuntimeErrorHeader(document, root, props) {
  const header = document.createElement('div');
  header.innerText = `Error ${props.currentErrorIndex + 1} of ${props.totalErrors}`;
  header.style.backgroundColor = theme.red;
  header.style.color = theme.white;
  header.style.fontWeight = '500';
  header.style.height = '2.5rem';
  header.style.left = '0';
  header.style.lineHeight = '2.5rem';
  header.style.position = 'fixed';
  header.style.textAlign = 'center';
  header.style.top = '0';
  header.style.width = '100vw';
  header.style.zIndex = '2';
  root.appendChild(header);
  Spacer(document, root, {
    space: '2.5rem'
  });
}
module.exports = RuntimeErrorHeader;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js ***!
  \***************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const ErrorStackParser = __webpack_require__(/*! error-stack-parser */ "error-stack-parser");
const theme = __webpack_require__(/*! ../theme.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js");
const utils = __webpack_require__(/*! ../utils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils.js");

/**
 * @typedef {Object} RuntimeErrorStackProps
 * @property {Error} error
 */

/**
 * A formatter that turns runtime error stacks into highlighted HTML stacks.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {RuntimeErrorStackProps} props
 * @returns {void}
 */
function RuntimeErrorStack(document, root, props) {
  const stackTitle = document.createElement('h4');
  stackTitle.innerText = 'Call Stack';
  stackTitle.style.color = theme.white;
  stackTitle.style.fontSize = '1.0625rem';
  stackTitle.style.fontWeight = '500';
  stackTitle.style.lineHeight = '1.3';
  stackTitle.style.margin = '0 0 0.5rem';
  const stackContainer = document.createElement('div');
  stackContainer.style.fontSize = '0.8125rem';
  stackContainer.style.lineHeight = '1.3';
  stackContainer.style.whiteSpace = 'pre-wrap';
  let errorStacks;
  try {
    errorStacks = ErrorStackParser.parse(props.error);
  } catch (e) {
    errorStacks = [];
    stackContainer.innerHTML = 'No stack trace is available for this error!';
  }
  for (let i = 0; i < Math.min(errorStacks.length, 10); i += 1) {
    const currentStack = errorStacks[i];
    const functionName = document.createElement('code');
    functionName.innerHTML = `&emsp;${currentStack.functionName || '(anonymous function)'}`;
    functionName.style.color = theme.yellow;
    functionName.style.fontFamily = ['"SFMono-Regular"', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'].join(', ');
    const fileName = document.createElement('div');
    fileName.innerHTML = '&emsp;&emsp;' + utils.formatFilename(currentStack.fileName) + ':' + currentStack.lineNumber + ':' + currentStack.columnNumber;
    fileName.style.color = theme.white;
    fileName.style.fontSize = '0.6875rem';
    fileName.style.marginBottom = '0.25rem';
    stackContainer.appendChild(functionName);
    stackContainer.appendChild(fileName);
  }
  root.appendChild(stackTitle);
  root.appendChild(stackContainer);
}
module.exports = RuntimeErrorStack;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js ***!
  \****************************************************************************************/
(module) {

/**
 * @typedef {Object} SpacerProps
 * @property {string} space
 */

/**
 * An empty element to add spacing manually.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {SpacerProps} props
 * @returns {void}
 */
function Spacer(document, root, props) {
  const spacer = document.createElement('div');
  spacer.style.paddingBottom = props.space;
  root.appendChild(spacer);
}
module.exports = Spacer;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js ***!
  \*******************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const CompileErrorTrace = __webpack_require__(/*! ../components/CompileErrorTrace.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/CompileErrorTrace.js");
const PageHeader = __webpack_require__(/*! ../components/PageHeader.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js");
const Spacer = __webpack_require__(/*! ../components/Spacer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js");

/**
 * @typedef {Object} CompileErrorContainerProps
 * @property {string} errorMessage
 */

/**
 * A container to render Webpack compilation error messages with source trace.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {CompileErrorContainerProps} props
 * @returns {void}
 */
function CompileErrorContainer(document, root, props) {
  PageHeader(document, root, {
    title: 'Failed to compile.'
  });
  CompileErrorTrace(document, root, {
    errorMessage: props.errorMessage
  });
  Spacer(document, root, {
    space: '1rem'
  });
}
module.exports = CompileErrorContainer;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js"
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js ***!
  \*******************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const PageHeader = __webpack_require__(/*! ../components/PageHeader.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/PageHeader.js");
const RuntimeErrorStack = __webpack_require__(/*! ../components/RuntimeErrorStack.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorStack.js");
const Spacer = __webpack_require__(/*! ../components/Spacer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/Spacer.js");

/**
 * @typedef {Object} RuntimeErrorContainerProps
 * @property {Error} currentError
 */

/**
 * A container to render runtime error messages with stack trace.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {RuntimeErrorContainerProps} props
 * @returns {void}
 */
function RuntimeErrorContainer(document, root, props) {
  PageHeader(document, root, {
    message: props.currentError.message,
    title: props.currentError.name,
    topOffset: '2.5rem'
  });
  RuntimeErrorStack(document, root, {
    error: props.currentError
  });
  Spacer(document, root, {
    space: '1rem'
  });
}
module.exports = RuntimeErrorContainer;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

const RuntimeErrorFooter = __webpack_require__(/*! ./components/RuntimeErrorFooter.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorFooter.js");
const RuntimeErrorHeader = __webpack_require__(/*! ./components/RuntimeErrorHeader.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/components/RuntimeErrorHeader.js");
const CompileErrorContainer = __webpack_require__(/*! ./containers/CompileErrorContainer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/CompileErrorContainer.js");
const RuntimeErrorContainer = __webpack_require__(/*! ./containers/RuntimeErrorContainer.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/containers/RuntimeErrorContainer.js");
const theme = __webpack_require__(/*! ./theme.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js");
const utils = __webpack_require__(/*! ./utils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils.js");

/**
 * @callback RenderFn
 * @returns {void}
 */

/* ===== Cached elements for DOM manipulations ===== */
/**
 * The iframe that contains the overlay.
 * @type {HTMLIFrameElement}
 */
let iframeRoot = null;
/**
 * The document object from the iframe root, used to create and render elements.
 * @type {Document}
 */
let rootDocument = null;
/**
 * The root div elements will attach to.
 * @type {HTMLDivElement}
 */
let root = null;
/**
 * A Cached function to allow deferred render.
 * @type {RenderFn | null}
 */
let scheduledRenderFn = null;

/* ===== Overlay State ===== */
/**
 * The latest error message from Webpack compilation.
 * @type {string}
 */
let currentCompileErrorMessage = '';
/**
 * Index of the error currently shown by the overlay.
 * @type {number}
 */
let currentRuntimeErrorIndex = 0;
/**
 * The latest runtime error objects.
 * @type {Error[]}
 */
let currentRuntimeErrors = [];
/**
 * The render mode the overlay is currently in.
 * @type {'compileError' | 'runtimeError' | null}
 */
let currentMode = null;

/**
 * @typedef {Object} IframeProps
 * @property {function(): void} onIframeLoad
 */

/**
 * Creates the main `iframe` the overlay will attach to.
 * Accepts a callback to be ran after iframe is initialized.
 * @param {Document} document
 * @param {HTMLElement} root
 * @param {IframeProps} props
 * @returns {HTMLIFrameElement}
 */
function IframeRoot(document, root, props) {
  const iframe = document.createElement('iframe');
  iframe.id = 'react-refresh-overlay';
  iframe.src = 'about:blank';
  iframe.style.border = 'none';
  iframe.style.height = '100%';
  iframe.style.left = '0';
  iframe.style.minHeight = '100vh';
  iframe.style.minHeight = '-webkit-fill-available';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.width = '100vw';
  iframe.style.zIndex = '2147483647';
  iframe.addEventListener('load', function onLoad() {
    // Reset margin of iframe body
    iframe.contentDocument.body.style.margin = '0';
    props.onIframeLoad();
  });

  // We skip mounting and returns as we need to ensure
  // the load event is fired after we setup the global variable
  return iframe;
}

/**
 * Creates the main `div` element for the overlay to render.
 * @param {Document} document
 * @param {HTMLElement} root
 * @returns {HTMLDivElement}
 */
function OverlayRoot(document, root) {
  const div = document.createElement('div');
  div.id = 'react-refresh-overlay-error';

  // Apply ANSI theme
  div.style.setProperty('--color-ansi-selection', theme.selection);
  div.style.setProperty('--color-ansi-bg', theme.background);
  div.style.setProperty('--color-ansi-fg', theme.white);
  div.style.setProperty('--color-ansi-white', theme.white);
  div.style.setProperty('--color-ansi-black', theme.black);
  div.style.setProperty('--color-ansi-blue', theme.blue);
  div.style.setProperty('--color-ansi-cyan', theme.cyan);
  div.style.setProperty('--color-ansi-green', theme.green);
  div.style.setProperty('--color-ansi-magenta', theme.magenta);
  div.style.setProperty('--color-ansi-red', theme.red);
  div.style.setProperty('--color-ansi-yellow', theme.yellow);
  div.style.setProperty('--color-ansi-bright-white', theme['bright-white']);
  div.style.setProperty('--color-ansi-bright-black', theme['bright-black']);
  div.style.setProperty('--color-ansi-bright-blue', theme['bright-blue']);
  div.style.setProperty('--color-ansi-bright-cyan', theme['bright-cyan']);
  div.style.setProperty('--color-ansi-bright-green', theme['bright-green']);
  div.style.setProperty('--color-ansi-bright-magenta', theme['bright-magenta']);
  div.style.setProperty('--color-ansi-bright-red', theme['bright-red']);
  div.style.setProperty('--color-ansi-bright-yellow', theme['bright-yellow']);

  // Style the contents container
  div.style.backgroundColor = theme.background;
  div.style.boxSizing = 'border-box';
  div.style.color = theme.white;
  div.style.fontFamily = ['-apple-system', '"Source Sans Pro"', 'sans-serif'].join(', ');
  div.style.fontSize = '0.875rem';
  div.style.height = '100%';
  div.style.lineHeight = '1.3';
  div.style.overflow = 'auto';
  div.style.padding = '1rem 1.5rem 0';
  div.style.paddingTop = 'max(1rem, env(safe-area-inset-top))';
  div.style.paddingRight = 'max(1.5rem, env(safe-area-inset-right))';
  div.style.paddingBottom = 'env(safe-area-inset-bottom)';
  div.style.paddingLeft = 'max(1.5rem, env(safe-area-inset-left))';
  div.style.width = '100vw';
  root.appendChild(div);
  return div;
}

/**
 * Ensures the iframe root and the overlay root are both initialized before render.
 * If check fails, render will be deferred until both roots are initialized.
 * @param {RenderFn} renderFn A function that triggers a DOM render.
 * @returns {void}
 */
function ensureRootExists(renderFn) {
  if (root) {
    // Overlay root is ready, we can render right away.
    renderFn();
    return;
  }

  // Creating an iframe may be asynchronous so we'll defer render.
  // In case of multiple calls, function from the last call will be used.
  scheduledRenderFn = renderFn;
  if (iframeRoot) {
    // Iframe is already ready, it will fire the load event.
    return;
  }

  // Create the iframe root, and, the overlay root inside it when it is ready.
  iframeRoot = IframeRoot(document, document.body, {
    onIframeLoad: function onIframeLoad() {
      rootDocument = iframeRoot.contentDocument;
      root = OverlayRoot(rootDocument, rootDocument.body);
      scheduledRenderFn();
    }
  });

  // We have to mount here to ensure `iframeRoot` is set when `onIframeLoad` fires.
  // This is because onIframeLoad() will be called synchronously
  // or asynchronously depending on the browser.
  document.body.appendChild(iframeRoot);
}

/**
 * Creates the main `div` element for the overlay to render.
 * @returns {void}
 */
function render() {
  ensureRootExists(function () {
    const currentFocus = rootDocument.activeElement;
    let currentFocusId;
    if (currentFocus.localName === 'button' && currentFocus.id) {
      currentFocusId = currentFocus.id;
    }
    utils.removeAllChildren(root);
    if (currentCompileErrorMessage) {
      currentMode = 'compileError';
      CompileErrorContainer(rootDocument, root, {
        errorMessage: currentCompileErrorMessage
      });
    } else if (currentRuntimeErrors.length) {
      currentMode = 'runtimeError';
      RuntimeErrorHeader(rootDocument, root, {
        currentErrorIndex: currentRuntimeErrorIndex,
        totalErrors: currentRuntimeErrors.length
      });
      RuntimeErrorContainer(rootDocument, root, {
        currentError: currentRuntimeErrors[currentRuntimeErrorIndex]
      });
      RuntimeErrorFooter(rootDocument, root, {
        initialFocus: currentFocusId,
        multiple: currentRuntimeErrors.length > 1,
        onClickCloseButton: function onClose() {
          clearRuntimeErrors();
        },
        onClickNextButton: function onNext() {
          if (currentRuntimeErrorIndex === currentRuntimeErrors.length - 1) {
            return;
          }
          currentRuntimeErrorIndex += 1;
          ensureRootExists(render);
        },
        onClickPrevButton: function onPrev() {
          if (currentRuntimeErrorIndex === 0) {
            return;
          }
          currentRuntimeErrorIndex -= 1;
          ensureRootExists(render);
        }
      });
    }
  });
}

/**
 * Destroys the state of the overlay.
 * @returns {void}
 */
function cleanup() {
  // Clean up and reset all internal state.
  document.body.removeChild(iframeRoot);
  scheduledRenderFn = null;
  root = null;
  iframeRoot = null;
}

/**
 * Clears Webpack compilation errors and dismisses the compile error overlay.
 * @returns {void}
 */
function clearCompileError() {
  if (!root || currentMode !== 'compileError') {
    return;
  }
  currentCompileErrorMessage = '';
  currentMode = null;
  cleanup();
}

/**
 * Clears runtime error records and dismisses the runtime error overlay.
 * @param {boolean} [dismissOverlay] Whether to dismiss the overlay or not.
 * @returns {void}
 */
function clearRuntimeErrors(dismissOverlay) {
  if (!root || currentMode !== 'runtimeError') {
    return;
  }
  currentRuntimeErrorIndex = 0;
  currentRuntimeErrors = [];
  if (typeof dismissOverlay === 'undefined' || dismissOverlay) {
    currentMode = null;
    cleanup();
  }
}

/**
 * Shows the compile error overlay with the specific Webpack error message.
 * @param {string} message
 * @returns {void}
 */
function showCompileError(message) {
  if (!message) {
    return;
  }
  currentCompileErrorMessage = message;
  render();
}

/**
 * Shows the runtime error overlay with the specific error records.
 * @param {Error[]} errors
 * @returns {void}
 */
function showRuntimeErrors(errors) {
  if (!errors || !errors.length) {
    return;
  }
  currentRuntimeErrors = errors;
  render();
}

/**
 * The debounced version of `showRuntimeErrors` to prevent frequent renders
 * due to rapid firing listeners.
 * @param {Error[]} errors
 * @returns {void}
 */
const debouncedShowRuntimeErrors = utils.debounce(showRuntimeErrors, 30);

/**
 * Detects if an error is a Webpack compilation error.
 * @param {Error} error The error of interest.
 * @returns {boolean} If the error is a Webpack compilation error.
 */
function isWebpackCompileError(error) {
  return /Module [A-z ]+\(from/.test(error.message) || /Cannot find module/.test(error.message);
}

/**
 * Handles runtime error contexts captured with EventListeners.
 * Integrates with a runtime error overlay.
 * @param {Error} error A valid error object.
 * @returns {void}
 */
function handleRuntimeError(error) {
  if (error && !isWebpackCompileError(error) && currentRuntimeErrors.indexOf(error) === -1) {
    currentRuntimeErrors = currentRuntimeErrors.concat(error);
  }
  debouncedShowRuntimeErrors(currentRuntimeErrors);
}
module.exports = Object.freeze({
  clearCompileError: clearCompileError,
  clearRuntimeErrors: clearRuntimeErrors,
  handleRuntimeError: handleRuntimeError,
  showCompileError: showCompileError,
  showRuntimeErrors: showRuntimeErrors
});

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/theme.js ***!
  \****************************************************************************/
(module) {

/**
 * @typedef {Object} Theme
 * @property {string} black
 * @property {string} bright-black
 * @property {string} red
 * @property {string} bright-red
 * @property {string} green
 * @property {string} bright-green
 * @property {string} yellow
 * @property {string} bright-yellow
 * @property {string} blue
 * @property {string} bright-blue
 * @property {string} magenta
 * @property {string} bright-magenta
 * @property {string} cyan
 * @property {string} bright-cyan
 * @property {string} white
 * @property {string} bright-white
 * @property {string} lightgrey
 * @property {string} darkgrey
 * @property {string} grey
 * @property {string} dimgrey
 */

/**
 * @type {Theme} theme
 * A collection of colors to be used by the overlay.
 * Partially adopted from Tomorrow Night Bright.
 */
const theme = {
  black: '#000000',
  'bright-black': '#474747',
  red: '#D34F56',
  'bright-red': '#dd787d',
  green: '#B9C954',
  'bright-green': '#c9d57b',
  yellow: '#E6C452',
  'bright-yellow': '#ecd37f',
  blue: '#7CA7D8',
  'bright-blue': '#a3c1e4',
  magenta: '#C299D6',
  'bright-magenta': '#d8bde5',
  cyan: '#73BFB1',
  'bright-cyan': '#96cfc5',
  white: '#FFFFFF',
  'bright-white': '#FFFFFF',
  background: '#474747',
  'dark-background': '#343434',
  selection: 'rgba(234, 234, 234, 0.5)'
};
module.exports = theme;

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils.js"
/*!****************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/utils.js ***!
  \****************************************************************************/
(module) {

/**
 * Debounce a function to delay invoking until wait (ms) have elapsed since the last invocation.
 * @param {function(...*): *} fn The function to be debounced.
 * @param {number} wait Milliseconds to wait before invoking again.
 * @return {function(...*): void} The debounced function.
 */
function debounce(fn, wait) {
  /**
   * A cached setTimeout handler.
   * @type {number | undefined}
   */
  let timer;

  /**
   * @returns {void}
   */
  function debounced() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      return fn.apply(context, args);
    }, wait);
  }
  return debounced;
}

/**
 * Prettify a filename from error stacks into the desired format.
 * @param {string} filename The filename to be formatted.
 * @returns {string} The formatted filename.
 */
function formatFilename(filename) {
  // Strip away protocol and domain for compiled files
  const htmlMatch = /^https?:\/\/(.*)\/(.*)/.exec(filename);
  if (htmlMatch && htmlMatch[1] && htmlMatch[2]) {
    return htmlMatch[2];
  }

  // Strip everything before the first directory for source files
  const sourceMatch = /\/.*?([^./]+[/|\\].*)$/.exec(filename);
  if (sourceMatch && sourceMatch[1]) {
    return sourceMatch[1].replace(/\?$/, '');
  }

  // Unknown filename type, use it as is
  return filename;
}

/**
 * Remove all children of an element.
 * @param {HTMLElement} element A valid HTML element.
 * @param {number} [skip] Number of elements to skip removing.
 * @returns {void}
 */
function removeAllChildren(element, skip) {
  /** @type {Node[]} */
  const childList = Array.prototype.slice.call(element.childNodes, typeof skip !== 'undefined' ? skip : 0);
  for (let i = 0; i < childList.length; i += 1) {
    element.removeChild(childList[i]);
  }
}
module.exports = {
  debounce: debounce,
  formatFilename: formatFilename,
  removeAllChildren: removeAllChildren
};

/***/ },

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/sockets/WHMEventSource.js ***!
  \*************************************************************************************/
(module) {

/**
 * The hard-coded singleton key for webpack-hot-middleware's client instance.
 *
 * [Ref](https://github.com/webpack-contrib/webpack-hot-middleware/blob/cb29abb9dde435a1ac8e9b19f82d7d36b1093198/client.js#L152)
 */
const singletonKey = '__webpack_hot_middleware_reporter__';

/**
 * Initializes a socket server for HMR for webpack-hot-middleware.
 * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.
 * @returns {void}
 */
function initWHMEventSource(messageHandler) {
  const client = window[singletonKey];
  client.useCustomOverlay({
    showProblems: function showProblems(type, data) {
      const error = {
        data: data,
        type: type
      };
      messageHandler(error);
    },
    clear: function clear() {
      messageHandler({
        type: 'ok'
      });
    }
  });
}
module.exports = {
  init: initWHMEventSource
};

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			if (!execOptions.factory) {
/******/ 				delete __webpack_module_cache__[moduleId];
/******/ 				var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 				e.code = 'MODULE_NOT_FOUND';
/******/ 				throw e;
/******/ 			}
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "main") return "static/js/main." + __webpack_require__.h() + ".js";
/******/ 			// return url for filenames based on template
/******/ 			return "static/js/" + chunkId + "." + __webpack_require__.h() + ".chunk.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6874ecdd4218c275ab38")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules,
/******/ 									update.css
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 		
/******/ 			var onAccepted = function () {
/******/ 				return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 					// handle errors in accept handlers and self accepted module load
/******/ 					if (error) {
/******/ 						return setStatus("fail").then(function () {
/******/ 							throw error;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					if (queuedInvalidatedModules) {
/******/ 						return internalApply(options).then(function (list) {
/******/ 							outdatedModules.forEach(function (moduleId) {
/******/ 								if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 							});
/******/ 							return list;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					return setStatus("idle").then(function () {
/******/ 						return outdatedModules;
/******/ 					});
/******/ 				});
/******/ 			};
/******/ 		
/******/ 			return Promise.all(
/******/ 				results
/******/ 					.filter(function (result) {
/******/ 						return result.apply;
/******/ 					})
/******/ 					.map(function (result) {
/******/ 						return result.apply(reportError);
/******/ 					})
/******/ 			)
/******/ 				.then(function (applyResults) {
/******/ 					applyResults.forEach(function (modules) {
/******/ 						if (modules) {
/******/ 							for (var i = 0; i < modules.length; i++) {
/******/ 								outdatedModules.push(modules[i]);
/******/ 							}
/******/ 						}
/******/ 					});
/******/ 				})
/******/ 				.then(onAccepted);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/node/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		const setup = (moduleId) => {
/******/ 			const refresh = {
/******/ 				moduleId: moduleId,
/******/ 				register: (type, id) => {
/******/ 					const typeId = moduleId + ' ' + id;
/******/ 					refresh.runtime.register(type, typeId);
/******/ 				},
/******/ 				signature: () => (refresh.runtime.createSignatureFunctionForTransform()),
/******/ 				runtime: {
/******/ 					createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 					register: x => {}
/******/ 				},
/******/ 			};
/******/ 			return refresh;
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hotRequire = (request) => (webpackRequire(request));
/******/ 				const createPropertyDescriptor = (name) => {
/******/ 					return {
/******/ 						configurable: true,
/******/ 						enumerable: true,
/******/ 						get: () => (webpackRequire[name]),
/******/ 						set: (value) => {
/******/ 							webpackRequire[name] = value;
/******/ 						},
/******/ 					};
/******/ 				};
/******/ 				for (const name in webpackRequire) {
/******/ 					if (name === "$Refresh$") continue;
/******/ 					if (Object.prototype.hasOwnProperty.call(webpackRequire, name)) {
/******/ 						Object.defineProperty(hotRequire, name, createPropertyDescriptor(name));
/******/ 					}
/******/ 				}
/******/ 				hotRequire.$Refresh$ = setup(options.id);
/******/ 				originalFactory.call(this, moduleObject, moduleExports, hotRequire);
/******/ 			};
/******/ 		});
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					var installedChunk = require("../../" + __webpack_require__.u(chunkId));
/******/ 					if (!installedChunks[chunkId]) {
/******/ 						installChunk(installedChunk);
/******/ 					}
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("../../" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					var acceptPromises = [];
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									var result;
/******/ 									try {
/******/ 										result = callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 									if (result && typeof result.then === "function") {
/******/ 										acceptPromises.push(result);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					var onAccepted = function () {
/******/ 						// Load self accepted modules
/******/ 						for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 							var item = outdatedSelfAcceptedModules[o];
/******/ 							var moduleId = item.module;
/******/ 							try {
/******/ 								item.require(moduleId);
/******/ 							} catch (err) {
/******/ 								if (typeof item.errorHandler === "function") {
/******/ 									try {
/******/ 										item.errorHandler(err, {
/******/ 											moduleId: moduleId,
/******/ 											module: __webpack_require__.c[moduleId]
/******/ 										});
/******/ 									} catch (err1) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "self-accept-error-handler-errored",
/******/ 												moduleId: moduleId,
/******/ 												error: err1,
/******/ 												originalError: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err1);
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								} else {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					};
/******/ 		
/******/ 					return Promise.all(acceptPromises)
/******/ 						.then(onAccepted)
/******/ 						.then(function () {
/******/ 							return outdatedModules;
/******/ 						});
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("../../" + __webpack_require__.hmrF());
/******/ 			}).catch((err) => {
/******/ 				if(['MODULE_NOT_FOUND', 'ENOENT'].includes(err.code)) return;
/******/ 				throw err;
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/main-node.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.6874ecdd4218c275ab38.js.map