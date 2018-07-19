/* Async wrapper for loading chunk only when needed */
import React from 'react';
import universal from 'react-universal-component';

// need to be imported before being imported by react-universal-component
import 'react-perfect-scrollbar/dist/css/styles.css';

// always wrap your universal module inside a React Component for correct react hot loading.
const Universal = () => {
    const Modal = universal(import('./modal'));

    return <Modal />;
};

export default Universal;
