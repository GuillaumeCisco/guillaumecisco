import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {random} from 'lodash';
import {timer} from 'd3-timer';
import {onlyUpdateForKeys} from 'recompose';

import Canvas from '../canvas';
import Star from './star';

class Stars extends Component {
    constructor(props) {
        super(props);
        this.shootingStars = [];
        this.luck = 100;
        this.maxSteps = 70;
    }

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps = (nextProps) => {
        this.resize(nextProps); // redraw on resize
    };

    componentWillUnmount() {
        this.timer.stop();
    }

    init = () => {
        const {w, h} = this.props;

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
            this.shootingStars.push(new Star(w, h));
        }
        // remove finished shootingStars
        this.shootingStars = this.shootingStars.filter(star => star.getStep() <= this.maxSteps);

        this.shootingStars.forEach((star) => {
            // move by one step
            star.move();
            // draw new position
            star.draw(this.ctx);
        });
    };

    resize = (props) => {
        const {w, h} = props;

        this.canvas.width = w;
        this.canvas.height = h;
        this.shootingStars.forEach((star) => {
            star.update(w, h);
        });
    };

    render() {
        return (<Canvas innerRef={(e) => {
            this.canvas = e;
        }}
        />);
    }
}

Stars.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
};

export default onlyUpdateForKeys(['w', 'h'])(Stars);
