import {css} from '@emotion/react';

// Import assets so webpack emits them and returns the final public URL
import nunitoBlackWoff2 from './fonts/nunito/nunito-black-webfont.woff2';
import nunitoBlackWoff from './fonts/nunito/nunito-black-webfont.woff';
import nunitoBoldWoff2 from './fonts/nunito/nunito-bold-webfont.woff2';
import nunitoBoldWoff from './fonts/nunito/nunito-bold-webfont.woff';
import nunitoExtraBoldWoff2 from './fonts/nunito/nunito-extrabold-webfont.woff2';
import nunitoExtraBoldWoff from './fonts/nunito/nunito-extrabold-webfont.woff';
import nunitoExtraLightWoff2 from './fonts/nunito/nunito-extralight-webfont.woff2';
import nunitoExtraLightWoff from './fonts/nunito/nunito-extralight-webfont.woff';
import nunitoLightWoff2 from './fonts/nunito/nunito-light-webfont.woff2';
import nunitoLightWoff from './fonts/nunito/nunito-light-webfont.woff';
import nunitoMediumWoff2 from './fonts/nunito/nunito-medium-webfont.woff2';
import nunitoMediumWoff from './fonts/nunito/nunito-medium-webfont.woff';
import nunitoRegularWoff2 from './fonts/nunito/nunito-regular-webfont.woff2';
import nunitoRegularWoff from './fonts/nunito/nunito-regular-webfont.woff';
import nunitoSemiBoldWoff2 from './fonts/nunito/nunito-semibold-webfont.woff2';
import nunitoSemiBoldWoff from './fonts/nunito/nunito-semibold-webfont.woff';

export default () => css`
    html, body, #root, #root > div {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        background: #fefefe;
        color: rgb(68, 66, 87);
        font-family: 'nunitolight', sans-serif;
        font-size: 16px;
        letter-spacing: 0.5px;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    button,
    html [type="button"], /* 1 */
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: none; /* 2 */
    }

    @font-face {
        font-family: 'nunitoblack';
        src: url(${nunitoBlackWoff2}) format('woff2'),
        url(${nunitoBlackWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitobold';
        src: url(${nunitoBoldWoff2}) format('woff2'),
        url(${nunitoBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitoextrabold';
        src: url(${nunitoExtraBoldWoff2}) format('woff2'),
        url(${nunitoExtraBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitoextralight';
        src: url(${nunitoExtraLightWoff2}) format('woff2'),
        url(${nunitoExtraLightWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitolight';
        src: url(${nunitoLightWoff2}) format('woff2'),
        url(${nunitoLightWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitomedium';
        src: url(${nunitoMediumWoff2}) format('woff2'),
        url(${nunitoMediumWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitoregular';
        src: url(${nunitoRegularWoff2}) format('woff2'),
        url(${nunitoRegularWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'nunitosemibold';
        src: url(${nunitoSemiBoldWoff2}) format('woff2'),
        url(${nunitoSemiBoldWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
