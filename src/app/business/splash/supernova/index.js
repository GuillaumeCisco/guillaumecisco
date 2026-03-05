import {useCallback, useEffect, useRef, useState} from 'react';
import {pointer} from 'd3-selection';
import {useDispatch, useSelector} from 'react-redux';

import {set as setModalComponent} from '../modal/reducer';
import {intro as setIntro} from '../../../reducers/general';

import style from './style'
import Background from './background/index';
import ShootingStars from './shootingStar/index';
import Core from './core';
import Ellipse from './ellipse/index';
import SpaceShip from './spaceship';
import Planet from './planet';

import mars from './planet/mars.png';
import blue from './planet/blue.png';
import white from './planet/white.png';

function SuperNova() {
  // redux hooks
  const dispatch = useDispatch();
  const intro = useSelector((state) => state.general.intro);

  // constants (old: this.nbBackgroundStars / this.nbStars / this.padding)
  const nbBackgroundStars = 100;
  const nbStars = 1000;
  const padding = 50;

  const wrapperRef = useRef(null);
  const redPlanetRef = useRef(null);
  const bluePlanetRef = useRef(null);
  const orangePlanetRef = useRef(null);

  const [state, setState] = useState({
    over: false,
    loaded: false,
    w: 0,
    h: 0,
    a: 0,
    b: 0,
    coreRadius: 0,
    redPlanet: null,
    bluePlanet: null,
    orangePlanet: null,
  });

  const resize = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const w = wrapper.offsetWidth;
    const h = wrapper.offsetHeight;
    const a = w / 2.5;
    const b = a / 2.3;
    const coreRadius = (a - b) / 5;

    const redPlanet = {
      radius: (a - b) / 12,
      a: (3 * a) / 8,
      b: ((3 * a) / 8) / 2,
    };

    const bluePlanet = {
      radius: (a - b) / 8,
      a: (9 * a) / 8,
      b: ((9 * a) / 8) / 2,
    };

    const orangePlanet = {
      radius: (a - b) / 9,
      a: (4 * a) / 8,
      b: ((4 * a) / 8) / 2,
    };

    setState((prev) => ({
      ...prev,
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
  }, []);

  useEffect(() => {
    resize();

    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [resize]);

  const isInCircle = useCallback(
    (x, y, r, a, b) => ((a - x) ** 2) + ((b - y) ** 2) < (r ** 2),
    [],
  );

  const isInCore = useCallback(
    (x, y) => {
      const {w, h, coreRadius} = state;
      return isInCircle(w / 2, h / 2, coreRadius, x, y);
    },
    [isInCircle, state],
  );

  const isInPlanet = useCallback(
    (a, b, planetRef, radius) => {
      const planet = planetRef.current;
      if (!planet) return false;
      const coord = planet.getCoordinate?.();
      if (!coord) return false;
      return isInCircle(a, b, radius, coord.x, coord.y);
    },
    [isInCircle],
  );

  const click = useCallback(
    (e) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const {redPlanet, orangePlanet, bluePlanet} = state;
      if (!redPlanet || !orangePlanet || !bluePlanet) return;

      const [x, y] = pointer(e, wrapper);

      if (isInCore(x, y)) {
        dispatch(setModalComponent('core'));
        dispatch(setIntro(true));
      }

      if (isInPlanet(x, y, redPlanetRef, redPlanet.radius)) {
        dispatch(setModalComponent('skills'));
      }

      if (isInPlanet(x, y, orangePlanetRef, orangePlanet.radius)) {
        dispatch(setModalComponent('awards'));
      }

      if (isInPlanet(x, y, bluePlanetRef, bluePlanet.radius)) {
        dispatch(setModalComponent('experience'));
      }
    },
    [dispatch, isInCore, isInPlanet, state],
  );

  const mouseMove = useCallback(
    (e) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const {redPlanet, orangePlanet, bluePlanet, over} = state;
      if (!redPlanet || !orangePlanet || !bluePlanet) return;

      const [x, y] = pointer(e, wrapper);

      const nextOver = (
        isInCore(x, y)
        || isInPlanet(x, y, redPlanetRef, redPlanet.radius)
        || isInPlanet(x, y, orangePlanetRef, orangePlanet.radius)
        || isInPlanet(x, y, bluePlanetRef, bluePlanet.radius)
      );

      if (nextOver !== over) {
        setState((prev) => ({...prev, over: nextOver}));
      }
    },
    [isInCore, isInPlanet, state],
  );

  const spaceshipClick = useCallback(() => {
    dispatch(setModalComponent('spaceship'));
  }, [dispatch]);

  const {
    loaded, w, h, coreRadius, a, b, redPlanet, bluePlanet, orangePlanet,
  } = state;

  return (
    <div
      ref={wrapperRef}
      css={style.wrapper(state.over)}
      onClick={click}
      onMouseMove={mouseMove}
    >
      {loaded && (
        <>
          <Background w={w} h={h} size={nbBackgroundStars} />
          <ShootingStars w={w} h={h} />
          <Core w={w} h={h} radius={coreRadius} />
          <Ellipse w={w} h={h} size={nbStars} a={a} b={b} padding={padding} />
          <SpaceShip w={w} h={h} width={48} height={48} onClick={spaceshipClick} />

          {intro && redPlanet && bluePlanet && orangePlanet && (
            <>
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
                ref={redPlanetRef}
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
                ref={bluePlanetRef}
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
                ref={orangePlanetRef}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SuperNova;
