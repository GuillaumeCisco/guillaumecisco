import {useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';

import Content from './content';
import {visible as setModalVisible} from './reducer';
import Close from '../../../common/ui/svgs/close';
import style from './style';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

function Modal() {
  const dispatch = useDispatch();

  const component = useSelector((state) => state.modal.component);
  const visible = useSelector((state) => state.modal.visible);

  const close = useCallback(() => {
    dispatch(setModalVisible(false));
  }, [dispatch]);

  if (!visible) return null;

  const ScrollWrapper = (() => {
    if (!isBrowser) return ({children}) => children;

    try {
      const mod = require('react-perfect-scrollbar');
      const Cmp = mod?.default ?? mod?.PerfectScrollbar ?? mod;
      return typeof Cmp === 'function' ? Cmp : ({children}) => children;
    } catch {
      return ({children}) => children;
    }
  })();

  return (
    <div css={style.container}>
      <ScrollWrapper>
        <Content type={component} />
      </ScrollWrapper>
      <div css={style.close} onClick={close}>
        <Close />
      </div>
    </div>
  );
}

Modal.propTypes = {
  component: PropTypes.string,
  visible: PropTypes.bool,
};

Modal.defaultProps = {
  component: '',
  visible: false,
};

export default Modal;
