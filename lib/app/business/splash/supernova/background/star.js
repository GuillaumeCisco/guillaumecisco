"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _random = _interopRequireDefault(require("lodash-es/random"));
const Star = function Star(w, h) {
  const padding = 10;
  this.originW = w;
  this.originH = h;
  this.originX = this.x = (0, _random.default)(padding, this.originW - padding);
  this.originY = this.y = (0, _random.default)(padding, this.originH - padding);
  this.radius = (0, _random.default)(1, 3);
  this.alpha = (0, _random.default)(0.6, 0.9);

  // rgb color
  this.r = 255;
  this.g = (0, _random.default)(150, 255);
  this.b = (0, _random.default)(150, 255);
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
    this.originX = (0, _random.default)(padding, this.originW - padding);
    this.originY = (0, _random.default)(padding, this.originH - padding);
  };
  return {
    update,
    draw,
    reinit
  };
};
var _default = exports.default = Star;