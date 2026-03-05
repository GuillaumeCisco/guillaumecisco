"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _d3Timer = require("d3-timer");
require("d3-transition");
var _d3Interpolate = require("d3-interpolate");
var _canvas = _interopRequireDefault(require("../canvas"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
const Planet = /*#__PURE__*/(0, _react.forwardRef)(function Planet({
  w,
  h,
  a,
  b,
  intervals,
  teta,
  img,
  radius
}, ref) {
  const canvasRef = (0, _react.useRef)(null);
  const ctxRef = (0, _react.useRef)(null);
  const timerRef = (0, _react.useRef)(null);
  const orbitARef = (0, _react.useRef)(a);
  const orbitBRef = (0, _react.useRef)(b);
  const intervalsRef = (0, _react.useRef)(intervals);
  const tetaRef = (0, _react.useRef)((teta || 0) % (2 * Math.PI));
  const radiansRef = (0, _react.useRef)((0, _d3Interpolate.interpolate)(0, Math.PI * 2));
  const xRef = (0, _react.useRef)(0);
  const yRef = (0, _react.useRef)(0);
  const canvasRotationRef = (0, _react.useRef)(-Math.PI / 20);
  const originWRef = (0, _react.useRef)(w);
  const originHRef = (0, _react.useRef)(h);
  (0, _react.useImperativeHandle)(ref, () => ({
    getCoordinate: () => ({
      x: yRef.current * Math.sin(-canvasRotationRef.current) + xRef.current * Math.cos(-canvasRotationRef.current) + originWRef.current / 2,
      y: yRef.current * Math.cos(-canvasRotationRef.current) - xRef.current * Math.sin(-canvasRotationRef.current) + originHRef.current / 2
    })
  }), []);
  (0, _react.useEffect)(() => {
    orbitARef.current = a;
    orbitBRef.current = b;
    intervalsRef.current = intervals;
    originWRef.current = w;
    originHRef.current = h;
  }, [a, b, intervals, w, h]);
  (0, _react.useEffect)(() => {
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
      timerRef.current = (0, _d3Timer.timer)(() => {
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
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;
    canvas.width = w;
    canvas.height = h;
    ctx.clearRect(-w, -h, 2 * w, 2 * h);
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(canvasRotationRef.current);
  }, [w, h]);
  return (0, _jsxRuntime.jsx)(_canvas.default, {
    ref: canvasRef
  });
});
Planet.propTypes = {
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  a: _propTypes.default.number.isRequired,
  b: _propTypes.default.number.isRequired,
  intervals: _propTypes.default.number.isRequired,
  teta: _propTypes.default.number.isRequired,
  img: _propTypes.default.string.isRequired,
  radius: _propTypes.default.number.isRequired
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Planet);