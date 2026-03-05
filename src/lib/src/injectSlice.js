import {combineReducers, combineSlices} from '@reduxjs/toolkit';

const injectSliceInReducer = (arr, slice, baseReducer) => {
    const key = arr.shift();
    if (arr.length) {
        if (!baseReducer[key]) baseReducer[key] = combineSlices();
        injectSliceInReducer(arr, slice, baseReducer[key]);
    }
 else {
        baseReducer.inject({
            reducerPath: key,
            reducer: slice.reducer,
        }, {overrideExisting: true});
    }

    return baseReducer;
};

export default function injectSlice(store, rootReducer) {
    return (asyncSlice) => {
        const splitRow = [...asyncSlice.reducerParent.split('.'), asyncSlice.reducerPath];
        injectSliceInReducer(splitRow, asyncSlice, rootReducer);
        store.replaceReducer(combineReducers(rootReducer));
    };
}
