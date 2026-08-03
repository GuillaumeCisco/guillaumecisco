import {
    memo, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import {timer} from 'd3-timer';
import 'd3-transition';
import {interpolate} from 'd3-interpolate';

import style from './style';

function Planet({
    w, h, a, b, intervals, teta, radius, label, icon, onSelect,
}) {
    const nodeRef = useRef(null);
    const timerRef = useRef(null);

    const orbitARef = useRef(a);
    const orbitBRef = useRef(b);
    const intervalsRef = useRef(intervals);
    const tetaRef = useRef((teta || 0) % (2 * Math.PI));
    const radiansRef = useRef(interpolate(0, Math.PI * 2));

    const xRef = useRef(0);
    const yRef = useRef(0);

    const canvasRotationRef = useRef(-Math.PI / 20);
    const originWRef = useRef(w);
    const originHRef = useRef(h);

    const draw = () => {
        const node = nodeRef.current;
        if (!node) return;

        const rotation = canvasRotationRef.current;
        const x = xRef.current;
        const y = yRef.current;
        const screenX = (y * Math.sin(-rotation)) + (x * Math.cos(-rotation)) + (originWRef.current / 2);
        const screenY = (y * Math.cos(-rotation)) - (x * Math.sin(-rotation)) + (originHRef.current / 2);

        node.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%)`;
    };

    useEffect(() => {
        orbitARef.current = a;
        orbitBRef.current = b;
        intervalsRef.current = intervals;
        originWRef.current = w;
        originHRef.current = h;
    }, [a, b, intervals, w, h]);

    useEffect(() => {
        if (!nodeRef.current || !w || !h) return undefined;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const updatePosition = () => {
            const index = ((tetaRef.current * intervalsRef.current) / (Math.PI * 2)) - 1;
            tetaRef.current = radiansRef.current(index / intervalsRef.current) % (2 * Math.PI);
            xRef.current = Math.cos(tetaRef.current) * orbitARef.current;
            yRef.current = Math.sin(tetaRef.current) * orbitBRef.current;
            draw();
        };

        updatePosition();
        if (!reducedMotion) {
            timerRef.current?.stop?.();
            timerRef.current = timer(updatePosition);
        }

        return () => {
            timerRef.current?.stop?.();
        };
    }, [w, h]);

    useEffect(() => {
        draw();
    }, [w, h]);

    return (
        <button
            ref={nodeRef}
            type="button"
            css={style.node(radius * 2)}
            onClick={(event) => {
                event.stopPropagation();
                onSelect();
            }}
            aria-label={`Explore ${label}`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}

Planet.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    intervals: PropTypes.number.isRequired,
    teta: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default memo(Planet);
