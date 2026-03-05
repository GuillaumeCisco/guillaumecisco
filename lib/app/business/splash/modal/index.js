"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _content = _interopRequireDefault(require("./content"));
var _reducer = require("./reducer");
var _close = _interopRequireDefault(require("../../../common/ui/svgs/close"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _Close;
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
function Modal() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const component = (0, _reactRedux.useSelector)(state => state.modal.component);
  const visible = (0, _reactRedux.useSelector)(state => state.modal.visible);
  const close = (0, _react.useCallback)(() => {
    dispatch((0, _reducer.visible)(false));
  }, [dispatch]);
  if (!visible) return null;
  const ScrollWrapper = (() => {
    if (!isBrowser) return ({
      children
    }) => children;
    try {
      const mod = require('react-perfect-scrollbar');
      const Cmp = mod?.default ?? mod?.PerfectScrollbar ?? mod;
      return typeof Cmp === 'function' ? Cmp : ({
        children
      }) => children;
    } catch {
      return ({
        children
      }) => children;
    }
  })();
  return (0, _jsxRuntime.jsxs)("div", {
    css: _style.default.container,
    children: [(0, _jsxRuntime.jsx)(ScrollWrapper, {
      children: (0, _jsxRuntime.jsx)(_content.default, {
        type: component
      })
    }), (0, _jsxRuntime.jsx)("div", {
      css: _style.default.close,
      onClick: close,
      children: _Close || (_Close = (0, _jsxRuntime.jsx)(_close.default, {}))
    })]
  });
}
Modal.propTypes = {
  component: _propTypes.default.string,
  visible: _propTypes.default.bool
};
Modal.defaultProps = {
  component: '',
  visible: false
};
var _default = exports.default = Modal;