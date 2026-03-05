import {forwardRef} from 'react';

import style from './style'

const Canvas = forwardRef(function Canvas(props, ref) {
  return <canvas ref={ref} css={style.container} />;
});

export default Canvas;
