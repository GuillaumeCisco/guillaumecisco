import {useCallback, useEffect, useState} from 'react';
import loadable from "@loadable/component";
import {useDispatch, useSelector} from "react-redux";

import style from './style';
import {MobileProvider, useIsMobile} from './mobileContext';
import {set as setModalComponent} from './modal/reducer';
import Github from '../../common/ui/svgs/github';


const Supernova = loadable(() => import(/* webpackChunkName: "supernova" */ './supernova'));
const AsyncModal = loadable(() => import(/* webpackChunkName: "modal" */ './modal'), {
    fallback: null,
});

const SplashContent = () => {
    const dispatch = useDispatch();
    const modalVisible = useSelector((state) => state.modal.visible);
    const [ready, setReady] = useState(false);
    const isMobile = useIsMobile();

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

    const openPanel = useCallback((type) => {
        dispatch(setModalComponent(type));
    }, [dispatch]);

    return (
        <main css={style.container}>
            <header css={style.header}>
                <a css={style.brand} href="/" aria-label="Guillaume Cisco home">
                    <span css={style.brandMark} aria-hidden="true">GC</span>
                    <span css={style.brandName}>Guillaume Cisco</span>
                </a>

                <nav css={style.nav} aria-label="Main navigation">
                    <button type="button" onClick={() => openPanel('skills')}>Agents</button>
                    <button type="button" onClick={() => openPanel('experience')}>Systems</button>
                    <button type="button" onClick={() => openPanel('awards')}>Product</button>
                </nav>

                <a
                    css={style.contact}
                    href="https://www.linkedin.com/in/guillaumecisco/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let&apos;s talk
                </a>
            </header>

            <section css={style.hero} aria-labelledby="hero-title">
                <div css={style.heroCopy}>
                    <h1 id="hero-title">Agentic<br/>Engineer<span>.</span></h1>
                    <p>
                        I use AI to solve real business problems. I build custom agents and tools that fit the way each
                        company actually works. I&apos;ve spent the last 15 years building software from frontend to
                        infrastructure.
                    </p>

                    <div css={style.actions}>
                        <button type="button" css={style.primaryAction} onClick={() => openPanel('skills')}>
                            Explore my work
                        </button>
                        <a
                            css={style.secondaryAction}
                            href="https://github.com/GuillaumeCisco"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github width={24} height={24} color="currentColor"/>
                            GitHub
                        </a>
                    </div>

                    <button type="button" css={style.hint} onClick={() => openPanel('core')}>
                        <span aria-hidden="true"><i/></span>
                        Select an orbit to explore
                    </button>
                </div>

                <div css={style.orbitStage} aria-label="Interactive portfolio orbits">
                    {ready && <Supernova/>}
                </div>
            </section>

            {modalVisible && <AsyncModal/>}
        </main>
    );
};

const Splash = () => (
    <MobileProvider>
        <SplashContent/>
    </MobileProvider>
);

export default Splash;
