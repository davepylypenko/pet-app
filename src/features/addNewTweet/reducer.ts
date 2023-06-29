import { createSlice } from "@reduxjs/toolkit";

export const addNewTweet = createSlice({
  name: 'addNewTweet',
  initialState: {
    value: false
  },
  reducers: {
    show: (state) => {state.value = true},
    hide: (state) => {state.value = false},
  }
})

export const { show, hide } = addNewTweet.actions;
export default addNewTweet.reducer;