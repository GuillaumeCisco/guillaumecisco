import {useEffect, useState} from 'react';
import loadable from "@loadable/component";
import {useSelector} from "react-redux";

import StaticIntro from './staticIntro';
import style from './style';


const TypedIntro = loadable(() => import(/* webpackChunkName: "typedIntro" */  './typedIntro'));
const Supernova = loadable(() => import(/* webpackChunkName: "supernova" */ './supernova'));
const AsyncModal = loadable(() => import(/* webpackChunkName: "asyncModal" */ './asyncModal'));

const Splash = () => {
    const intro = useSelector((state) => state.general.intro);
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
        if (typeof window === 'undefined') return undefined;

        if (!isMobile) {
            setShowTyped(true);
            return undefined;
        }

        setShowTyped(false);
        return undefined;
    }, [isMobile]);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        let idleId = null;
        const readyDelay = isMobile ? 900 : 100;
        const timeoutId = window.setTimeout(() => {
            if (window.requestIdleCallback) {
                idleId = window.requestIdleCallback(() => setReady(true));
                return;
            }
            setReady(true);
        }, readyDelay);

        return () => {
            window.clearTimeout(timeoutId);
            if (idleId !== null && window.cancelIdleCallback) {
                window.cancelIdleCallback(idleId);
            }
        };
    }, [isMobile]);

    return (
        <div css={style.container}>
            {showTyped ? <TypedIntro/> : <StaticIntro/>}
            {ready && (
                <>
                    <Supernova/>
                    {intro && <AsyncModal/>}
                </>
            )}
        </div>
    );
};

export default Splash;
