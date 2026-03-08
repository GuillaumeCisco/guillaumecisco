/* Async wrapper for loading chunk only when needed */
import loadable from '@loadable/component';

// need to be imported before being imported by react-perfect-scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import Loader from "../../common/components/loader";


const Modal = loadable(() => import('./modal'), {
    fallback: <Loader />,
});

export default function AsyncModal() {
  return <Modal />;
}
