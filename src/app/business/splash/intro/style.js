import {css} from '@emotion/react';

export default {
    container: css`
        position: absolute;
        top: 20px;
        z-index: 1;
        left: 15px;
        color: green;
        line-height: 22px;

        & > .typed-cursor {
            font-weight: bolder;
            width: 3px;
            background-color: green;
            color: transparent;
        }
    `,
};
