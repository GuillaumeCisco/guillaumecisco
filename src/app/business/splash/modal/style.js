import {css} from '@emotion/react';

const accent = '#78c8ff';
const text = '#f4f5ef';
const muted = '#a3a8ad';
const border = 'rgba(244, 245, 239, 0.18)';

export default {
    backdrop: css`
        position: fixed;
        z-index: 20;
        inset: 0;
        display: flex;
        justify-content: flex-end;
        background: rgba(2, 4, 5, 0.68);
        animation: backdropIn 200ms ease both;

        @keyframes backdropIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `,
    container: css`
        position: relative;
        width: min(720px, 52vw);
        height: 100%;
        border-left: 1px solid rgba(244, 245, 239, 0.5);
        border-radius: 32px 0 0 32px;
        background: #101417;
        box-shadow: -30px 0 80px rgba(0, 0, 0, 0.44);
        color: ${text};
        overflow: hidden;
        animation: panelIn 360ms cubic-bezier(0.22, 1, 0.36, 1) both;

        @keyframes panelIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }

        @media (max-width: 960px) {
            width: min(760px, 78vw);
        }

        @media (max-width: 680px) {
            align-self: flex-end;
            width: 100%;
            height: min(92svh, 860px);
            border-left: 0;
            border-top: 1px solid rgba(244, 245, 239, 0.46);
            border-radius: 24px 24px 0 0;
            animation-name: sheetIn;

            @keyframes sheetIn {
                from { transform: translateY(100%); }
                to { transform: translateY(0); }
            }
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `,
    close: css`
        position: absolute;
        z-index: 3;
        top: 30px;
        right: 30px;
        width: 52px;
        height: 52px;
        display: grid;
        place-items: center;
        padding: 0;
        border: 1px solid rgba(120, 200, 255, 0.72);
        border-radius: 50%;
        background: #101417;
        color: ${text};
        cursor: pointer;
        transition: border-color 180ms ease, background 180ms ease;

        &:hover {
            border-color: #a8ddff;
            background: #182127;
        }

        @media (max-width: 680px) {
            position: sticky;
            float: right;
            top: 20px;
            margin: 20px 20px -72px 0;
            width: 46px;
            height: 46px;
        }
    `,
    scrollArea: css`
        height: 100%;
        overflow: auto;
        overscroll-behavior: contain;
        scrollbar-color: rgba(120, 200, 255, 0.42) transparent;
    `,
    content: css`
        width: 100%;
        min-height: 100%;
        padding: 64px clamp(34px, 5vw, 74px) 52px;
        color: ${text};
        text-align: left;

        @media (max-width: 680px) {
            padding: 38px 24px 42px;
        }
    `,
    label: css`
        display: block;
        margin: 0 0 54px;
        color: ${accent};
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;

        @media (max-width: 680px) {
            margin-bottom: 38px;
        }
    `,
    title: css`
        max-width: 620px;
        padding-right: 52px;
        font-size: clamp(42px, 4vw, 64px);
        line-height: 1.04;
        letter-spacing: -0.055em;
        font-weight: 400;

        span {
            color: ${accent};
        }

        @media (max-width: 680px) {
            padding-right: 32px;
            font-size: clamp(38px, 12vw, 54px);
        }
    `,
    lead: css`
        margin: 36px 0 52px;
        padding-top: 34px;
        border-top: 1px solid ${border};
        color: ${muted};
        font-size: clamp(18px, 1.5vw, 22px);
        line-height: 1.6;
        letter-spacing: -0.02em;
    `,
    h3: css`
        margin: 0;
        color: ${accent};
        font-size: 15px;
        font-weight: 600;
    `,
    p: css`
        text-align: left;
        color: ${muted};
        font-size: 18px;
        line-height: 1.65;
    `,
    ul: css`
        list-style: none;
        padding: 0;
        margin: 0;
    `,
    li: css`
        margin: 0;
        text-align: left;
        font-size: 17px;
    `,
    a: css`
        text-decoration: none;
        color: ${accent};
    `,
    sectionHeading: css`
        padding-bottom: 14px;
        border-bottom: 1px solid ${border};
        color: ${accent};
        font-size: 15px;
        font-weight: 600;
    `,
    rows: css`
        margin: 0 0 46px;
    `,
    row: css`
        display: grid;
        grid-template-columns: 46px 1fr;
        align-items: center;
        gap: 22px;
        min-height: 102px;
        border-bottom: 1px solid ${border};

        & > svg {
            color: ${accent};
        }

        & > span:first-child {
            color: ${accent};
            font-size: 13px;
            font-weight: 600;
        }

        strong {
            display: block;
            color: ${text};
            font-size: 17px;
            font-weight: 600;
        }

        p {
            margin: 3px 0 0;
            color: ${muted};
            font-size: 15px;
            line-height: 1.45;
        }

        @media (max-width: 480px) {
            grid-template-columns: 36px 1fr;
            gap: 14px;
            padding: 18px 0;
        }
    `,
    actions: css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 14px;
        margin-top: 42px;
    `,
    action: css`
        min-height: 50px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        padding: 0 20px;
        border: 1px solid ${border};
        color: ${text};
        text-decoration: none;
        font-weight: 600;
        transition: color 180ms ease, border-color 180ms ease;

        &:hover {
            color: ${accent};
            border-color: ${accent};
        }
    `,
    columns: css`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0 42px;
        margin-bottom: 48px;

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
    `,
    column: css`
        padding: 24px 0 28px;
        border-bottom: 1px solid ${border};

        h3 {
            margin-bottom: 12px;
            color: ${text};
            font-size: 18px;
            font-weight: 600;
        }

        p {
            margin: 0;
            color: ${muted};
            font-size: 15px;
            line-height: 1.55;
        }
    `,
    timeline: css`
        margin: 0 0 48px;
        border-top: 1px solid ${border};
    `,
    timelineItem: css`
        display: grid;
        grid-template-columns: minmax(105px, 0.32fr) 1fr;
        gap: 28px;
        padding: 28px 0;
        border-bottom: 1px solid ${border};

        time {
            color: ${accent};
            font-size: 14px;
            font-weight: 600;
        }

        h3 {
            margin: 0;
            color: ${text};
            font-size: 19px;
            font-weight: 600;
        }

        h3 span {
            color: ${muted};
            font-weight: 400;
        }

        p {
            margin: 9px 0 0;
            color: ${muted};
            font-size: 15px;
            line-height: 1.6;
        }

        @media (max-width: 520px) {
            grid-template-columns: 1fr;
            gap: 8px;
        }
    `,
    principles: css`
        counter-reset: principle;
        margin: 0 0 46px;

        li {
            counter-increment: principle;
            display: grid;
            grid-template-columns: 42px 1fr;
            gap: 18px;
            padding: 24px 0;
            border-bottom: 1px solid ${border};
        }

        li::before {
            content: '0' counter(principle);
            color: ${accent};
            font-size: 13px;
            font-weight: 600;
        }

        strong {
            display: block;
            color: ${text};
            font-size: 18px;
            font-weight: 600;
        }

        p {
            margin: 6px 0 0;
            color: ${muted};
            font-size: 15px;
            line-height: 1.55;
        }
    `,
    note: css`
        margin: 42px 0 0;
        padding: 26px 0 0;
        border-top: 1px solid ${border};
        color: ${muted};
        font-size: 15px;
        line-height: 1.65;
    `,
};
