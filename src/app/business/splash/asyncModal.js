/* Async wrapper for loading chunk only when needed */
import universal from 'react-universal-component';

// need to be imported before being imported by react-universal-component
import 'react-perfect-scrollbar/dist/css/styles.css';

const Modal = universal(import('./modal'));

export default Modal;
