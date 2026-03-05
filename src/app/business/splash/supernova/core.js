import {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import Canvas from './canvas';

function Core({w, h, radius}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;

    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);

    const r = 255;
    const g = 250;
    const b = 230;
    const alpha = 0.9;

    ctx.clearRect(-w, -h, 2 * w, 2 * h);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.shadowBlur = 100;
    ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
    ctx.fill();
  }, [w, h, radius]);

  return <Canvas ref={canvasRef} />;
}

Core.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
};

export default memo(Core);
