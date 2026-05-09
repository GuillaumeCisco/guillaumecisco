import {useEffect, useState} from 'react';
import loadable from "@loadable/component";

import StaticIntro from './staticIntro';
import Supernova from './supernova';
import AsyncModal from './asyncModal';
import style from './style';


const TypedIntro = loadable(() => import(/* webpackChunkName: "typedIntro" */  './typedIntro'));

const Splash = () => {
    const [ready, setReady] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showTyped, setShowTyped] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            requestIdleCallback(() => {
                setReady(true);
            });
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        setIsMobile(typeof window !== 'undefined'
            && window.matchMedia('(max-width: 767px)').matches);
    }, []);

    useEffect(() => {
        let id;
        if (!isMobile) {
            id = setTimeout(() => {
                setShowTyped(true);
            }, 100);
        }


        return () => id && clearTimeout(id);
    }, [isMobile]);

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
