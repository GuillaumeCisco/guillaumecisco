"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _range = _interopRequireDefault(require("lodash-es/range"));
var _d3Timer = require("d3-timer");
require("d3-transition");
var _d3Interpolate = require("d3-interpolate");
var _canvas = _interopRequireDefault(require("../canvas"));
var _star = _interopRequireDefault(require("./star"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function Ellipse({
  w,
  h,
  size,
  a,
  b,
  padding
}) {
  const canvasRef = (0, _react.useRef)(null);
  const ctxRef = (0, _react.useRef)(null);
  const starsRef = (0, _react.useRef)([]);
  const timerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(-Math.PI / 20);
    const radians = (0, _d3Interpolate.interpolate)(0, Math.PI * 2);
    starsRef.current = [];
    (0, _range.default)(0, size).forEach(o => {
      const teta = radians(o / size);
      starsRef.current.push(new _star.default(w, h, size, a, b, teta, padding));
    });
    timerRef.current?.stop?.();
    timerRef.current = (0, _d3Timer.timer)(() => {
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
  (0, _react.useEffect)(() => {
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
  return (0, _jsxRuntime.jsx)(_canvas.default, {
    ref: canvasRef
  });
}
Ellipse.propTypes = {
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  size: _propTypes.default.number.isRequired,
  a: _propTypes.default.number.isRequired,
  b: _propTypes.default.number.isRequired,
  padding: _propTypes.default.number.isRequired
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Ellipse);