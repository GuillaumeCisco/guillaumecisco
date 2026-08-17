import {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Content from './content';
import {visible as setModalVisible} from './reducer';
import Close from '../../../common/ui/svgs/close';
import style from './style';

function Modal() {
  const dispatch = useDispatch();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const previousFocusRef = useRef(null);

  const component = useSelector((state) => state.modal.component);
  const visible = useSelector((state) => state.modal.visible);

  const close = useCallback(() => {
    dispatch(setModalVisible(false));
  }, [dispatch]);

  useEffect(() => {
    if (!visible || typeof document === 'undefined') return undefined;

    previousFocusRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [close, visible]);

  if (!visible) return null;

  return (
    <div
      css={style.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      role="presentation"
    >
      <section
        ref={panelRef}
        css={style.container}
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
      >
        <button
          ref={closeRef}
          type="button"
          css={style.close}
          onClick={close}
          aria-label="Close panel"
        >
          <Close width={20} height={20}/>
        </button>

        <div css={style.scrollArea}>
          <Content type={component} />
        </div>
      </section>
    </div>
  );
}

export default Modal;
