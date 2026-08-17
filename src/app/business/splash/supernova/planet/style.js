import {css} from '@emotion/react';

export default {
    node: (size) => css`
        position: absolute;
        z-index: 4;
        top: 0;
        left: 0;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 0;
        border: 1px solid rgba(120, 200, 255, 0.78);
        border-radius: 50%;
        background: rgba(10, 13, 15, 0.96);
        box-shadow:
            0 0 0 8px rgba(7, 9, 10, 0.68),
            0 18px 42px rgba(0, 0, 0, 0.42);
        color: #78c8ff;
        cursor: pointer;
        will-change: transform;
        transition: border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;

        &::after {
            content: '';
            position: absolute;
            right: -5px;
            bottom: 8px;
            width: 18px;
            height: 18px;
            border: 1px solid transparent;
            border-top-color: rgba(120, 200, 255, 0.85);
            border-right-color: rgba(120, 200, 255, 0.45);
            border-radius: 50%;
            transform: rotate(24deg);
            filter: drop-shadow(0 0 4px rgba(120, 200, 255, 0.28));
            pointer-events: none;
        }

        svg {
            width: ${Math.max(24, size * 0.3)}px;
            height: ${Math.max(24, size * 0.3)}px;
        }

        span {
            color: #f4f5ef;
            font-size: ${Math.max(12, size * 0.13)}px;
            font-weight: 600;
            letter-spacing: -0.02em;
        }

        &:hover {
            border-color: #a8ddff;
            background: #11181d;
            box-shadow:
                0 0 0 8px rgba(120, 200, 255, 0.07),
                0 0 34px rgba(120, 200, 255, 0.16),
                0 18px 42px rgba(0, 0, 0, 0.42);
        }

        @media (max-width: 960px) {
            gap: 2px;
            box-shadow:
                0 0 0 4px rgba(7, 9, 10, 0.68),
                0 10px 24px rgba(0, 0, 0, 0.36);

            &::after {
                right: -3px;
                bottom: 5px;
                width: 14px;
                height: 14px;
            }
        }
    `,
};
