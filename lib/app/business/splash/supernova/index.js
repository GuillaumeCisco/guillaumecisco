"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _d3Selection = require("d3-selection");
var _reactRedux = require("react-redux");
var _reducer = require("../modal/reducer");
var _general = require("../../../reducers/general");
var _style = _interopRequireDefault(require("./style"));
var _index = _interopRequireDefault(require("./background/index"));
var _index2 = _interopRequireDefault(require("./shootingStar/index"));
var _core = _interopRequireDefault(require("./core"));
var _index3 = _interopRequireDefault(require("./ellipse/index"));
var _spaceship = _interopRequireDefault(require("./spaceship"));
var _planet = _interopRequireDefault(require("./planet"));
var _mars = _interopRequireDefault(require("./planet/mars.png"));
var _blue = _interopRequireDefault(require("./planet/blue.png"));
var _white = _interopRequireDefault(require("./planet/white.png"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function SuperNova() {
  // redux hooks
  const dispatch = (0, _reactRedux.useDispatch)();
  const intro = (0, _reactRedux.useSelector)(state => state.general.intro);

  // constants (old: this.nbBackgroundStars / this.nbStars / this.padding)
  const nbBackgroundStars = 100;
  const nbStars = 1000;
  const padding = 50;
  const wrapperRef = (0, _react.useRef)(null);
  const redPlanetRef = (0, _react.useRef)(null);
  const bluePlanetRef = (0, _react.useRef)(null);
  const orangePlanetRef = (0, _react.useRef)(null);
  const [state, setState] = (0, _react.useState)({
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
  const resize = (0, _react.useCallback)(() => {
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
  (0, _react.useEffect)(() => {
    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [resize]);
  const isInCircle = (0, _react.useCallback)((x, y, r, a, b) => (a - x) ** 2 + (b - y) ** 2 < r ** 2, []);
  const isInCore = (0, _react.useCallback)((x, y) => {
    const {
      w,
      h,
      coreRadius
    } = state;
    return isInCircle(w / 2, h / 2, coreRadius, x, y);
  }, [isInCircle, state]);
  const isInPlanet = (0, _react.useCallback)((a, b, planetRef, radius) => {
    const planet = planetRef.current;
    if (!planet) return false;
    const coord = planet.getCoordinate?.();
    if (!coord) return false;
    return isInCircle(a, b, radius, coord.x, coord.y);
  }, [isInCircle]);
  const click = (0, _react.useCallback)(e => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const {
      redPlanet,
      orangePlanet,
      bluePlanet
    } = state;
    if (!redPlanet || !orangePlanet || !bluePlanet) return;
    const [x, y] = (0, _d3Selection.pointer)(e, wrapper);
    if (isInCore(x, y)) {
      dispatch((0, _reducer.set)('core'));
      dispatch((0, _general.intro)(true));
    }
    if (isInPlanet(x, y, redPlanetRef, redPlanet.radius)) {
      dispatch((0, _reducer.set)('skills'));
    }
    if (isInPlanet(x, y, orangePlanetRef, orangePlanet.radius)) {
      dispatch((0, _reducer.set)('awards'));
    }
    if (isInPlanet(x, y, bluePlanetRef, bluePlanet.radius)) {
      dispatch((0, _reducer.set)('experience'));
    }
  }, [dispatch, isInCore, isInPlanet, state]);
  const mouseMove = (0, _react.useCallback)(e => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const {
      redPlanet,
      orangePlanet,
      bluePlanet,
      over
    } = state;
    if (!redPlanet || !orangePlanet || !bluePlanet) return;
    const [x, y] = (0, _d3Selection.pointer)(e, wrapper);
    const nextOver = isInCore(x, y) || isInPlanet(x, y, redPlanetRef, redPlanet.radius) || isInPlanet(x, y, orangePlanetRef, orangePlanet.radius) || isInPlanet(x, y, bluePlanetRef, bluePlanet.radius);
    if (nextOver !== over) {
      setState(prev => ({
        ...prev,
        over: nextOver
      }));
    }
  }, [isInCore, isInPlanet, state]);
  const spaceshipClick = (0, _react.useCallback)(() => {
    dispatch((0, _reducer.set)('spaceship'));
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
  return (0, _jsxRuntime.jsx)("div", {
    ref: wrapperRef,
    css: _style.default.wrapper(state.over),
    onClick: click,
    onMouseMove: mouseMove,
    children: loaded && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(_index.default, {
        w: w,
        h: h,
        size: nbBackgroundStars
      }), (0, _jsxRuntime.jsx)(_index2.default, {
        w: w,
        h: h
      }), (0, _jsxRuntime.jsx)(_core.default, {
        w: w,
        h: h,
        radius: coreRadius
      }), (0, _jsxRuntime.jsx)(_index3.default, {
        w: w,
        h: h,
        size: nbStars,
        a: a,
        b: b,
        padding: padding
      }), (0, _jsxRuntime.jsx)(_spaceship.default, {
        w: w,
        h: h,
        width: 48,
        height: 48,
        onClick: spaceshipClick
      }), intro && redPlanet && bluePlanet && orangePlanet && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)(_planet.default, {
          w: w,
          h: h,
          color: "#97140c",
          radius: redPlanet.radius,
          a: redPlanet.a,
          b: redPlanet.b,
          intervals: 4000,
          teta: Math.PI / 2,
          img: _mars.default,
          ref: redPlanetRef
        }), (0, _jsxRuntime.jsx)(_planet.default, {
          w: w,
          h: h,
          color: "#7399b8",
          radius: bluePlanet.radius,
          a: bluePlanet.a,
          b: bluePlanet.b,
          intervals: 3500,
          teta: -Math.PI / 2,
          img: _blue.default,
          ref: bluePlanetRef
        }), (0, _jsxRuntime.jsx)(_planet.default, {
          w: w,
          h: h,
          color: "#8a451f",
          radius: orangePlanet.radius,
          a: orangePlanet.a,
          b: orangePlanet.b,
          intervals: 2000,
          teta: 0,
          img: _white.default,
          ref: orangePlanetRef
        })]
      })]
    })
  });
}
var _default = exports.default = SuperNova;