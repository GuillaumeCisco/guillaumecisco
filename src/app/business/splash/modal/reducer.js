import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    visible: false,
    component: null,
};

export const ModalSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        visible: (state, {payload}) => {
            state.visible = payload;
            state.component = payload ? state.component : null;
        },
        set: (state, {payload}) => {
            state.visible = true;
            state.component = payload;
        },
    },
});

export const {visible, set} = ModalSlice.actions;

export default ModalSlice;
