import React, {Component} from 'react';
import {range, random} from 'lodash';
import {onlyUpdateForKeys} from 'recompose';

import Canvas from './canvas';

class Core extends Component {
    componentWillReceiveProps = (nextProps) => {
        this.draw(nextProps);
    };

    draw = ({w, h, radius}) => {
        // create center
        this.canvas.width = w;
        this.canvas.height = h;
        const ctx = this.canvas.getContext('2d');

        // center
        ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        // draw
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2); // full centered circle
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowBlur = 50;
        ctx.shadowColor = 'white';
        ctx.fill();
    };
    render() {
        return <Canvas innerRef={e => this.canvas = e} />;
    }
}

export default onlyUpdateForKeys(['w', 'h', 'radius'])(Core);
