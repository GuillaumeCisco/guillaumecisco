/* Async wrapper for loading chunk only when needed */
import loadable from '@loadable/component';

// need to be imported before being imported by react-perfect-scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

const Modal = loadable(() => import('./modal'));

export default function AsyncModal() {
  return <Modal />;
}
