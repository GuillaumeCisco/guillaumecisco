import React, {Component} from 'react';
import PropTypes from 'prop-types';
import range from 'lodash-es/range';
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

    componentWillReceiveProps = (nextProps) => {
        this.resize(nextProps); // redraw on resize
    };

    init = () => {
        const {w, h, size} = this.props;

        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx = this.canvas.getContext('2d');

        range(0, size).forEach((_) => {
            const star = new Star(w, h);
            star.draw(this.ctx);
            this.stars.push(star);
        });
    };

    resize = (props) => {
        const {w, h} = props;

        if (!this.canvas.width || !this.canvas.height) {
            this.stars.forEach((star) => {
                star.reinit(w, h);
            });
        }

        this.canvas.width = w;
        this.canvas.height = h;
        this.ctx.clearRect(0, 0, w, h);
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
