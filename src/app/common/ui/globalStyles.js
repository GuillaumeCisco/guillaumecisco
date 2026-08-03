import {css} from '@emotion/react';

export default () => css`
    html, body, #root, #root > div {
        min-height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        background: #07090a;
        color: #f4f5ef;
        font-family: 'nunito', 'nunitolight', sans-serif;
        font-size: 16px;
        letter-spacing: -0.01em;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    button, a {
        font: inherit;
    }

    button:focus-visible,
    a:focus-visible {
        outline: 2px solid #78c8ff;
        outline-offset: 4px;
    }

    button,
    html [type="button"], /* 1 */
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: none; /* 2 */
    }

    ::selection {
        background: #78c8ff;
        color: #07090a;
    }
`;
