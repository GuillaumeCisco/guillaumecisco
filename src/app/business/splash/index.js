import {useEffect, useState} from 'react';
import loadable from "@loadable/component";

import StaticIntro from './staticIntro';
import style from './style';


const TypedIntro = loadable(() => import(/* webpackChunkName: "typedIntro" */  './typedIntro'));
const Supernova = loadable(() => import(/* webpackChunkName: "supernova" */ './supernova'));
const AsyncModal = loadable(() => import(/* webpackChunkName: "asyncModal" */ './asyncModal'));

const Splash = () => {
    const [ready, setReady] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showTyped, setShowTyped] = useState(false);

    useEffect(() => {
        setIsMobile(
            typeof window !== 'undefined'
            && window.matchMedia('(max-width: 767px)').matches,
        );
    }, []);

    useEffect(() => {
        setShowTyped(!isMobile);
    }, [isMobile]);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        let idleId = null;
        const timeoutId = window.setTimeout(() => {
            if (window.requestIdleCallback) {
                idleId = window.requestIdleCallback(() => setReady(true));
                return;
            }
            setReady(true);
        }, 100);

        return () => {
            window.clearTimeout(timeoutId);
            if (idleId !== null && window.cancelIdleCallback) {
                window.cancelIdleCallback(idleId);
            }
        };
    }, []);

    return (
        <div css={style.container}>
            {showTyped ? <TypedIntro/> : <StaticIntro/>}
            {ready && (
                <>
                    <Supernova/>
                    <AsyncModal/>
                </>
            )}
        </div>
    );
};

export default Splash;
