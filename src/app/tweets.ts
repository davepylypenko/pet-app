import { createSlice } from '@reduxjs/toolkit';

export const tweets = createSlice({
  name: 'tweets',
  initialState: {
    value: [],
  },
  reducers: {
    setTweets: (state, action) => {
      state.value = action.payload;
    },
    addTweet: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deleteTweet: (state, action) => {
      state.value = state.value.filter(({ id }) => id !== action.payload);
    },
  }
});

export const { setTweets, addTweet, deleteTweet } = tweets.actions;

export default tweets.reducer;
