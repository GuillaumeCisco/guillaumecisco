import {createSlice} from '@reduxjs/toolkit';

const uiReducer = createSlice({
  name: 'ui',
  initialState: {
    theme: 'default',
  },
  reducers: {
    get: (state) => {
      const theme = global?.window?.localStorage?.getItem('theme') || (global?.window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default');
      global?.window?.localStorage?.setItem('theme', theme);
      global?.document?.documentElement?.setAttribute('data-theme', theme);
      state.theme = theme;
    },
    toggle: (state) => {
      const theme = state.theme === 'default' ? 'dark' : 'default';
      state.theme = theme;
      global?.document?.documentElement?.setAttribute('data-theme', theme);
      global?.window?.localStorage?.setItem('theme', theme);
    },
  },
});

export const {get, toggle} = uiReducer.actions;

export default uiReducer;
