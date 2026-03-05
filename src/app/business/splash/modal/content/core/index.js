import React from 'react';
import {
  Container, Ul, H3, A, P,
} from '../common';

import Github from '../../../../svg/github';
import LinkedIn from '../../../../svg/linkedin';
import style from './style';

const Core = () => (
  <Container>
    <h1>Hey there!</h1>

    <H3>My name is Guillaume Cisco</H3>

    <P>
      If you are here, there is a high probability you want to know more about me.
      <br />
      <br />
      I created this little interactive website for showing you my skills in the funniest way possible.
      <br />
      When you will close this window, several planets will appear!!!
      <br />
      Each planet will tell you more about my professional experience, hobbies and skills.
      <br />
      Do not hesitate to click on them!
    </P>

    <p>If you'd like a more conventional version, you can check:</p>

    <Ul>
      <li>
        <A href="https://www.linkedin.com/in/guillaumecisco/" target="_blank" rel="noopener noreferrer">
          <LinkedIn width={48} height={48} />
          <span css={style.span}>linkedIn</span>
        </A>
      </li>
      <li>
        <A href="https://github.com/GuillaumeCisco" target="_blank" rel="noopener noreferrer">
          <Github width={48} height={48} />
          <span css={style.span}>github</span>
        </A>
      </li>
    </Ul>

    <P>
      I also give computer science lessons. If you'd like to understand how the matrix works, feel free to contact
      me via linkedin.
      <br />
      I promise you a lot of fun and I will make you one of the most skilled developer in this universe ;)
    </P>
  </Container>
);

export default Core;
