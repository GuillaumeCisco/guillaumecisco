import {useCallback, useEffect, useState} from 'react';
import {green, red} from "./style";


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
