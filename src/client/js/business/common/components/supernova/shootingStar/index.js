import React, {Component} from 'react';
import {range, random} from 'lodash';
import {timer} from 'd3-timer';
import {onlyUpdateForKeys} from 'recompose';

import Canvas from '../canvas';
import ShootingStar from './shootingStar';

class ShootingStars extends Component {
    constructor(props) {
        super(props);
        this.shootingStars = [];
        this.luck = 100;
        this.maxSteps = 30;
    }

    componentWillReceiveProps = (nextProps) => {
        this.create(nextProps);
    };

    componentWillUnMount() {
        this.timer.stop();
    }

    create = ({w, h}) => {
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');
        this.timer = timer(this.animate);
    };

    animate = (elapsed) => {
        const {w, h} = this.props;

        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);

        // launch a dice, if 100, add a shootingStar
        if (random(1, this.luck) === this.luck) { // add shootingStar
            this.shootingStars.push(new ShootingStar(5 * Math.PI / 8, random(0, w), random(0, h / 2)));
        }
        // remove finished shootingStars
        this.shootingStars = this.shootingStars.filter(star => star.getStep() <= this.maxSteps);

        this.shootingStars.forEach(star => {
            // move by one step
            star.move();
            // draw new position
            star.draw(this.ctx);
        });
    };

    render() {
        return <Canvas innerRef={e => this.canvas = e} />;
    }
}

export default onlyUpdateForKeys(['w', 'h'])(ShootingStars);
