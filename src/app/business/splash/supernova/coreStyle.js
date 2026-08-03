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
            inset: 37%;
            border-radius: 50%;
            background: #f8fbff;
            box-shadow:
                0 0 9px 4px rgba(255, 255, 255, 0.92),
                0 0 34px 15px rgba(120, 200, 255, 0.42),
                0 0 92px 38px rgba(120, 200, 255, 0.16);
            animation: corePulse 3.6s ease-in-out infinite;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 11%;
            border: 1px solid rgba(120, 200, 255, 0.22);
            border-radius: 50%;
            box-shadow:
                0 0 0 12px rgba(120, 200, 255, 0.055),
                0 0 0 28px rgba(120, 200, 255, 0.025);
            transition: border-color 180ms ease, transform 180ms ease;
        }

        &:hover::after,
        &:focus-visible::after {
            border-color: rgba(120, 200, 255, 0.9);
            transform: scale(1.08);
        }

        @keyframes corePulse {
            0%, 100% { transform: scale(0.94); opacity: 0.88; }
            50% { transform: scale(1.07); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
            &::before { animation: none; }
        }
    `,
    spark: css`
        position: absolute;
        z-index: 1;
        inset: 0;
        border-radius: 50%;
        background: repeating-conic-gradient(
            from 1deg,
            rgba(168, 221, 255, 0.5) 0deg 0.6deg,
            transparent 0.6deg 11deg
        );
        mask: radial-gradient(circle, transparent 0 30%, #000 32% 56%, transparent 59%);
        opacity: 0.38;
        animation: coronaTurn 34s linear infinite;

        &::before,
        &::after {
            content: '';
            position: absolute;
            border-radius: 50%;
        }

        &::before {
            inset: 22%;
            border: 1px solid rgba(168, 221, 255, 0.32);
        }

        &::after {
            inset: 31%;
            border: 1px dotted rgba(244, 245, 239, 0.42);
        }

        @keyframes coronaTurn {
            to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `,
};
