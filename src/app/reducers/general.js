import {createSlice} from '@reduxjs/toolkit';

const generalReducer = createSlice({
    name: 'general',
    initialState: {
        error: '',
        intro: false,
    },
    reducers: {
        error: (state, { payload }) => {
            state.error = payload;
        },
        intro: (state, { payload }) => {
            state.intro = payload;
        },
    },
});

export const {error, intro} = generalReducer.actions;

export default generalReducer;
