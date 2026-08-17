import {
    memo, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import {timer} from 'd3-timer';
import 'd3-transition';
import {interpolate} from 'd3-interpolate';

import style from './style';

const ORBIT_ROTATION = -Math.PI / 20;

const getCoordinates = (angle, a, b) => ({
    x: Math.cos(angle) * a,
    y: Math.sin(angle) * b,
});

const getTransform = (x, y, w, h) => {
    const screenX = (y * Math.sin(-ORBIT_ROTATION)) +
        (x * Math.cos(-ORBIT_ROTATION)) +
        (w / 2);
    const screenY = (y * Math.cos(-ORBIT_ROTATION)) -
        (x * Math.sin(-ORBIT_ROTATION)) +
        (h / 2);

    return `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%)`;
};

function Planet({
    w, h, a, b, intervals, teta, radius, label, icon, onSelect,
}) {
    const nodeRef = useRef(null);
    const timerRef = useRef(null);

    const initialAngleRef = useRef((teta || 0) % (2 * Math.PI));
    const initialCoordinatesRef = useRef(
        getCoordinates(initialAngleRef.current, a, b),
    );
    const initialStyleRef = useRef({
        transform: getTransform(
            initialCoordinatesRef.current.x,
            initialCoordinatesRef.current.y,
            w,
            h,
        ),
    });

    const orbitARef = useRef(a);
    const orbitBRef = useRef(b);
    const intervalsRef = useRef(intervals);
    const tetaRef = useRef(initialAngleRef.current);
    const radiansRef = useRef(interpolate(0, Math.PI * 2));

    const xRef = useRef(initialCoordinatesRef.current.x);
    const yRef = useRef(initialCoordinatesRef.current.y);

    const originWRef = useRef(w);
    const originHRef = useRef(h);

    const draw = () => {
        const node = nodeRef.current;
        if (!node) return;

        const x = xRef.current;
        const y = yRef.current;

        node.style.transform = getTransform(
            x,
            y,
            originWRef.current,
            originHRef.current,
        );
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
            style={initialStyleRef.current}
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
