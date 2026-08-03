import {memo} from 'react';
import PropTypes from 'prop-types';

import {useIsMobile} from '../mobileContext';
import style from './coreStyle';


function Core({radius, onSelect}) {
    const isMobile = useIsMobile();
    const size = Math.max(isMobile ? 82 : 144, radius * (isMobile ? 3.2 : 4.1));

    return (
        <button
            type="button"
            css={style.button(size)}
            onClick={onSelect}
            aria-label="Open about Guillaume Cisco"
        >
            <span css={style.spark} aria-hidden="true"/>
        </button>
    );
}

Core.propTypes = {
    radius: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default memo(Core);
