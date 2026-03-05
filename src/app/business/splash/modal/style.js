import {css} from '@emotion/react';

const color = '#ddd';

export default {
    container: css`
        position: absolute;
        top: 5%;
        left: 5%;
        right: 5%;
        bottom: 5%;
        z-index: 2;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.9);
        border-radius: 10px;
        font-size: 24px;
        padding: 4%;
        color: #fff;
    `,
    close: css`
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    `,
    content: css`
        color: ${color};
    `,
    h3: css`
        margin: 40px 0;
    `,
    p: css`
        text-align: left;
        margin: 20px auto;
        display: inline-block;
    `,
    ul: css`
        list-style: none;
        padding: 0 20px;
        margin: 80px 0;
    `,
    li: css`
        margin: 70px 0;
        text-align: left;
        font-size: 20px;
    `,
    a: css`
        text-decoration: none;
        color: rgb(76, 155, 186);
    `
};
