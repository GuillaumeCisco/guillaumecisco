import React from 'react';
import {random} from 'lodash';

const Star = function (size, orbitA, orbitB) {

    this.size = size;
    this.orbitA = orbitA;
    this.orbitB = orbitB;

    const init = (teta, x, y, padX, padY, radius, alpha, speed) => {
        this.teta = teta;
        this.x = x;
        this.y = y;
        this.padX = padX;
        this.padY = padY;
        this.radius = radius;
        this.alpha = alpha;
        this.speed = speed;
    };

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);  // full centered circle
        // create different light power
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
    };

    const move = () => {
        // move to + this.speed
        const index = ((this.size * this.teta) / (2 * Math.PI)) + this.speed;
        // update with new angle
        this.teta = ((index * 2 * Math.PI) / this.size) % (2 * Math.PI);
        let x = Math.cos(this.teta) * this.orbitA,
            y = Math.sin(this.teta) * this.orbitB;


        // update carthesian coordinate by respecting initial randomized padding
        this.x = x + this.padX;
        this.y = y + this.padY;

        // make it randomly brite
        this.alpha = this.alpha === 1 ? random(0.4, 0.8) : (Math.random() < 0.001 ? 1 : this.alpha);
    };

    return {
        init,
        draw,
        move,
    };
};

export default Star;
