import React from 'react';
import PropTypes from 'prop-types';
import {random} from 'lodash';
import {interpolate} from 'd3-interpolate';
import {timer} from 'd3-timer';
import 'd3-transition'; // needed for interpolating radians

class SpaceShift extends React.Component {
    state = {
        style: {
            zIndex: 1,
            position: 'absolute',
        },
        isSpaceShift: false,
        step: 0,
    };

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps = () => {
        this.resize(); // redraw on resize
    };

    componentWillUnmount() {
        this.timer.stop();
    }

    getX = () => this.w * this.x / this.originW;

    setX = () => {
        const {width} = this.props;
        this.x = random(width, this.w - width);
        return this.x;
    };

    init = () => {
        const {
            h, w, width, height,
        } = this.props;
        this.luck = 1000;
        this.i = interpolate(-width, h);
        this.originW = this.w = w;
        this.originH = this.h = h;

        this.setX();
        this.y = h - height;

        this.setState({
            style: {
                ...this.state.style,
                top: this.y,
                left: this.x,
            },
        });

        this.timer = timer(this.animate);
    };

    animate = (elapsed) => {
        if (!this.state.isSpaceShift) {
            if (random(0, this.luck) === this.luck && this.state.step <= 100) {
                this.setState({
                    ...this.state,
                    isSpaceShift: true,
                });
            }
        }
        else if (this.state.step <= 100) {
            // console.log(this.state.step, this.i(this.state.step / 100));
            this.setState({
                ...this.state,
                style: {
                    ...this.state.style,
                    top: this.h - this.props.height - this.i(this.state.step / 100),
                    left: this.state.step === 100 ? this.setX() : this.getX(),
                },
                step: this.state.step === 100 ? 0 : this.state.step + 1,
                isSpaceShift: this.state.step < 100,
            });
        }
    };

    resize = () => {
        const {w, h} = this.props;

        this.w = w;
        this.h = h;
    };

    render() {
        const {width, height, onClick} = this.props;

        return this.state.isSpaceShift ? <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 512 512"
            style={this.state.style}
            onClick={onClick}
        >
            <circle fill="#FFDA44" cx="256" cy="428.973" r="55.351" />
            <path
                fill="#FF9811"
                d="M290.595,401.297c0,16.812-8.271,33.84-24.583,50.612c-3.363,3.458-6.765,6.58-10.012,9.335c-3.246-2.755-6.649-5.877-10.012-9.335c-16.312-16.771-24.583-33.8-24.583-50.612H290.595 M256,359.784l-76.108,41.514C179.892,470.487,256,512,256,512s76.108-41.513,76.108-110.703L256,359.784z"
            />
            <path
                fill="#FF5023"
                d="M256,359.784v41.514h34.595c0,16.812-8.271,33.84-24.583,50.612c-3.363,3.458-6.765,6.58-10.012,9.335V512c0,0,76.108-41.513,76.108-110.703L256,359.784z"
            />
            <polygon
                fill="#3C5D76"
                points="84.522,252.827 65.075,359.784 262.919,359.784 262.919,74.43 "
            />
            <polygon
                fill="#1E2E3B"
                points="427.479,252.827 249.081,74.43 249.081,359.784 446.925,359.784 "
            />
            <path
                fill="#CCE9F9"
                d="M332.108,401.297V110.703C332.108,41.514,256,0,256,0s-76.108,41.514-76.108,110.703v290.595H332.108z"
            />
            <path
                fill="#93C7EF"
                d="M332.108,401.297V110.703C332.108,41.514,256,0,256,0v401.297H332.108z"
            />
            <g>
                <path
                    fill="#1E2E3B"
                    d="M283.676,110.703c0-15.285-12.392-27.676-27.676-27.676l0,0c-15.284,0-27.676,12.39-27.676,27.676H283.676z"
                />
                <rect
                    x="235.243"
                    y="262.919"
                    fill="#1E2E3B"
                    width="41.514"
                    height="96.865"
                />
            </g>
            <rect
                x="179.892"
                y="359.784"
                fill="#78B9EB"
                width="152.216"
                height="41.514"
            />
            <rect
                x="256"
                y="359.784"
                fill="#5A8BB0"
                width="76.108"
                height="41.514"
            />
        </svg> : null;
    }
}

SpaceShift.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SpaceShift;
