/* global window */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {clientPoint} from 'd3-selection';
import {css} from 'react-emotion';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import modalActions from '../modal/actions';
import generalActions from '../../../actions';

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
        window.addEventListener('orientationchange', this.resize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize.bind(this));
        window.removeEventListener('orientationchange', this.resize.bind(this));
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

        this.setState(state => ({
            ...state,
            loaded: true,
            w,
            h,
            a,
            b,
            coreRadius,
            redPlanet,
            bluePlanet,
            orangePlanet,
        }));
    }

    // x, y are the coordinate of the center of circle, r is the radius, a, b the coordinate to test
    isInCircle = (x, y, r, a, b) => ((a - x) ** 2) + ((b - y) ** 2) < (r ** 2);

    isInCore = (x, y) => {
        const {w, h, coreRadius} = this.state;

        this.isInCircle(w / 2, h / 2, coreRadius, x, y);
    };

    isInPlanet = (a, b, planet, radius) => {
        // get center of planet in current referential
        if (planet) {
            const {x, y} = planet.getCoordinate();
            return this.isInCircle(a, b, radius, x, y);
        }
    };

    click = (e) => {
        const {setComponent, setIntro} = this.props;
        const {redPlanet, orangePlanet, bluePlanet} = this.state;

        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCore(x, y)) {
            setComponent('core');
            setIntro(true);
        }

        if (this.isInPlanet(x, y, this.redPlanet, redPlanet.radius)) {
            setComponent('skills');
        }

        if (this.isInPlanet(x, y, this.orangePlanet, orangePlanet.radius)) {
            setComponent('awards');
        }

        if (this.isInPlanet(x, y, this.bluePlanet, bluePlanet.radius)) {
            setComponent('experience');
        }
    };

    mouseMove = (e) => {
        const {
redPlanet, orangePlanet, bluePlanet, over,
} = this.state;

        e.persist();
        const point = clientPoint(this.wrapper, e);
        const x = point[0];
        const y = point[1];

        if (this.isInCore(x, y)
            || this.isInPlanet(x, y, this.redPlanet, redPlanet.radius)
            || this.isInPlanet(x, y, this.orangePlanet, orangePlanet.radius)
            || this.isInPlanet(x, y, this.bluePlanet, bluePlanet.radius)) {
            if (!over) {
                this.setState(state => ({...state, over: true}));
            }
        }
        else if (over) {
            this.setState(state => ({...state, over: false}));
        }
    };

    spaceshiftClick = (e) => {
        const {setComponent} = this.props;

        setComponent('spaceshift');
    };

    wrapperCss = () => {
        const {over} = this.state;

        return css`
            height: 100%;
            overflow: hidden;
            background-color: #111;
            width: 100%;
            position: relative;
            cursor: ${over ? 'pointer' : 'default'};
        `;
    };

    render() {
        const {intro} = this.props;
        const {
loaded, w, h, coreRadius, a, b, redPlanet, bluePlanet, orangePlanet,
} = this.state;

        return (
            <div
                ref={(e) => {
                    this.wrapper = e;
                }}
                className={this.wrapperCss()}
                onClick={this.click}
                onMouseMove={this.mouseMove}
            >
                {loaded
                && (
                <Fragment>
                    <Background w={w} h={h} size={this.nbBackgroundStars} />
                    <ShootingStars w={w} h={h} />
                    <Core
                        w={w}
                        h={h}
                        radius={coreRadius}
                    />
                    <Ellipse
                        w={w}
                        h={h}
                        size={this.nbStars}
                        a={a}
                        b={b}
                        padding={this.padding}
                    />
                    <SpaceShift
                        w={w}
                        h={h}
                        width={48}
                        height={48}
                        onClick={this.spaceshiftClick}
                    />
                    {intro && (
                    <Fragment>
                        <Planet
                            w={w}
                            h={h}
                            color="#97140c"
                            radius={redPlanet.radius}
                            a={redPlanet.a}
                            b={redPlanet.b}
                            intervals={4000}
                            teta={Math.PI / 2}
                            img={mars}
                            ref={(x) => {
                                this.redPlanet = x;
                            }}
                        />
                        <Planet
                            w={w}
                            h={h}
                            color="#7399b8"
                            radius={bluePlanet.radius}
                            a={bluePlanet.a}
                            b={bluePlanet.b}
                            intervals={3500}
                            teta={-Math.PI / 2}
                            img={blue}
                            ref={(x) => {
                                this.bluePlanet = x;
                            }}
                        />
                        <Planet
                            w={w}
                            h={h}
                            color="#8a451f"
                            radius={orangePlanet.radius}
                            a={orangePlanet.a}
                            b={orangePlanet.b}
                            intervals={2000}
                            teta={0}
                            img={white}
                            ref={(x) => {
                                this.orangePlanet = x;
                            }}
                        />
                    </Fragment>
)
                    }
                </Fragment>
)}
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
