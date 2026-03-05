import {createSlice} from '@reduxjs/toolkit';

export default function createLoadableSlice(options) {
    const slice = createSlice(options);
    slice.reducerParent = options.reducerParent;
    return slice;
}
