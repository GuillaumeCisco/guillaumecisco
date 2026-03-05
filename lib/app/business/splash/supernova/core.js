"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _canvas = _interopRequireDefault(require("./canvas"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function Core({
  w,
  h,
  radius
}) {
  const canvasRef = (0, _react.useRef)(null);
  const ctxRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
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
  return (0, _jsxRuntime.jsx)(_canvas.default, {
    ref: canvasRef
  });
}
Core.propTypes = {
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  radius: _propTypes.default.number.isRequired
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Core);