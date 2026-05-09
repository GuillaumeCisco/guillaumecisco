import {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import Canvas from './canvas';

const isMobile =
    typeof window !== 'undefined' &&
    window.innerWidth < 768;

function Core({w, h, radius}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas || !w || !h) {
            return;
        }

        const dpr = isMobile
            ? 1
            : (window.devicePixelRatio || 1);

        canvas.width = w * dpr;
        canvas.height = h * dpr;

        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        const ctx = canvas.getContext('2d');

        ctx.scale(dpr, dpr);

        ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);

        const r = 255;
        const g = 250;
        const b = 230;
        const alpha = 0.9;

        ctx.clearRect(-w, -h, 2 * w, 2 * h);

        ctx.beginPath();

        ctx.arc(
            0,
            0,
            isMobile ? radius * 0.9 : radius,
            0,
            Math.PI * 2,
        );

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        if (!isMobile) {
            ctx.shadowBlur = 100;
            ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
        }

        ctx.fill();
    }, [w, h, radius]);

    return <Canvas ref={canvasRef}/>;
}

Core.propTypes = {
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
};

export default memo(Core);
