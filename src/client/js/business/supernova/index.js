import React, {Component, Fragment} from 'react';
import {range, random} from 'lodash';
import {symbol} from 'd3-shape';
import {clientPoint} from 'd3-selection';
import {css} from 'react-emotion';

import Background from './background/index';
import ShootingStars from './shootingStar/index';
import Core from './core';
import Ellipse from './ellipse/index';
import SpaceShift from './spaceshift';
import Planet from './planet';

// createEllipse = () => {
//     let x = -this.w / 2,
//         y = -this.h / 2;
//     let kappa = .5522848,
//         ox = (this.w / 2) * kappa, // control point offset horizontal
//         oy = (this.h / 2) * kappa, // control point offset vertical
//         xe = x + this.w,           // x-end
//         ye = y + this.h,           // y-end
//         xm = x + this.w / 2,       // x-middle
//         ym = y + this.h / 2;       // y-middle
//
//     this.ctx.beginPath();
//     this.ctx.moveTo(x, ym);
//     this.ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
//     this.ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
//     this.ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
//     this.ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
//     this.ctx.strokeStyle = 'rgb(255, 255, 255)';
//     this.ctx.lineWidth = 3;
//     //ctx.closePath(); // not used correctly, see comments (use to close off open path)
//     this.ctx.stroke();
// };
// createCircle = () => {
//     // create by symbol
//     this.ctx.strokeStyle = 'rgb(255, 255, 255)';
//     this.ctx.lineWidth = 3;
//     const size = Math.PI * Math.pow(this.radius, 2);
//     const sym = symbol();
//     sym.size(size);
//     sym.context(this.ctx);
//     sym(); // will draw on context
//     this.ctx.stroke();
//
//     // create by cancas circle
//     this.ctx.beginPath();
//     this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2);  // full centered circle
//     // create different light power
//     this.ctx.strokeStyle = 'rgb(255, 255, 255)';
//     this.ctx.lineWidth = 3;
//     this.ctx.stroke();
// };


class SuperNova extends Component {
    state = {
        over: false,
        loaded: false,
        w: 0, // width
        h: 0, // height
        a: 0, // ellipse horizontal axis
        b: 0, // ellipse vertical axis
    };

    constructor(props) {
        super(props);

        // background
        this.nbBackgroundStars = 100;

        // ellipse
        this.nbStars = 3000;
        this.padding = 30;
    }

    componentDidMount() {
        // render with correct width and size
        this.resize();

        window.addEventListener('resize', this.resize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
    }

    resize() {
        const w = this.wrapper.offsetWidth,
            h = this.wrapper.offsetHeight,
            a = w / (2.5),
            b = a / 2.3,
            coreRadius = (a - b) / 5,
            redPlanet = {
                radius: (a - b) / 12,
                a: 3 * a / 8,
                b: (3 * a / 8) / 2,
            },
            bluePlanet = {
                radius: (a - b) / 8,
                a: 9 * a / 8,
                b: (9 * a / 8) / 2,
            },
            orangePlanet = {
                radius: (a - b) / 9,
                a: 4 * a / 8,
                b: (4 * a / 8) / 2,
            };

        this.setState({
            ...this.state,
            loaded: true,
            w,
            h,
            a,
            b,
            coreRadius,
            redPlanet,
            bluePlanet,
            orangePlanet,
        });
    }

    // x, y are the coordinate of the center of circle, r is the radius, a, b the coordinate to test
    isInCircle = (x, y, r, a, b) => Math.pow(a - x, 2) + Math.pow(b - y, 2) < Math.pow(r, 2);

    isInCore = (x, y) => {
        // core surface
        return this.isInCircle(this.state.w / 2, this.state.h / 2, this.state.coreRadius, x, y);
    };

    isInPlanet = (a, b, planet, radius) => {
        // get center of planet in current referential
        const {x, y} = planet.getCoordinate();
        return this.isInCircle(a, b, radius, x, y);
    };

    centerClick = (e) => {
        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCore(x, y)) {
            console.log('clicked');
        }

        if (this.isInPlanet(x, y, this.redPlanet, this.state.redPlanet.radius)) {
            console.log('red planet clicked');
        }

        if (this.isInPlanet(x, y, this.orangePlanet, this.state.orangePlanet.radius)) {
            console.log('orange planet clicked');
        }

        if (this.isInPlanet(x, y, this.bluePlanet, this.state.bluePlanet.radius)) {
            console.log('blue planet clicked');
        }
    };

    centerMouseMove = (e) => {
        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCore(x, y) ||
            this.isInPlanet(x, y, this.redPlanet, this.state.redPlanet.radius) ||
            this.isInPlanet(x, y, this.orangePlanet, this.state.orangePlanet.radius) ||
            this.isInPlanet(x, y, this.bluePlanet, this.state.bluePlanet.radius)) {
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
            height: 100%;
            overflow: hidden;
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
                {this.state.loaded &&
                <Fragment>
                    <Background w={this.state.w} h={this.state.h} size={this.nbBackgroundStars} />
                    <ShootingStars w={this.state.w} h={this.state.h} />
                    <Core w={this.state.w}
                          h={this.state.h}
                          radius={this.state.coreRadius} />
                    <Ellipse w={this.state.w}
                             h={this.state.h}
                             size={this.nbStars}
                             a={this.state.a}
                             b={this.state.b}
                             padding={this.padding}
                    />
                    <SpaceShift w={this.state.w}
                                h={this.state.h}
                                width={48}
                                height={48}
                    />
                    <Planet w={this.state.w}
                            h={this.state.h}
                            color={'#97140c'}
                            radius={this.state.redPlanet.radius}
                            a={this.state.redPlanet.a}
                            b={this.state.redPlanet.b}
                            intervals={4000}
                            teta={Math.PI / 2}
                            ref={x => this.redPlanet = x}/>
                    <Planet w={this.state.w}
                            h={this.state.h}
                            color={'#7399b8'}
                            radius={this.state.bluePlanet.radius}
                            a={this.state.bluePlanet.a}
                            b={this.state.bluePlanet.b}
                            intervals={3500}
                            teta={-Math.PI / 2}
                            isSelectable={this.isInBluePlanet}
                            ref={x => this.bluePlanet = x}/>
                    <Planet w={this.state.w}
                            h={this.state.h}
                            color={'#8a451f'}
                            radius={this.state.orangePlanet.radius}
                            a={this.state.orangePlanet.a}
                            b={this.state.orangePlanet.b}
                            intervals={2000}
                            teta={0}
                            ref={x => this.orangePlanet = x}/>
                </Fragment>}
            </div>
        );
    }
}

export default SuperNova;
