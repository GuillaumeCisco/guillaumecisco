<<<<<<< HEAD
import React, {forwardRef} from 'react';
import {css} from '@emotion/react';

const canvasStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Canvas = forwardRef(function Canvas(props, ref) {
  return <canvas ref={ref} css={canvasStyle} />;
=======
import {forwardRef} from 'react';

import style from './style'

const Canvas = forwardRef(function Canvas(props, ref) {
  return <canvas ref={ref} css={style.container} />;
>>>>>>> be17549 (update code to last dependencies and last usage)
});

export default Canvas;
