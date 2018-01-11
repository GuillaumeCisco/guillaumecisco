import React, {Component} from 'react';
import {range, random} from 'lodash';
import {onlyUpdateForKeys} from 'recompose';
import Canvas from './canvas';

class Background extends Component {
    componentWillReceiveProps = (nextProps) => {
        this.draw(nextProps);
    };

    draw = ({w, h, size}) => {
        this.canvas.width = w;
        this.canvas.height = h;
        const ctx = this.canvas.getContext('2d');

        // draw particules
        const padding = 10;
        range(0, size).forEach(_ => {
            ctx.beginPath();
            ctx.arc(random(padding, w - padding), random(padding, h - padding), random(1, 3), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${random(0.6, 0.9)})`;
            ctx.fill();
        });
    };

    render() {
        return <Canvas innerRef={e => this.canvas = e} />;
    }
}

export default onlyUpdateForKeys(['w', 'h', 'size'])(Background);
