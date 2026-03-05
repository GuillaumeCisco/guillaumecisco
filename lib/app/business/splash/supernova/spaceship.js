"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _random = _interopRequireDefault(require("lodash-es/random"));
var _d3Interpolate = require("d3-interpolate");
var _d3Timer = require("d3-timer");
require("d3-transition");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _circle, _path, _path2, _polygon, _polygon2, _path3, _path4, _g, _rect, _rect2;
function Spaceship({
  w,
  h,
  width,
  height,
  onClick
}) {
  const timerRef = (0, _react.useRef)(null);
  const originWRef = (0, _react.useRef)(w);
  const originHRef = (0, _react.useRef)(h);
  const luckRef = (0, _react.useRef)(300);
  const stepRef = (0, _react.useRef)(0);
  const speedRef = (0, _react.useRef)(200);
  const iRef = (0, _react.useRef)((0, _d3Interpolate.interpolate)(-width, h));
  const xRef = (0, _react.useRef)((0, _random.default)(width, w - width));
  const yRef = (0, _react.useRef)(h - height);
  const [style, setStyle] = (0, _react.useState)({
    zIndex: 1,
    position: 'absolute'
  });
  const [isSpaceShift, setIsSpaceShift] = (0, _react.useState)(false);
  const draw = (0, _react.useCallback)(() => {
    setStyle(prev => ({
      ...prev,
      top: yRef.current,
      left: xRef.current
    }));
    setIsSpaceShift(stepRef.current < speedRef.current);
  }, []);
  const move = (0, _react.useCallback)(() => {
    yRef.current = originHRef.current - height - iRef.current(stepRef.current / speedRef.current);
    xRef.current = stepRef.current === speedRef.current ? (0, _random.default)(width, originWRef.current - width) : xRef.current;
  }, [height, width]);
  (0, _react.useEffect)(() => {
    // init / re-init when size changes
    originWRef.current = w;
    originHRef.current = h;
    iRef.current = (0, _d3Interpolate.interpolate)(-width, h);

    // keep current x in proportion
    xRef.current = xRef.current * w / (originWRef.current || w);
    yRef.current = h - height;
  }, [w, h, width, height]);
  (0, _react.useEffect)(() => {
    timerRef.current?.stop?.();
    timerRef.current = (0, _d3Timer.timer)(() => {
      if (!isSpaceShift) {
        if ((0, _random.default)(0, luckRef.current) === luckRef.current) {
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
  return (0, _jsxRuntime.jsxs)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 512 512",
    style: style,
    onClick: onClick,
    children: [_circle || (_circle = (0, _jsxRuntime.jsx)("circle", {
      fill: "#FFDA44",
      cx: "256",
      cy: "428.973",
      r: "55.351"
    })), _path || (_path = (0, _jsxRuntime.jsx)("path", {
      fill: "#FF9811",
      d: "M290.595,401.297c0,16.812-8.271,33.84-24.583,50.612c-3.363,3.458-6.765,6.58-10.012,9.335c-3.246-2.755-6.649-5.877-10.012-9.335c-16.312-16.771-24.583-33.8-24.583-50.612H290.595 M256,359.784l-76.108,41.514C179.892,470.487,256,512,256,512s76.108-41.513,76.108-110.703L256,359.784z"
    })), _path2 || (_path2 = (0, _jsxRuntime.jsx)("path", {
      fill: "#FF5023",
      d: "M256,359.784v41.514h34.595c0,16.812-8.271,33.84-24.583,50.612c-3.363,3.458-6.765,6.58-10.012,9.335V512c0,0,76.108-41.513,76.108-110.703L256,359.784z"
    })), _polygon || (_polygon = (0, _jsxRuntime.jsx)("polygon", {
      fill: "#3C5D76",
      points: "84.522,252.827 65.075,359.784 262.919,359.784 262.919,74.43 "
    })), _polygon2 || (_polygon2 = (0, _jsxRuntime.jsx)("polygon", {
      fill: "#1E2E3B",
      points: "427.479,252.827 249.081,74.43 249.081,359.784 446.925,359.784 "
    })), _path3 || (_path3 = (0, _jsxRuntime.jsx)("path", {
      fill: "#CCE9F9",
      d: "M332.108,401.297V110.703C332.108,41.514,256,0,256,0s-76.108,41.514-76.108,110.703v290.595H332.108z"
    })), _path4 || (_path4 = (0, _jsxRuntime.jsx)("path", {
      fill: "#93C7EF",
      d: "M332.108,401.297V110.703C332.108,41.514,256,0,256,0v401.297H332.108z"
    })), _g || (_g = (0, _jsxRuntime.jsxs)("g", {
      children: [(0, _jsxRuntime.jsx)("path", {
        fill: "#1E2E3B",
        d: "M283.676,110.703c0-15.285-12.392-27.676-27.676-27.676l0,0c-15.284,0-27.676,12.39-27.676,27.676H283.676z"
      }), (0, _jsxRuntime.jsx)("rect", {
        x: "235.243",
        y: "262.919",
        fill: "#1E2E3B",
        width: "41.514",
        height: "96.865"
      })]
    })), _rect || (_rect = (0, _jsxRuntime.jsx)("rect", {
      x: "179.892",
      y: "359.784",
      fill: "#78B9EB",
      width: "152.216",
      height: "41.514"
    })), _rect2 || (_rect2 = (0, _jsxRuntime.jsx)("rect", {
      x: "256",
      y: "359.784",
      fill: "#5A8BB0",
      width: "76.108",
      height: "41.514"
    }))]
  });
}
Spaceship.propTypes = {
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func.isRequired
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Spaceship);