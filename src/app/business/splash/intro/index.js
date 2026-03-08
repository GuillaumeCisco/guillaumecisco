import Typical from 'react-typical';

import style from './style'

const Intro = () => (
    <>
        <Typical
            steps={['Welcome into (my) space.']}
            wrapper="span"
            css={style.intro}
            aria-label="Welcome into (my) space."
        />
        <Typical
            steps={[1700, 'Please click on the core star for instructions.']}
            wrapper="span"
            css={style.intro2}
            aria-label="Please click on the core star for instructions."
        />
    </>
);

export default Intro;
