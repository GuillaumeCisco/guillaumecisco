import Supernova from './supernova';
import Intro from './intro';
import AsyncModal from './asyncModal';

import style from './style'

const Splash = () => (
    <div css={style.container}>
        <Intro/>
        <Supernova/>
        <AsyncModal/>
    </div>
);

export default Splash;
