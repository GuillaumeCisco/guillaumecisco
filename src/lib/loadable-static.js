// src/lib/loadable-static.js
import React from 'react';

const loadable = (loader) => {
    const Component = React.lazy(loader);
    return (props) => (
        <React.Suspense fallback={null}>
            <Component {...props} />
        </React.Suspense>
    );
};

export default loadable;
