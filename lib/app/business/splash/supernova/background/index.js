"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _range = _interopRequireDefault(require("lodash-es/range"));
var _canvas = _interopRequireDefault(require("../canvas"));
var _star = _interopRequireDefault(require("./star"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function Background({
  w,
  h,
  size
}) {
  const canvasRef = (0, _react.useRef)(null);
  const ctxRef = (0, _react.useRef)(null);
  const starsRef = (0, _react.useRef)([]);
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    starsRef.current = [];
    (0, _range.default)(0, size).forEach(() => {
      const star = new _star.default(w, h);
      star.draw(ctx);
      starsRef.current.push(star);
    });
  }, [w, h, size]);
  (0, _react.useEffect)(() => {
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
  return (0, _jsxRuntime.jsx)(_canvas.default, {
    ref: canvasRef
  });
}
Background.propTypes = {
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  size: _propTypes.default.number.isRequired
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Background);