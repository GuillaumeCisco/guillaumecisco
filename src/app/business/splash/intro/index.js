<<<<<<< HEAD
import React from 'react';
import Typical from 'react-typical';
import {css} from '@emotion/react';

const pos = css`
    position: absolute;
    z-index: 2;
    left: 15px;
    color: green;

    &:after {
        content: "" !important;
    }
`;

const intro = css`
    ${pos};
    top: 15px;
`;

const intro2 = css`
    ${pos};
    top: 39px;
`;

const Intro = () => (
    <>
        <Typical steps={['Welcome into (my) space.']} wrapper="span" css={intro} />
        <Typical steps={[1700, 'Please click on the core star for instructions.']} wrapper="span" css={intro2} />
=======
import Typical from 'react-typical';

import style from './style'

const Intro = () => (
    <>
        <Typical steps={['Welcome into (my) space.']} wrapper="span" css={style.intro} />
        <Typical steps={[1700, 'Please click on the core star for instructions.']} wrapper="span" css={style.intro2} />
>>>>>>> be17549 (update code to last dependencies and last usage)
    </>
);

export default Intro;
