import {css} from '@emotion/react';

export default {
    wrapper: (over) => css`
        height: 100%;
        overflow: hidden;
        background-color: #111;
        width: 100%;
        position: relative;
        cursor: ${over ? 'pointer' : 'default'};
    `
};
