"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _random = _interopRequireDefault(require("lodash-es/random"));
var _d3Timer = require("d3-timer");
var _canvas = _interopRequireDefault(require("../canvas"));
var _star = _interopRequireDefault(require("./star"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function ShootingStars({
  w,
  h
}) {
  const canvasRef = (0, _react.useRef)(null);
  const ctxRef = (0, _react.useRef)(null);
  const timerRef = (0, _react.useRef)(null);
  const shootingStarsRef = (0, _react.useRef)([]);
  const luckRef = (0, _react.useRef)(100);
  const maxStepsRef = (0, _react.useRef)(70);
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    ctxRef.current = canvas.getContext('2d');
    timerRef.current?.stop?.();
    timerRef.current = (0, _d3Timer.timer)(() => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.clearRect(-w, -h, 2 * w, 2 * h);
      if ((0, _random.default)(1, luckRef.current) === luckRef.current) {
        shootingStarsRef.current.push(new _star.default(w, h));
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
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    shootingStarsRef.current.forEach(star => star.update(w, h));
  }, [w, h]);
  return (0, _jsxRuntime.jsx)(_canvas.default, {
    ref: canvasRef
  });
}
ShootingStars.propTypes = {
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ShootingStars);