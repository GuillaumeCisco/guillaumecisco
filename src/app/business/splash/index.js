import { useEffect, useState } from 'react';
import loadable from '@loadable/component';

import Intro from './intro';
import style from './style';

const Supernova = loadable(
    () => import(/* webpackChunkName: "supernova" */ './supernova'),
    { fallback: null }
);

const AsyncModal = loadable(
    () => import(/* webpackChunkName: "async-modal" */ './asyncModal'),
    { fallback: null }
);

const Splash = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            requestIdleCallback(() => {
                setReady(true);
            });
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div css={style.container}>
            <Intro />

            {ready && (
                <>
                    <Supernova />
                    <AsyncModal />
                </>
            )}
        </div>
    );
};

export default Splash;
