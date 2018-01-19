import React, {Component} from 'react';
import {range, random} from 'lodash';
import {timer} from 'd3-timer';
import {onlyUpdateForKeys} from 'recompose';
import 'd3-transition'; // needed for interpolating radians
import {interpolate} from 'd3-interpolate';

import Canvas from '../canvas';
import Star from './star';

class Stars extends Component {
    constructor(props) {
        super(props);
        this.stars = [];
    }

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps = () => {
        this.resize(); // redraw on resize
    };

    componentWillUnMount() {
        this.timer.stop();
    }

    init = () => {
        const {
            w, h, size, a, b, padding,
        } = this.props;

        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.ctx.rotate(-Math.PI / 20);

        // get interpolation all over the circle
        const radians = interpolate(0, Math.PI * 2);

        // create x gravitational stars
        range(0, size).forEach((o) => {
            // get angle
            const teta = radians(o / size);
            const star = new Star(w, h, size, a, b, teta, padding);
            this.stars.push(star);
        });

        // launch animation
        this.timer = timer(this.animate);
    };

    animate = (elapsed) => {
        const {w, h} = this.props;

        // console.log(elapsed);
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);
        this.stars.forEach((star) => {
            // move by + speed angle
            star.move();
            // draw new position
            star.draw(this.ctx);
        });
    };

    resize = () => {
        const {
            w, h, a, b,
        } = this.props;
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.ctx.rotate(-Math.PI / 20);
        this.stars.forEach((star) => {
            star.update(a, b);
        });
    };

    render() {
        return <Canvas innerRef={e => this.canvas = e} />;
    }
}

export default onlyUpdateForKeys(['w', 'h', 'size', 'a', 'b', 'padding'])(Stars);
