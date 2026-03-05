import {
    forwardRef, memo, useEffect, useImperativeHandle, useRef,
} from 'react';
import PropTypes from 'prop-types';
import {timer} from 'd3-timer';
import 'd3-transition';
import {interpolate} from 'd3-interpolate';

import Canvas from '../canvas';

const Planet = forwardRef(function Planet(
    {
        w, h, a, b, intervals, teta, img, radius,
    },
    ref,
) {
    const canvasRef = useRef(null);

    const ctxRef = useRef(null);
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

    useImperativeHandle(ref, () => ({
        getCoordinate: () => ({
            x: (yRef.current * Math.sin(-canvasRotationRef.current) + xRef.current * Math.cos(-canvasRotationRef.current)) + originWRef.current / 2,
            y: (yRef.current * Math.cos(-canvasRotationRef.current) - xRef.current * Math.sin(-canvasRotationRef.current)) + originHRef.current / 2,
        }),
    }), []);

    useEffect(() => {
        orbitARef.current = a;
        orbitBRef.current = b;
        intervalsRef.current = intervals;
        originWRef.current = w;
        originHRef.current = h;
    }, [a, b, intervals, w, h]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !w || !h) return;

        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;

        ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        ctx.rotate(canvasRotationRef.current);

        const image = new Image();
        image.src = img;

        const onLoad = () => {
            timerRef.current?.stop?.();
            timerRef.current = timer(() => {
                const c = ctxRef.current;
                if (!c) return;

                c.clearRect(-w, -h, 2 * w, 2 * h);

                const index = ((tetaRef.current * intervalsRef.current) / (Math.PI * 2)) - 1;
                tetaRef.current = radiansRef.current(index / intervalsRef.current) % (2 * Math.PI);

                xRef.current = Math.cos(tetaRef.current) * orbitARef.current;
                yRef.current = Math.sin(tetaRef.current) * orbitBRef.current;

                c.drawImage(
                    image,
                    xRef.current - radius,
                    yRef.current - radius,
                    radius * 2,
                    radius * 2,
                );
            });
        };

        image.addEventListener('load', onLoad, false);

        return () => {
            image.removeEventListener('load', onLoad, false);
            timerRef.current?.stop?.();
        };
    }, [img, radius, w, h]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx || !w || !h) return;

        canvas.width = w;
        canvas.height = h;
        ctx.clearRect(-w, -h, 2 * w, 2 * h);
        ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
        ctx.rotate(canvasRotationRef.current);
    }, [w, h]);

    return <Canvas ref={canvasRef}/>;
});

Planet.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
    intervals: PropTypes.number.isRequired,
    teta: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
};

export default memo(Planet);
