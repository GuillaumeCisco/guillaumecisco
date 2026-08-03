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
            inset: 38%;
            border-radius: 50%;
            background: radial-gradient(
                circle at 43% 38%,
                #fff 0 18%,
                #f8fbff 34%,
                #d9f0ff 62%,
                #78c8ff 100%
            );
            box-shadow:
                0 0 10px 5px rgba(255, 255, 255, 0.9),
                0 0 38px 17px rgba(120, 200, 255, 0.48),
                0 0 96px 42px rgba(120, 200, 255, 0.2);
            animation: corePulse 4.2s ease-in-out infinite;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 19%;
            border: 1px solid rgba(168, 221, 255, 0.2);
            border-radius: 50%;
            box-shadow:
                0 0 0 17px rgba(120, 200, 255, 0.035),
                0 0 34px 12px rgba(120, 200, 255, 0.08);
            transition: border-color 180ms ease, transform 180ms ease;
        }

        &:hover::after,
        &:focus-visible::after {
            border-color: rgba(120, 200, 255, 0.9);
            transform: scale(1.08);
        }

        @keyframes corePulse {
            0%, 100% { transform: scale(0.96); opacity: 0.9; }
            50% { transform: scale(1.06); opacity: 1; }
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
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.24) 0,
            rgba(168, 221, 255, 0.16) 16%,
            rgba(120, 200, 255, 0.075) 34%,
            rgba(120, 200, 255, 0.025) 52%,
            transparent 72%
        );
        opacity: 0.92;
        animation: haloBreath 4.8s ease-in-out infinite;

        &::before,
        &::after {
            content: '';
            position: absolute;
            pointer-events: none;
        }

        &::before {
            left: 7%;
            right: 7%;
            top: 50%;
            height: 1px;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(120, 200, 255, 0.08) 28%,
                rgba(244, 251, 255, 0.72) 50%,
                rgba(120, 200, 255, 0.08) 72%,
                transparent
            );
            box-shadow: 0 0 8px rgba(120, 200, 255, 0.2);
        }

        &::after {
            top: 7%;
            bottom: 7%;
            left: 50%;
            width: 1px;
            background: linear-gradient(
                180deg,
                transparent,
                rgba(120, 200, 255, 0.06) 32%,
                rgba(244, 251, 255, 0.58) 50%,
                rgba(120, 200, 255, 0.06) 68%,
                transparent
            );
            box-shadow: 0 0 8px rgba(120, 200, 255, 0.16);
        }

        @keyframes haloBreath {
            0%, 100% { transform: scale(0.96); opacity: 0.82; }
            50% { transform: scale(1.04); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `,
};
