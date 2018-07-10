/* Async wrapper for loading chunk only when needed */

import React from 'react';
import universal from 'react-universal-component';
import {connect} from 'react-redux';

const Modal = universal(import('./modal'));

const ModalComponent = ({visible}) => visible && <Modal />;

const mapStateToProps = state => ({
    visible: state.modal.visible,
});

export default connect(mapStateToProps)(ModalComponent);
