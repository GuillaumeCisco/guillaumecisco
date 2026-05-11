import {useEffect, useState} from 'react';
import loadable from "@loadable/component";

import StaticIntro from './staticIntro';
import Supernova from './supernova';
import AsyncModal from './asyncModal';
import style from './style';


const TypedIntro = loadable(() => import(/* webpackChunkName: "typedIntro" */  './typedIntro'));

const Splash = () => {
    const [ready, setReady] = useState(false);
    const [isMobile, setIsMobile] = useState(null);
    const [showTyped, setShowTyped] = useState(false);

    useEffect(() => {
        setIsMobile(
            typeof window !== 'undefined'
            && window.matchMedia('(max-width: 767px)').matches,
        );
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setShowTyped(true);
        }
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
            {isMobile !== null ? showTyped ? <TypedIntro/> : <StaticIntro/> : <p>{' '}</p>}
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
