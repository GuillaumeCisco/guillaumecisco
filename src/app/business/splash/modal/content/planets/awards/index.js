import React from 'react';
import {css} from '@emotion/react';

import {Container} from '../common';

const contCss = css`
  text-align: left;
  margin: 0 auto;
  display: inline-block;
`;

const Awards = () => (
  <div css={contCss}>
    <Container>
      <h1>Awards</h1>
      <ul>
        <li>+2000 reputation on stackoverflow</li>
        <li>Member of the Django French translation team 2012-2014</li>
        <li>Member of Mensa Association (High Intellectual Potential People)</li>
      </ul>
      <h1>Hobbies</h1>
      <ul>
        <li>French gastronomy</li>
        <li>Oenology and bierology</li>
        <li>Musculation and swimming</li>
        <li>Sportive gun shooting</li>
        <li>Technical books</li>
        <li>Politic, Geopolitic, Economy</li>
      </ul>
    </Container>
  </div>
);

export default Awards;
