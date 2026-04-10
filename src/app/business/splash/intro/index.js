import {useEffect, useRef} from 'react';
import Typed from 'typed.js';

import style from './style';

const TYPED_CONFIG = {
    strings: ['Welcome into (my) space.<br/> Please click on the core star for instructions.'],
    typeSpeed: 60,
};

const Intro = () => {
    const el = useRef(null);
    const typedRef = useRef(null);

    useEffect(() => {
        if (!el.current) return;

        typedRef.current = new Typed(el.current, TYPED_CONFIG);

        return () => {
            typedRef.current?.destroy();
        };
    }, []);

    return (
        <div css={style.container}>
            <span
                ref={el}
                aria-live="polite"
                aria-label="Welcome into my space"
            />
            <noscript>Welcome into (my) space. Please click on the core star for instructions.</noscript>
        </div>
    );
};

export default Intro;
