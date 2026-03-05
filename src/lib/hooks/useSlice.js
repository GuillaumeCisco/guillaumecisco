 

import {useSelector, useStore} from 'react-redux';
import {useEffect} from 'react';

function getReducer(state, arr) {
    const key = arr.shift();
    if (arr.length) return getReducer(state?.[key], arr);
    return state?.[key];
}

function useSlice(fun, slicePath) {
    const store = useStore();
    const reducer = useSelector((state) => getReducer(state, slicePath.split('.')));

    useEffect(() => {
        if (!reducer) {
            fun().then((m) => {
                console.log('injecting first time hook', [...m.default.reducerParent.split('.'), m.default.reducerPath].join('.'));
                store.injectSlice(m.default);
            });
        }
    }, [reducer]);

    return reducer || {sliceLoading: true};
}

export default useSlice;
