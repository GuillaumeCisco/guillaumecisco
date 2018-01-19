import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'react-emotion';

import Supernova from '../supernova/index';
import Modal from '../modal';
import Intro from './intro';

const style = css`
    height: 100%;
  `;


const Splash = ({page}) =>
    (<div className={style}>
        <Intro />
        <Supernova />
        <Modal />
    </div>);


Splash.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Splash;
