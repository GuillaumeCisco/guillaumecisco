import {css} from '@emotion/react';

export default {
    button: (size) => css`
        position: absolute;
        z-index: 3;
        left: 50%;
        top: 50%;
        width: ${size}px;
        height: ${size}px;
        display: grid;
        place-items: center;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: #fff;
        cursor: pointer;
        transform: translate(-50%, -50%);

        &::before {
            content: '';
            position: absolute;
            inset: 20%;
            border-radius: 50%;
            background: #f8fbff;
            box-shadow:
                0 0 12px 5px rgba(255, 255, 255, 0.8),
                0 0 48px 18px rgba(120, 200, 255, 0.36),
                0 0 100px 34px rgba(120, 200, 255, 0.12);
            animation: corePulse 3.2s ease-in-out infinite;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 4%;
            border: 1px solid rgba(120, 200, 255, 0.22);
            border-radius: 50%;
            transition: border-color 180ms ease, transform 180ms ease;
        }

        &:hover::after,
        &:focus-visible::after {
            border-color: rgba(120, 200, 255, 0.9);
            transform: scale(1.08);
        }

        @keyframes corePulse {
            0%, 100% { transform: scale(0.92); opacity: 0.82; }
            50% { transform: scale(1.08); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
            &::before { animation: none; }
        }
    `,
    spark: css`
        position: relative;
        z-index: 1;
        width: 12px;
        height: 12px;
        border: 1px solid #78c8ff;
        transform: rotate(45deg);
        opacity: 0;
    `,
};
