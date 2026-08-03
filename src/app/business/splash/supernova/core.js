import {memo} from 'react';
import PropTypes from 'prop-types';

import style from './coreStyle';


function Core({radius, onSelect}) {
    return (
        <button
            type="button"
            css={style.button(Math.max(86, radius * 2.7))}
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
