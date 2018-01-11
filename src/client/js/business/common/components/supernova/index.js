import React, {Component} from 'react';
import {range, random} from 'lodash';
import {symbol} from 'd3-shape';
import {clientPoint} from 'd3-selection';
import {css} from 'react-emotion';

import Background from './background';
import ShootingStars from './shootingStar';
import Core from './core';
import Ellipse from './ellipse';

export default class SuperNova extends Component {
    state = {
        over: false,
        w: 0,
        h: 0,
    };

    constructor(props) {
        super(props);

        // background
        this.nbBackgroundStars = 100;

        // ellipse
        this.nbStars = 3000;
        this.a = 400;
        this.b = 150;
        this.padding = 30;

        // core
        this.radius = (this.a - this.b) / 6;
    }

    componentDidMount() {
        // get width/height of container
        this.w = this.wrapper.offsetWidth;
        this.h = this.wrapper.offsetHeight;

        // render with correct width and size
        this.setState({
            ...this.state,
            w: this.w,
            h: this.h,
        });
    }

    createEllipse = () => {
        let x = -this.w / 2,
            y = -this.h / 2;
        let kappa = .5522848,
            ox = (this.w / 2) * kappa, // control point offset horizontal
            oy = (this.h / 2) * kappa, // control point offset vertical
            xe = x + this.w,           // x-end
            ye = y + this.h,           // y-end
            xm = x + this.w / 2,       // x-middle
            ym = y + this.h / 2;       // y-middle

        this.ctx.beginPath();
        this.ctx.moveTo(x, ym);
        this.ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        this.ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        this.ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        this.ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        this.ctx.strokeStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 3;
        //ctx.closePath(); // not used correctly, see comments (use to close off open path)
        this.ctx.stroke();
    };

    createCircle = () => {
        // create by symbol
        this.ctx.strokeStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 3;
        const size = Math.PI * Math.pow(this.radius, 2);
        const sym = symbol();
        sym.size(size);
        sym.context(this.ctx);
        sym(); // will draw on context
        this.ctx.stroke();

        // create by cancas circle
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2);  // full centered circle
        // create different light power
        this.ctx.strokeStyle = 'rgb(255, 255, 255)';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    };

    isInCenter = (x, y) => {
        // core surface
        return Math.pow(x - this.w / 2, 2) + Math.pow(y - this.h / 2, 2) < Math.pow(this.radius, 2);
    };

    centerClick = (e) => {
        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCenter(x, y)) {
            console.log('clicked');
        }
    };

    centerMouseMove = (e) => {
        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCenter(x, y)) {
            if (!this.state.over) {
                this.setState({...this.state, over: true});
            }
        }
        else {
            if (this.state.over) {
                this.setState({...this.state, over: false});
            }
        }
    };

    wrapperCss = () => {
        return css`
            height: 600px;
            background-color: black;
            width: 100%;
            position: relative;
            cursor: ${this.state.over ? 'pointer' : 'default'};
        `;
    };

    render() {
        return (
            <div ref={e => this.wrapper = e}
                 className={this.wrapperCss()}
                 onClick={this.centerClick}
                 onMouseMove={this.centerMouseMove}>
                <Background w={this.state.w} h={this.state.h} size={this.nbBackgroundStars} />
                <ShootingStars w={this.state.w} h={this.state.h} />
                <Core w={this.state.w}
                      h={this.state.h}
                      radius={this.radius} />
                <Ellipse w={this.state.w}
                         h={this.state.h}
                         size={this.nbStars}
                         a={this.a}
                         b={this.b}
                         padding={this.padding}
                />
            </div>
        );
    }
}
