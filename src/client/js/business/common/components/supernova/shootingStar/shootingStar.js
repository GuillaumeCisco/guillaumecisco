import React from 'react';
import {random} from 'lodash';

const ShootingStar = function (teta, x, y) {

    this.radius = 1;
    this.teta = teta;
    this.originX = this.x = x;
    this.originY = this.y = y;
    this.step = 0;

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);  // full centered circle
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

    const getStep = () => this.step;

    return {
        draw,
        move,
        getStep,
    };
};

export default ShootingStar;
