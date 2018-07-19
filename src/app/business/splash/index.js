import React from 'react';
import {css} from 'react-emotion';

import Supernova from './supernova';
import Intro from './intro';
import AsyncModal from './asyncModal';

const style = css`
    height: 100%;
  `;

const Splash = () => (
    <div className={style}>
        <Intro />
        <Supernova />
        <AsyncModal />
    </div>
);

export default Splash;
