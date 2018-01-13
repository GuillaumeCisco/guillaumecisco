import React from 'react';
import {random} from 'lodash';

const Star = function (w, h) {
    const padding = 10;

    this.originW = this.w = w;
    this.originH = this.h = h;
    this.originX = this.x = random(padding, this.originW - padding);
    this.originY = this.y = random(padding, this.originH - padding);
    this.radius = random(1, 3);
    this.alpha = random(0.6, 0.9);

    const update = (w, h) => {
        this.x = this.originX * w / this.originW;
        this.y = this.originY * h / this.originH;
    };

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${random(150, 255)}, ${random(150, 255)}, ${this.alpha})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'white';
        ctx.fill();
    };

    return {
        update,
        draw,
    };
};

export default Star;
