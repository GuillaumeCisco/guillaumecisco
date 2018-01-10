import React, {Component} from 'react';
import {range, random} from 'lodash';
import {transition} from 'd3-transition';
import {interpolate} from 'd3-interpolate';
import {symbol} from 'd3-shape';
import {timer} from 'd3-timer';
import styled from 'react-emotion';

import Star from './star';

const Wrapper = styled('div')`
    height: 600px;
    background-color: black;
    width: 100%;
    position: relative;
`;

// get interpolation all over the circle
const radians = interpolate(0, Math.PI * 2);

export default class SuperNova extends Component {
    constructor(props) {
        super(props);
        // maybe put them in state, but no need to render for now
        this.stars = [];
        this.nbStars = 3000;
        this.radius = 200;
        this.a = 400;
        this.b = 150;
        this.padding = 30;
    }

    componentDidMount() {
        // get width/height
        this.w = this.wrapper.offsetWidth;
        this.h = this.wrapper.offsetHeight;

        // set to wrapper
        this.ellipse.width = this.w;
        this.ellipse.height = this.h;

        this.ctx = this.ellipse.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, this.w / 2, this.h / 2);

        // uncomment this line for debugging
        //this.createEllipse();
        this.createStars();
        this.createCenter();

        // launch animation
        this.timer = timer(this.animate);
    }

    componentWillUnMount() {
        this.timer.stop();
    }

    animate = (elapsed) => {
        //console.log(elapsed);
        this.ctx.clearRect(-this.w, -this.h, 2 * this.w, 2 * this.h);
        this.stars.forEach(star => {
            // move by + speed angle
            star.move();
            // draw new position
            star.draw(this.ctx);
        });
        this.createCenter(this.ctx);
    };

    createEllipse = () => {
        let x = - this.w / 2,
            y = - this.h / 2;
        let kappa = .5522848,
            ox = (this.w / 2) * kappa, // control point offset horizontal
            oy = (this.h / 2) * kappa, // control point offset vertical
            xe = x + this.w,           // x-end
            ye = y + this.h,           // y-end
            xm = x + this.w / 2,       // x-middle
            ym = y + this.h / 2;       // y-middle

        this.ctx.beginPath();
        this.ctx.moveTo(x, ym);
        this.ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        this.ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        this.ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        this.ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        this.ctx.strokeStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 3;
        //ctx.closePath(); // not used correctly, see comments (use to close off open path)
        this.ctx.stroke();
    };

    createCircle = () => {
        // create by symbol
        this.ctx.strokeStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 3;
        const size = Math.PI * Math.pow(this.radius, 2);
        const sym = symbol();
        sym.size(size);
        sym.context(this.ctx);
        sym(); // will draw on context
        this.ctx.stroke();

        // create by cancas circle
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2);  // full centered circle
        // create different light power
        this.ctx.strokeStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    };

    createCenter = () => {
        // create center
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius / 6, 0, Math.PI * 2); // full centered circle
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        this.ctx.shadowBlur = 50;
        this.ctx.shadowColor = 'white';
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
    };

    createStars = () => {
        // create x gravitational stars
        range(0, this.nbStars).forEach(o => {
            // get angle
            const teta = radians(o / this.nbStars);
            // set own radius
            const radius = random(1, 3);
            // set own alpha
            const alpha = random(0.4, 0.8);
            // set speed
            const speed = random(0.5, 0.8);
            // get real carthesian coordonate
            // see https://www.mathopenref.com/coordparamellipse.html for understanding ellipse parametric equation
            let x = Math.cos(teta) * this.a,
                y = Math.sin(teta) * this.b;

            // generate deltaed coordinate
            const padX = (Math.random() > 0.5 ? 1 : -1) * random(0, this.padding);
            const padY = (Math.random() > 0.5 ? 1 : -1) * random(0, this.padding);

            x += padX;
            y += padY;

            // instanciate star with knowing how much stars are present and orbit radii
            const star = new Star(this.nbStars, this.a, this.b);
            // init
            star.init(teta, x, y, padX, padY, radius, alpha, speed);
            // draw
            star.draw(this.ctx);
            // push
            this.stars.push(star);
        });
    };

    render() {
        return (
            <Wrapper innerRef={(e) => (this.wrapper = e)}>
                <canvas ref={(e) => (this.ellipse = e)} />
            </Wrapper>
        );
    }
}
