import {css} from '@emotion/react';

export default {
    container: css`
        max-width: 1000px;
        margin: 0 auto;
    `,
    title: css`
        font-weight: bold;
        font-size: 24px;
    `,
    date: css`
        float: right;
    `,
    company: css`
        font-weight: bold;
    `,
    location: css`
        margin-left: 10px;
    `,
    ul: css`
        list-style-type: circle;
    `,
    li: css`
        display: list-item;
        text-align: left;
        font-size: 20px;
    `,
}
