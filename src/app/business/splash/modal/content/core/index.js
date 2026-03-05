import styleParent from '../../style';

import Github from '../../../../../common/ui/svgs/github';
import LinkedIn from '../../../../../common/ui/svgs/linkedin';
import style from './style';

const Core = () => (
  <div css={styleParent.content}>
    <h1>Hey there!</h1>

    <h3 css={styleParent.h3}>My name is Guillaume Cisco</h3>

    <p css={styleParent.p}>
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
    </p>

    <p>If you'd like a more conventional version, you can check:</p>

    <ul css={styleParent.ul}>
      <li>
        <a css={styleParent.a} href="https://www.linkedin.com/in/guillaumecisco/" target="_blank" rel="noopener noreferrer">
          <LinkedIn width={48} height={48} />
          <span css={style.span}>linkedIn</span>
        </a>
      </li>
      <li>
        <a css={styleParent.a} href="https://github.com/GuillaumeCisco" target="_blank" rel="noopener noreferrer">
          <Github width={48} height={48} />
          <span css={style.span}>github</span>
        </a>
      </li>
    </ul>

    <p css={styleParent.p}>
      I also give computer science lessons. If you'd like to understand how the matrix works, feel free to contact
      me via linkedin.
      <br />
      I promise you a lot of fun and I will make you one of the most skilled developer in this universe ;)
    </p>
  </div>
);

export default Core;
