import {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import range from 'lodash-es/range';

import Canvas from '../canvas';
import Star from './star';

function Background({w, h, size}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;

    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    starsRef.current = [];
    range(0, size).forEach(() => {
      const star = new Star(w, h);
      star.draw(ctx);
      starsRef.current.push(star);
    });
  }, [w, h, size]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;

    canvas.width = w;
    canvas.height = h;

    ctx.clearRect(0, 0, w, h);
    starsRef.current.forEach((star) => {
      star.update(w, h);
      star.draw(ctx);
    });
  }, [w, h]);

  return <Canvas ref={canvasRef} />;
}

Background.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default memo(Background);
