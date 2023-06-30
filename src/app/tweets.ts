import { createSlice } from '@reduxjs/toolkit';
import { data } from '../api/mock';

export const tweets = createSlice({
  name: 'tweets',
  initialState: {
    value: data.tweets,
  },
  reducers: {
    setTweet: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deleteTweet: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
  }
});

export const { setTweet, deleteTweet } = tweets.actions;

export default tweets.reducer;
