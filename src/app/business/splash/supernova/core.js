import React, {Component} from 'react';
import {onlyUpdateForKeys} from 'recompose';
import PropTypes from 'prop-types';

import Canvas from './canvas';

class Core extends Component {
    state = {};

    componentDidMount() {
        this.init();
    }

    static getDerivedStateFromProps = (props, state) => props;

    componentDidUpdate(prevProps, prevState) {
        this.resize(prevProps); // redraw on resize
    }

    init = () => {
        const {w, h, radius} = this.props;

        // create center
        this.canvas.width = w;
        this.canvas.height = h;
        this.radius = radius;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.r = 255;
        this.g = 250;
        this.b = 230;
        this.alpha = 0.9;
        this.draw();
    };

    draw = () => {
        // center
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2); // full centered circle
        this.ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
        this.ctx.shadowBlur = 100;
        this.ctx.shadowColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
        this.ctx.fill();
    };

    resize = (props) => {
        const {w, h, radius} = props;
        this.canvas.width = w;
        this.canvas.height = h;
        this.radius = radius;
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.draw();
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

Core.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
};

export default onlyUpdateForKeys(['w', 'h', 'radius'])(Core);
