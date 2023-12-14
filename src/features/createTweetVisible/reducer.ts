import { createSlice } from '@reduxjs/toolkit';

export const createTweetVisible = createSlice({
  name: 'createTweetVisible',
  initialState: {
    value: false
  },
  reducers: {
    show: (state) => {state.value = true;},
    hide: (state) => {state.value = false;},
  }
});

export const { show, hide } = createTweetVisible.actions;
export default createTweetVisible.reducer;
