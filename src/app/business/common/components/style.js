import {css, keyframes} from '@emotion/react';

const fade = keyframes`
  0% {opacity: 0}
  25% {opacity: 1}
  50% {opacity: 0}
  75% {opacity: 1}
  100% {opacity: 0}
`;

const worker = css`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 10px;
  height: 10px;
  z-index: 1;
  border-radius: 50%;
  display: block;
  opacity: 0;
  animation: ${fade} 3s;
`;

const green = css`
  ${worker};
  background-color: #27e86d;
`;

const red = css`
  ${worker};
  background-color: #c30e15;
`;

export {green, red};
