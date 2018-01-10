import React, {Component} from 'react';
import {range, random} from 'lodash';
import {transition} from 'd3-transition';
import {interpolate} from 'd3-interpolate';
import {symbol} from 'd3-shape';
import {timer} from 'd3-timer';
import {clientPoint} from 'd3-selection';
import {quadtree} from 'd3-quadtree';
import styled, {css} from 'react-emotion';

import Star from './star';
import ShootingStar from './shootingStar';

const Canvas = styled('canvas')`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

// get interpolation all over the circle
const radians = interpolate(0, Math.PI * 2);

export default class SuperNova extends Component {
    state = {
        over: false,
    };

    constructor(props) {
        super(props);
        // maybe put them in state, but no need to render for now
        this.stars = [];
        this.shootingStars = [];
        this.nbStars = 3000;
        this.nbBackgroundStars = 100;
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
        this.background.width = this.w;
        this.background.height = this.h;
        this.shootingStar.width = this.w;
        this.shootingStar.height = this.h;
        this.center.width = this.w;
        this.center.height = this.h;
        this.ellipse.width = this.w;
        this.ellipse.height = this.h;

        this.backgroundCtx = this.background.getContext('2d');
        this.shootingStarCtx = this.shootingStar.getContext('2d');

        this.centerCtx = this.center.getContext('2d');
        this.centerCtx.setTransform(1, 0, 0, 1, this.w / 2, this.h / 2);
        this.tree = quadtree().extent([[0, 0], [this.w, this.h]]).addAll([[0, 0], [this.w / 2, this.h / 2]]);

        this.ctx = this.ellipse.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, this.w / 2, this.h / 2);
        this.ctx.rotate(-Math.PI / 20);


        this.drawBackground();
        // uncomment this line for debugging
        //this.createEllipse();
        this.createCenter();
        this.createStars();

        // launch animation
        this.timer = timer(this.animate);
        // launch shootingStarsAnimation
        this.shootingStarTimer = timer(this.shootingStarAnimate);
    }

    componentWillUnMount() {
        this.timer.stop();
        this.shootingStarTimer.stop();
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
    };

    shootingStarAnimate = (elapsed) => {
        //console.log(elapsed);
        this.shootingStarCtx.clearRect(-this.w, -this.h, 2 * this.w, 2 * this.h);

        // launch a dice, if 100, add a shootingStar
        const luck = 100;
        if (random(1, luck) === luck) {
            // add shootingStar
            this.shootingStars.push(new ShootingStar(5 * Math.PI / 8, random(0, this.w), random(0, this.h / 2)));
        }
        // remove finished shootingStars
        this.shootingStars = this.shootingStars.filter(star => star.getStep() <= 30);

        this.shootingStars.forEach(star => {
            // move by one step
            star.move();
            // draw new position
            star.draw(this.shootingStarCtx);
        });
    };

    createEllipse = () => {
        let x = -this.w / 2,
            y = -this.h / 2;
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
        this.centerCtx.beginPath();
        this.centerCtx.arc(0, 0, this.radius / 6, 0, Math.PI * 2); // full centered circle
        this.centerCtx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        this.centerCtx.shadowBlur = 50;
        this.centerCtx.shadowColor = 'white';
        this.centerCtx.fill();
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
            const speed = random(0.5, 0.8) * -1;
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
            star.init(teta, x, y, padX, padY, radius, alpha, speed); // init
            this.stars.push(star);
        });
    };

    drawBackground = () => {
        // draw particules
        const padding = 10;
        range(0, this.nbBackgroundStars).forEach(o => {
            this.backgroundCtx.beginPath();
            this.backgroundCtx.arc(random(padding, this.w - padding), random(padding, this.h - padding), random(1, 3), 0, Math.PI * 2);
            this.backgroundCtx.fillStyle = `rgba(255, 255, 255, ${random(0.6, 0.9)})`;
            this.backgroundCtx.fill();
        });
    };

    isInCenter = (x, y) => {
        return Math.pow(x - this.w / 2, 2) + Math.pow(y - this.h / 2, 2) < Math.pow(this.radius / 6, 2);
    };

    centerClick = (e) => {
        const point = clientPoint(this.center, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCenter(x, y)) {
            console.log('clicked');
        }
    };

    centerMouseMove = (e) => {
        const point = clientPoint(this.center, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCenter(x, y)) {
            if (!this.state.over) {
                this.setState({over: true});
            }
        }
        else {
            if (this.state.over) {
                this.setState({over: false});
            }
        }
    };

    wrapperCss = () => {
        return css`
            height: 600px;
            background-color: black;
            width: 100%;
            position: relative;
            cursor: ${this.state.over ? 'pointer' : 'default'};
        `;
    };

    render() {
        return (
            <div ref={(e) => (this.wrapper = e)} className={this.wrapperCss()}>
                <Canvas innerRef={(e) => (this.background = e)} />
                <Canvas innerRef={(e) => (this.shootingStar = e)} />
                <Canvas innerRef={(e) => (this.ellipse = e)} />
                <Canvas innerRef={(e) => (this.center = e)} onClick={this.centerClick}
                        onMouseMove={this.centerMouseMove} />
            </div>
        );
    }
}
