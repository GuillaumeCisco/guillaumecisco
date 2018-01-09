import React, {Component} from 'react';
import {range} from 'lodash';
import {transition} from 'd3-transition';
import {interpolate} from 'd3-interpolate';
import {symbol} from 'd3-shape';
import {timer} from 'd3-timer';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    height: 600px;
    background-color: black;
    width: 100%;
    position: relative;
`;

const Canvas = styled('canvas')`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

// get interpolation all over the circle
const radians = interpolate(0, Math.PI * 2);

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

const Star = function (nbStars, orbitA, orbitB) {

    this.nbStars = nbStars;
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
        const index = ((this.nbStars * this.teta) / (2 * Math.PI)) + this.speed;
        // update with new angle
        this.teta = ((index * 2 * Math.PI) / this.nbStars) % (2 * Math.PI);
        let x = Math.cos(this.teta) * this.orbitA,
            y = Math.sin(this.teta) * this.orbitB;


        // update carthesian coordinate by respecting initial randomized padding
        this.x = x + this.padX;
        this.y = y + this.padY;

        // make it randomly brite
        this.alpha = this.alpha === 1 ? getRandomArbitrary(0.4, 0.8) : (Math.random() < 0.001 ? 1 : this.alpha);
    };

    return {
        init,
        draw,
        move,
    };
};

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
        //this.createEllipse(ellipsectx);
        this.createStars();
        this.createCenter();

        // launch animation
        this.timer = timer(this.animate);
    }

    componentWillUnMount () {
        this.timer.stop();
    }

    animate = (elapsed) => {
        //console.log(elapsed);
        this.ctx.clearRect(-this.w, -this.h, 2 * this.w, 2 * this.h);
        this.stars.forEach(star => {
            // move by +1 angle
            star.move();
            // draw new position
            star.draw(this.ctx);
        });
        this.createCenter(this.ctx);
    };

    createEllipse = () => {
        // create ellipse
        const size = Math.PI * Math.pow(this.radius, 2);
        const sym = symbol();
        sym.size(size);
        sym.context(this.ctx);
        sym(); // will draw on context
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
            const radius = getRandomArbitrary(1, 3);
            // set own alpha
            const alpha = getRandomArbitrary(0.4, 0.8);
            // set speed
            const speed = getRandomArbitrary(0.5, 0.8);
            // get real carthesian coordonate
            // see https://www.mathopenref.com/coordparamellipse.html for undesrtanding ellipse parametric equation
            let x = Math.cos(teta) * this.a,
                y = Math.sin(teta) * this.b;

            // generate deltaed coordinate
            const padX = (Math.random() > 0.5 ? 1 : -1) * getRandomArbitrary(0, this.padding);
            const padY = (Math.random() > 0.5 ? 1 : -1) * getRandomArbitrary(0, this.padding);

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
                <Canvas innerRef={(e) => (this.ellipse = e)} />
            </Wrapper>
        );
    }
}
