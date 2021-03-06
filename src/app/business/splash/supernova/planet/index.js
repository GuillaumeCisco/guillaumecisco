/* global Image */

import React from 'react';
import PropTypes from 'prop-types';
import {timer} from 'd3-timer';
import 'd3-transition'; // needed for interpolating radians
import {interpolate} from 'd3-interpolate';

import Canvas from '../canvas';

class Planet extends React.Component {
    state = {};

    componentDidMount() {
        this.init();
    }

    static getDerivedStateFromProps = (props, state) => props;

    componentDidUpdate(prevProps, prevState) {
        this.resize(prevProps); // redraw on resize
    }

    componentWillUnmount() {
        this.timer.stop();
    }

    getCoordinate = () => ({
        x: (this.y * Math.sin(-this.canvasRotation) + this.x * Math.cos(-this.canvasRotation)) + this.w / 2,
        y: (this.y * Math.cos(-this.canvasRotation) - this.x * Math.sin(-this.canvasRotation)) + this.h / 2,
    });

    animate = (elapsed) => {
        const {w, h} = this.props;
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);

        // update teta
        const index = ((this.teta * this.intervals) / (Math.PI * 2)) - 1;

        this.teta = this.radians(index / this.intervals) % (2 * Math.PI);
        // get x, y
        this.x = Math.cos(this.teta) * this.orbitA;
        this.y = Math.sin(this.teta) * this.orbitB;

        this.draw(this.x, this.y);
    };

    draw = (x, y) => {
        // center
        const {radius} = this.props;

        // this.ctx.beginPath();
        // this.ctx.arc(x, y, radius, 0, Math.PI * 2); // full centered circle
        // this.ctx.rotate(-this.canvasRotation);
        this.ctx.drawImage(this.img, x - radius, y - radius, radius * 2, radius * 2);
        // this.ctx.rotate(this.canvasRotation);
        // this.ctx.shadowBlur = 50;
        // this.ctx.shadowColor = color;
        // this.ctx.strokeStyle = color;
        // this.ctx.stroke();
    };

    init = () => {
        const {
            w, h, a, b, intervals, teta, img,
        } = this.props;

        this.originW = this.w = w;
        this.originH = this.h = h;
        this.orbitA = a;
        this.orbitB = b;
        this.intervals = intervals;
        this.teta = (teta || 0) % (2 * Math.PI);

        this.img = new Image();
        this.img.src = img;

        // create center
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);

        this.canvasRotation = -Math.PI / 20;
        this.ctx.rotate(this.canvasRotation);
        // get interpolation all over the circle
        this.radians = interpolate(0, Math.PI * 2);

        this.img.addEventListener('load', () => {
            this.timer = timer(this.animate);
        }, false);
    };

    resize = (props) => {
        const {
            w, h, a, b,
        } = props;
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.ctx.rotate(this.canvasRotation);
        this.orbitA = a;
        this.orbitB = b;
        this.w = w;
        this.h = h;
    };

    render() {
        return (
            <Canvas ref={(e) => {
                this.canvas = e;
            }}
            />
        );
    }
}

Planet.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    intervals: PropTypes.number.isRequired,
    teta: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
};

export default Planet;
