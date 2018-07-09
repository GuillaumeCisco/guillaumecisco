import React from 'react';
import Typist from 'react-typist';
import {css} from 'react-emotion';

const cursor = {
    show: false,
};

const intro = css`
    position: absolute;
    z-index: 2;
    top: 15px;
    left: 15px;
    color: green;
`;

const Intro = props => (
    <Typist cursor={cursor} className={intro}>
        Welcome into (my) space.
        <br />
        Please click on the core star for instructions.
    </Typist>
);

export default Intro;
