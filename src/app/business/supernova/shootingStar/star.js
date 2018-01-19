import React from 'react';
import {random} from 'lodash';

const ShootingStar = function (w, h) {
    this.originW = w;
    this.originH = h;
    this.radius = 1;
    this.teta = 5 * Math.PI / 8;
    this.originX = this.x = random(0, w);
    this.originY = this.y = random(0, h / 2);
    this.step = 0;

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2); // full centered circle
        // create different light power
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
    };

    const move = () => {
        // we increment the radius of the circle, so the shooting star move along its teta angle constantly
        this.radius += 15;
        this.step += 1;

        this.x = Math.cos(this.teta) * this.radius + this.originX;
        this.y = Math.sin(this.teta) * this.radius + this.originY;
    };

    const update = (w, h) => {
        this.originX = this.originX * w / this.originW;
        this.originY = this.originY * h / this.originH;
        this.originW = w;
        this.originH = h;
    };

    const getStep = () => this.step;

    return {
        draw,
        move,
        getStep,
        update,
    };
};

export default ShootingStar;
