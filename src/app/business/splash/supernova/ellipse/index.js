import {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import range from 'lodash-es/range';
import {timer} from 'd3-timer';
import 'd3-transition';
import {interpolate} from 'd3-interpolate';

import Canvas from '../canvas';
import Star from './star';

function Ellipse({
  w, h, size, a, b, padding,
}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const starsRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;

    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(-Math.PI / 20);

    const radians = interpolate(0, Math.PI * 2);

    starsRef.current = [];
    range(0, size).forEach((o) => {
      const teta = radians(o / size);
      starsRef.current.push(new Star(w, h, size, a, b, teta, padding));
    });

    timerRef.current?.stop?.();
    timerRef.current = timer(() => {
      ctx.clearRect(-w, -h, 2 * w, 2 * h);
      starsRef.current.forEach((star) => {
        star.move();
        star.draw(ctx);
      });
    });

    return () => {
      timerRef.current?.stop?.();
    };
  }, [w, h, size, a, b, padding]);

  useEffect(() => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas || !w || !h) return;

    canvas.width = w;
    canvas.height = h;
    ctx.setTransform(1, 0, 0, 1, w / 2, h / 2);
    ctx.rotate(-Math.PI / 20);

    starsRef.current.forEach((star) => {
      star.update(a, b);
    });
  }, [w, h, a, b]);

  return <Canvas ref={canvasRef} />;
}

Ellipse.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
};

export default memo(Ellipse);
