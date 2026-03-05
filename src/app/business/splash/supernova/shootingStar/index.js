import {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import random from 'lodash-es/random';
import {timer} from 'd3-timer';

import Canvas from '../canvas';
import Star from './star';

function ShootingStars({w, h}) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const timerRef = useRef(null);

  const shootingStarsRef = useRef([]);
  const luckRef = useRef(100);
  const maxStepsRef = useRef(70);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !w || !h) return;

    canvas.width = w;
    canvas.height = h;
    ctxRef.current = canvas.getContext('2d');

    timerRef.current?.stop?.();
    timerRef.current = timer(() => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      ctx.clearRect(-w, -h, 2 * w, 2 * h);

      if (random(1, luckRef.current) === luckRef.current) {
        shootingStarsRef.current.push(new Star(w, h));
      }

      shootingStarsRef.current = shootingStarsRef.current.filter(
        (star) => star.getStep() <= maxStepsRef.current,
      );

      shootingStarsRef.current.forEach((star) => {
        star.move();
        star.draw(ctx);
      });
    });

    return () => {
      timerRef.current?.stop?.();
    };
  }, [w, h]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx || !w || !h) return;

    canvas.width = w;
    canvas.height = h;
    shootingStarsRef.current.forEach((star) => star.update(w, h));
  }, [w, h]);

  return <Canvas ref={canvasRef} />;
}

ShootingStars.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
};

export default memo(ShootingStars);
