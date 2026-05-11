import {css} from '@emotion/react';

export default {
    container: css`
        position: absolute;
        top: 20px;
        z-index: 1;
        left: 15px;
        color: green;
        line-height: 22px;
        max-width: 520px;

        & > span {
            margin: 0;
        }
    `,
};
