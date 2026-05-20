/* Async wrapper for loading chunk only when needed */
import loadable from '@loadable/component';

import Loader from "../../common/components/loader";


const Modal = loadable( () => import(/* webpackChunkName: "modal" */ './modal'), {
    fallback: <Loader />,
});

export default function AsyncModal() {
  return <Modal />;
}
