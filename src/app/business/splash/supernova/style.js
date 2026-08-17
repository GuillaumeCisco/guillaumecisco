import {css} from '@emotion/react';

export default {
    wrapper: css`
        height: 100%;
        overflow: hidden;
        background:
            radial-gradient(circle at 50% 50%, rgba(120, 200, 255, 0.035), transparent 42%),
            transparent;
        width: 100%;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            z-index: 2;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(90deg, #07090a 0%, transparent 30%, transparent 100%);
        }

        @media (max-width: 960px) {
            &::after {
                background: linear-gradient(180deg, #07090a 0%, transparent 20%, transparent 100%);
            }
        }
    `
};
