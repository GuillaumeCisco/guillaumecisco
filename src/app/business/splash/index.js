import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';

import Supernova from './supernova';
import Intro from './intro';
import AsyncModal from './asyncModal';

const style = css`
    height: 100%;
  `;


const Splash = ({page}) =>
    (<div className={style}>
        <Intro />
        <Supernova />
        <AsyncModal />
    </div>);


Splash.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Splash;
