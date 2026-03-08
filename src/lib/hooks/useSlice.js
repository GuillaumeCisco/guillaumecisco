import {useSelector, useStore} from 'react-redux';
import {useEffect} from 'react';

const pending = new Map();

function getReducer(state, arr) {
    const key = arr.shift();
    if (arr.length) return getReducer(state?.[key], arr);
    return state?.[key];
}

function useSlice(fun, slicePath) {
    const store = useStore();
    const reducer = useSelector((state) => getReducer(state, slicePath.split('.')));
    const isServer = typeof document === 'undefined';

    if (!reducer && isServer) {
        if (!pending.has(slicePath)) {
            pending.set(
                slicePath,
                fun().then((m) => {
                    store.injectSlice(m.default || m);
                    pending.delete(slicePath);
                })
            );
        }

        throw pending.get(slicePath);
    }

    useEffect(() => {
        if (!reducer) {
            fun().then((m) => {
                console.log('injecting first time hook', [...m.default.reducerParent.split('.'), m.default.reducerPath].join('.'));
                store.injectSlice(m.default || m);
            });
        }
    }, [reducer, store, fun]);

    return reducer || { __sliceLoading: true };
}

export default useSlice;
