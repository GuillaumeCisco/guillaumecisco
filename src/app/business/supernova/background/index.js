import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {range} from 'lodash';
import {onlyUpdateForKeys} from 'recompose';
import Canvas from '../canvas';

import Star from './star';

class Background extends Component {
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

    init = () => {
        const {w, h, size} = this.props;

        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');

        range(0, size).forEach((_) => {
            const star = new Star(w, h);
            this.stars.push(star);
            star.draw(this.ctx);
        });
    };

    resize = () => {
        const {w, h} = this.props;
        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx.clearRect(-w, -h, 2 * w, 2 * h);
        this.stars.forEach((star) => {
            star.update(w, h);
            star.draw(this.ctx);
        });
    };

    render() {
        return (<Canvas innerRef={(e) => {
 this.canvas = e;
}}
        />);
    }
}

Background.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
};

export default onlyUpdateForKeys(['w', 'h', 'size'])(Background);
