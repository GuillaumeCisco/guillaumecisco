import Typed from 'typed.js';

import style from './style'
import {useEffect, useRef} from "react";

const Intro = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Welcome into (my) space.<br/> Please click on the core star for instructions.'],
            typeSpeed: 60,
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return <div css={style.container}>
        <span ref={el}  aria-label="Welcome into (my) space."/>
    </div>


};

export default Intro;
