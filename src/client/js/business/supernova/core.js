import React, {Component} from 'react';
import {range, random} from 'lodash';
import {onlyUpdateForKeys} from 'recompose';

import Canvas from './canvas';

class Core extends Component {
    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps = () => {
        this.resize(); // redraw on resize
    };

    init = () => {
        const {w, h} = this.props;

        // create center
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.draw();
    };

    draw = () => {
        // center
        const {radius} = this.props;

        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius, 0, Math.PI * 2); // full centered circle
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        this.ctx.shadowBlur = 50;
        this.ctx.shadowColor = 'white';
        this.ctx.fill();
    };

    resize = () => {
        const {w, h} = this.props;
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);
        this.ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        this.draw();
    };

    render() {
        return <Canvas innerRef={e => this.canvas = e} />;
    }
}

export default onlyUpdateForKeys(['w', 'h', 'radius'])(Core);
