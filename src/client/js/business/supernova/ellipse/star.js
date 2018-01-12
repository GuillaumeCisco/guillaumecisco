import React from 'react';
import {random} from 'lodash';

const Star = function (w, h, size, orbitA, orbitB, teta, padding) {

    this.originW = this.w = w;
    this.originH = this.h = h;
    this.size = size;
    this.orbitA = orbitA;
    this.orbitB = orbitB;

    // set own radius
    const radius = random(1, 3);
    // set own alpha
    const alpha = random(0.4, 0.8);
    // set speed
    const speed = random(0.5, 0.8) * -1;
    // get real carthesian coordonate
    // see https://www.mathopenref.com/coordparamellipse.html for understanding ellipse parametric equation
    let x = Math.cos(teta) * orbitA,
        y = Math.sin(teta) * orbitB;

    // generate deltaed coordinate
    const padX = (Math.random() > 0.5 ? 1 : -1) * random(0, padding);
    const padY = (Math.random() > 0.5 ? 1 : -1) * random(0, padding);

    x += padX;
    y += padY;

    this.teta = teta;
    this.x = x;
    this.y = y;
    this.padX = padX;
    this.padY = padY;
    this.radius = radius;
    this.alpha = alpha;
    this.speed = speed;

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

    const update = (a, b) => {
        this.orbitA = a;
        this.orbitB = b;
    };

    return {
        draw,
        move,
        update,
    };
};

export default Star;
