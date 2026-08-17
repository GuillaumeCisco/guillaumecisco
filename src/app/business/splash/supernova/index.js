import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import {set as setModalComponent} from '../modal/reducer';

import style from './style'
import Background from './background/index';
import ShootingStars from './shootingStar/index';
import Core from './core';
import Ellipse from './ellipse/index';
import SpaceShip from './spaceship';
import Planet from './planet';
import {useIsMobile} from '../mobileContext';
import {AgentsIcon, ProductIcon, SystemsIcon} from './orbitIcons';

function SuperNova() {
    // redux hooks
    const dispatch = useDispatch();
    const isMobile = useIsMobile();
    const [isConstrainedDevice, setIsConstrainedDevice] = useState(false);
    const [isMobileWarm, setIsMobileWarm] = useState(false);

    // constants (old: this.nbBackgroundStars / this.nbStars / this.padding)
    const nbBackgroundStars = isMobile
        ? (isConstrainedDevice ? 10 : (isMobileWarm ? 18 : 14))
        : 72;
    const nbStars = isMobile
        ? (isConstrainedDevice ? 54 : (isMobileWarm ? 84 : 64))
        : 360;
    const padding = isMobile ? 7 : 16;

    const wrapperRef = useRef(null);
    const [state, setState] = useState({
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

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const lowCpu = (window.navigator.hardwareConcurrency || 4) <= 4;

        setIsConstrainedDevice(reducedMotion || lowCpu);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || !isMobile || isConstrainedDevice) return undefined;

        const timeoutId = window.setTimeout(() => setIsMobileWarm(true), 4000);
        return () => window.clearTimeout(timeoutId);
    }, [isMobile, isConstrainedDevice]);

    const resize = useCallback(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const w = wrapper.offsetWidth;
        const h = wrapper.offsetHeight;
        const a = isMobile
            ? Math.min(w * 0.29, h * 0.38)
            : w / 2.5;
        const b = a / (isMobile ? 3 : 2.3);
        const coreRadius = (a - b) / (isMobile ? 3.2 : 5);
        const nodeRadius = isMobile ? 20 : 34;
        const baseOrbit = isMobile
            ? { a: a * 1.28, b: b * 1.45 }
            : { a, b };
        const orbitScales = isMobile
            ? { red: 0.72, blue: 1.14, orange: 0.93 }
            : { red: 0.52, blue: 1.06, orange: 0.78 };
        const createOrbit = (scale) => ({
            a: baseOrbit.a * scale,
            b: baseOrbit.b * scale,
        });

        const redPlanet = {
            radius: nodeRadius,
            ...createOrbit(orbitScales.red),
        };

        const bluePlanet = {
            radius: nodeRadius,
            ...createOrbit(orbitScales.blue),
        };

        const orangePlanet = {
            radius: nodeRadius,
            ...createOrbit(orbitScales.orange),
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
    }, [isMobile]);

    useEffect(() => {
        resize();

        window.addEventListener('resize', resize);
        window.addEventListener('orientationchange', resize);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('orientationchange', resize);
        };
    }, [resize]);

    const openPanel = useCallback((type) => {
        dispatch(setModalComponent(type));
    }, [dispatch]);

    const spaceshipClick = useCallback(() => {
        dispatch(setModalComponent('spaceship'));
    }, [dispatch]);

    const {
        loaded, w, h, coreRadius, a, b, redPlanet, bluePlanet, orangePlanet,
    } = state;

    return (
        <div
            ref={wrapperRef}
            css={style.wrapper}
        >
            {loaded && (
                <>
                    <Background w={w} h={h} size={nbBackgroundStars}/>
                    {!isMobile && (
                        <ShootingStars w={w} h={h}/>
                    )}
                    <Core radius={coreRadius} onSelect={() => openPanel('core')}/>
                    <Ellipse w={w} h={h} size={nbStars} a={a} b={b} padding={padding}/>
                    {!isMobile && (
                        <SpaceShip w={w} h={h} width={48} height={48} onClick={spaceshipClick}/>
                    )}

                    {redPlanet && bluePlanet && orangePlanet && (
                        <>
                            <Planet
                                w={w}
                                h={h}
                                radius={redPlanet.radius}
                                a={redPlanet.a}
                                b={redPlanet.b}
                                intervals={6200}
                                teta={0}
                                label="Agents"
                                icon={<AgentsIcon/>}
                                onSelect={() => openPanel('skills')}
                            />
                            <Planet
                                w={w}
                                h={h}
                                radius={bluePlanet.radius}
                                a={bluePlanet.a}
                                b={bluePlanet.b}
                                intervals={6200}
                                teta={(2 * Math.PI) / 3}
                                label="Systems"
                                icon={<SystemsIcon/>}
                                onSelect={() => openPanel('experience')}
                            />
                            <Planet
                                w={w}
                                h={h}
                                radius={orangePlanet.radius}
                                a={orangePlanet.a}
                                b={orangePlanet.b}
                                intervals={6200}
                                teta={(4 * Math.PI) / 3}
                                label="Product"
                                icon={<ProductIcon/>}
                                onSelect={() => openPanel('awards')}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default SuperNova;
