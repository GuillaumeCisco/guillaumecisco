import {css} from '@emotion/react';

const accent = '#78c8ff';
const text = '#f4f5ef';
const muted = '#9a9fa4';
const border = 'rgba(244, 245, 239, 0.16)';

export default {
    container: css`
        position: relative;
        min-height: 100svh;
        overflow: hidden;
        background: #07090a;
        color: ${text};
    `,
    header: css`
        position: relative;
        z-index: 5;
        height: 88px;
        padding: 0 clamp(24px, 4vw, 64px);
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        border-bottom: 1px solid ${border};

        @media (max-width: 760px) {
            height: 72px;
            grid-template-columns: 1fr auto;
            padding: 0 20px;
        }
    `,
    brand: css`
        display: inline-flex;
        align-items: center;
        gap: 13px;
        justify-self: start;
        color: ${text};
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
    `,
    brandMark: css`
        display: none;
        color: ${accent};
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.12em;

        @media (max-width: 760px) {
            display: inline;
        }
    `,
    brandName: css`
        @media (max-width: 420px) {
            display: none;
        }
    `,
    nav: css`
        display: flex;
        align-items: center;
        gap: clamp(28px, 4vw, 64px);

        button {
            border: 0;
            padding: 10px 0;
            background: transparent;
            color: ${muted};
            cursor: pointer;
            font-size: 15px;
            transition: color 180ms ease;
        }

        button:hover {
            color: ${text};
        }

        @media (max-width: 760px) {
            display: none;
        }
    `,
    contact: css`
        justify-self: end;
        border: 1px solid ${accent};
        color: ${accent};
        text-decoration: none;
        padding: 13px 22px;
        font-weight: 600;
        font-size: 15px;
        transition: color 180ms ease, background 180ms ease;

        &:hover {
            color: #07090a;
            background: ${accent};
        }

        @media (max-width: 760px) {
            padding: 10px 15px;
        }
    `,
    hero: css`
        position: relative;
        min-height: calc(100svh - 88px);
        padding: clamp(64px, 10vh, 122px) clamp(24px, 5.5vw, 84px) clamp(56px, 7vh, 88px);

        @media (max-width: 960px) {
            display: flex;
            flex-direction: column;
            min-height: auto;
            padding-bottom: 60px;
        }

        @media (max-width: 760px) {
            padding: 50px 20px 0;
        }

        @media (min-width: 961px) and (max-height: 780px) {
            padding-top: 44px;
            padding-bottom: 44px;
        }
    `,
    heroCopy: css`
        position: relative;
        z-index: 3;
        width: min(46vw, 620px);

        h1 {
            font-size: clamp(72px, 8.3vw, 132px);
            line-height: 0.9;
            letter-spacing: -0.065em;
            font-weight: 600;
        }

        h1 span {
            color: ${accent};
        }

        p {
            max-width: 590px;
            margin: 38px 0 0;
            color: ${muted};
            font-size: clamp(18px, 1.55vw, 24px);
            line-height: 1.52;
            letter-spacing: -0.025em;
        }

        @media (max-width: 960px) {
            width: min(100%, 650px);
        }

        @media (max-width: 760px) {
            h1 {
                font-size: clamp(62px, 20vw, 92px);
            }

            p {
                margin-top: 28px;
                font-size: 18px;
            }
        }

        @media (min-width: 961px) and (max-height: 780px) {
            h1 {
                font-size: clamp(72px, 7.4vw, 96px);
            }

            p {
                margin-top: 26px;
                font-size: 19px;
            }
        }
    `,
    actions: css`
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 34px;

        @media (max-width: 480px) {
            flex-wrap: nowrap;
            gap: 10px;
        }

        @media (min-width: 961px) and (max-height: 780px) {
            margin-top: 25px;
        }
    `,
    primaryAction: css`
        min-height: 58px;
        min-width: 230px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${accent};
        padding: 0 22px;
        background: ${accent};
        color: #07090a;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 180ms ease, background 180ms ease;

        &:hover {
            transform: translateY(-2px);
            background: #a8ddff;
        }

        @media (max-width: 480px) {
            min-width: 0;
            flex: 1.35;
            gap: 10px;
            padding: 0 12px;
            font-size: 14px;
        }
    `,
    secondaryAction: css`
        min-height: 58px;
        min-width: 164px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border: 1px solid rgba(244, 245, 239, 0.5);
        padding: 0 22px;
        color: ${text};
        text-decoration: none;
        font-weight: 600;
        transition: border-color 180ms ease, color 180ms ease;

        &:hover {
            border-color: ${accent};
            color: ${accent};
        }

        @media (max-width: 480px) {
            min-width: 0;
            flex: 1;
            padding: 0 10px;
            font-size: 14px;
        }
    `,
    hint: css`
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 34px;
        padding: 0;
        border: 0;
        background: transparent;
        color: ${muted};
        cursor: pointer;
        font-size: 15px;

        @media (min-width: 961px) and (max-height: 780px) {
            margin-top: 20px;
        }

        & > span {
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(244, 245, 239, 0.3);
            border-radius: 50%;
        }

        i {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${accent};
            box-shadow: 0 0 10px ${accent};
        }
    `,
    orbitStage: css`
        position: absolute;
        z-index: 1;
        top: 0;
        right: -2vw;
        bottom: 0;
        width: 52vw;
        min-width: 560px;

        @media (max-width: 960px) {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            width: calc(100% + 40px);
            min-width: 0;
            height: 560px;
            margin: 30px -20px 0;
        }

        @media (max-width: 760px) {
            width: calc(100% + 16px);
            height: 248px;
            margin: 12px -8px 0;
        }
    `,
};
