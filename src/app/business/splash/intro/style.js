import {css} from '@emotion/react';

const pos = css`
        position: absolute;
        z-index: 2;
        left: 15px;
        color: green;

        &:after {
            content: "" !important;
        }
    `
;

export default {
    intro: css`
        ${pos};
        top: 15px;
    `, intro2: css`
        ${pos};
        top: 39px;
    `
};
