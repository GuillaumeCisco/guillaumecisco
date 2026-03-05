import {useCallback, useEffect, useState} from 'react';
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

export default function ServiceWorker() {
  const [status, setStatus] = useState(undefined);

  const update = useCallback(() => {
    if (typeof window !== 'undefined') {
      setStatus(window.navigator.onLine);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();

    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, [update]);

  if (!(typeof window !== 'undefined' && window.navigator && typeof status !== 'undefined')) return null;
  return status ? <span css={green} /> : <span css={red} />;
}
