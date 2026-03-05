import Typical from 'react-typical';

import style from './style'

const Intro = () => (
    <>
        <Typical steps={['Welcome into (my) space.']} wrapper="span" css={style.intro} />
        <Typical steps={[1700, 'Please click on the core star for instructions.']} wrapper="span" css={style.intro2} />
    </>
);

export default Intro;
