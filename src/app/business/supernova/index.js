/* global window */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {clientPoint} from 'd3-selection';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import modalActions from '../modal/actions';
import generalActions from '../../actions';

import Background from './background/index';
import ShootingStars from './shootingStar/index';
import Core from './core';
import Ellipse from './ellipse/index';
import SpaceShift from './spaceshift';
import Planet from './planet';

import mars from './planet/mars.png';
import blue from './planet/blue.png';
import white from './planet/white.png';

// import ring from './planet/ring.png';

class SuperNova extends Component {
    constructor(props) {
        super(props);

        // background
        this.nbBackgroundStars = 100;

        // ellipse
        this.nbStars = 1000;
        this.padding = 50;
    }

    state = {
        over: false,
        loaded: false,
        w: 0, // width
        h: 0, // height
        a: 0, // ellipse horizontal axis
        b: 0, // ellipse vertical axis
    };

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
    isInCircle = (x, y, r, a, b) => ((a - x) ** 2) + ((b - y) ** 2) < (r ** 2);

    isInCore = (x, y) =>
        // core surface
        this.isInCircle(this.state.w / 2, this.state.h / 2, this.state.coreRadius, x, y)
    ;

    isInPlanet = (a, b, planet, radius) => {
        // get center of planet in current referential
        if (planet) {
            const {x, y} = planet.getCoordinate();
            return this.isInCircle(a, b, radius, x, y);
        }
    };

    click = (e) => {
        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCore(x, y)) {
            this.props.setComponent('core');
            this.props.setIntro(true);
        }

        if (this.isInPlanet(x, y, this.redPlanet, this.state.redPlanet.radius)) {
            this.props.setComponent('skills');
        }

        if (this.isInPlanet(x, y, this.orangePlanet, this.state.orangePlanet.radius)) {
            this.props.setComponent('awards');
        }

        if (this.isInPlanet(x, y, this.bluePlanet, this.state.bluePlanet.radius)) {
            this.props.setComponent('experience');
        }
    };

    mouseMove = (e) => {
        e.persist();
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
        else if (this.state.over) {
            this.setState({...this.state, over: false});
        }
    };

    spaceshiftClick = (e) => {
        this.props.setComponent('spaceshift');
    };

    wrapperCss = () => css`
            height: 100%;
            overflow: hidden;
            background-color: #111;
            width: 100%;
            position: relative;
            cursor: ${this.state.over ? 'pointer' : 'default'};
        `;

    render() {
        const {intro} = this.props;

        return (
            <div
                ref={(e) => {
                    this.wrapper = e;
                }}
                className={this.wrapperCss()}
                onClick={this.click}
                onMouseMove={this.mouseMove}
            >
                {this.state.loaded &&
                <Fragment>
                    <Background w={this.state.w} h={this.state.h} size={this.nbBackgroundStars} />
                    <ShootingStars w={this.state.w} h={this.state.h} />
                    <Core
                        w={this.state.w}
                        h={this.state.h}
                        radius={this.state.coreRadius}
                    />
                    <Ellipse
                        w={this.state.w}
                        h={this.state.h}
                        size={this.nbStars}
                        a={this.state.a}
                        b={this.state.b}
                        padding={this.padding}
                    />
                    <SpaceShift
                        w={this.state.w}
                        h={this.state.h}
                        width={48}
                        height={48}
                        onClick={this.spaceshiftClick}
                    />
                    {intro && <Fragment>
                        <Planet
                            w={this.state.w}
                            h={this.state.h}
                            color="#97140c"
                            radius={this.state.redPlanet.radius}
                            a={this.state.redPlanet.a}
                            b={this.state.redPlanet.b}
                            intervals={4000}
                            teta={Math.PI / 2}
                            img={mars}
                            ref={(x) => {
                                this.redPlanet = x;
                            }}
                        />
                        <Planet
                            w={this.state.w}
                            h={this.state.h}
                            color="#7399b8"
                            radius={this.state.bluePlanet.radius}
                            a={this.state.bluePlanet.a}
                            b={this.state.bluePlanet.b}
                            intervals={3500}
                            teta={-Math.PI / 2}
                            img={blue}
                            ref={(x) => {
                                this.bluePlanet = x;
                            }}
                        />
                        <Planet
                            w={this.state.w}
                            h={this.state.h}
                            color="#8a451f"
                            radius={this.state.orangePlanet.radius}
                            a={this.state.orangePlanet.a}
                            b={this.state.orangePlanet.b}
                            intervals={2000}
                            teta={0}
                            img={white}
                            ref={(x) => {
                                this.orangePlanet = x;
                            }}
                        />
                    </Fragment>
                    }
                </Fragment>}
            </div>
        );
    }
}

const noop = () => {
};

SuperNova.propTypes = {
    intro: PropTypes.bool,
    setComponent: PropTypes.func,
    setIntro: PropTypes.func,
};

SuperNova.defaultProps = {
    intro: false,
    setComponent: noop,
    setIntro: noop,
};

const mapStateToProps = (state, ownProps) => ({
    intro: state.general.intro,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setComponent: modalActions.component.set,
    setIntro: generalActions.intro.set,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperNova);
