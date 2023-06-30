import { createSlice } from '@reduxjs/toolkit';
import { data } from '../api/mock';

export const tweets = createSlice({
  name: 'tweets',
  initialState: {
    value: data.tweets,
  },
  reducers: {
    setTweets: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
  }
});

export const { setTweets } = tweets.actions;

export default tweets.reducer;
