import React, {Component} from 'react';
import {range, random} from 'lodash';
import 'd3-transition'; // needed for interpolating radians
import {interpolate} from 'd3-interpolate';
import {timer} from 'd3-timer';
import {onlyUpdateForKeys} from 'recompose';

import Canvas from '../canvas';
import Star from './star';

// get interpolation all over the circle
const radians = interpolate(0, Math.PI * 2);

class Stars extends Component {
    constructor(props) {
        super(props);
        this.stars = [];
    }

    componentWillReceiveProps = (nextProps) => {
        this.create(nextProps);
    };

    componentWillUnMount() {
        this.timer.stop();
    }

    create = ({w, h, size, a, b, padding}) => {

        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.ctx.rotate(-Math.PI / 20);

        // create x gravitational stars
        range(0, size).forEach(o => {
            // get angle
            const teta = radians(o / size);
            // set own radius
            const radius = random(1, 3);
            // set own alpha
            const alpha = random(0.4, 0.8);
            // set speed
            const speed = random(0.5, 0.8) * -1;
            // get real carthesian coordonate
            // see https://www.mathopenref.com/coordparamellipse.html for understanding ellipse parametric equation
            let x = Math.cos(teta) * a,
                y = Math.sin(teta) * b;

            // generate deltaed coordinate
            const padX = (Math.random() > 0.5 ? 1 : -1) * random(0, padding);
            const padY = (Math.random() > 0.5 ? 1 : -1) * random(0, padding);

            x += padX;
            y += padY;

            // instanciate star with knowing how much stars are present and orbit radii
            const star = new Star(size, a, b);
            star.init(teta, x, y, padX, padY, radius, alpha, speed); // init
            this.stars.push(star);
        });

        // launch animation
        this.timer = timer(this.animate);
    };

    animate = (elapsed) => {
        const {w, h} = this.props;

        //console.log(elapsed);
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);
        this.stars.forEach(star => {
            // move by + speed angle
            star.move();
            // draw new position
            star.draw(this.ctx);
        });
    };

    render() {
        return <Canvas innerRef={e => this.canvas = e} />;
    }
}

export default onlyUpdateForKeys(['w', 'h', 'size', 'a', 'b', 'padding'])(Stars);
