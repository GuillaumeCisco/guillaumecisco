import { useEffect, useState } from 'react';

import Intro from './intro';
import style from './style';
import Supernova from './supernova';
import AsyncModal from './asyncModal';

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
