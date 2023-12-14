import { configureStore } from '@reduxjs/toolkit';
import createTweetVisible from '../features/createTweetVisible/reducer';
import tweetsReducer from './tweets';

export default configureStore({
  reducer: {
    createTweetVisible: createTweetVisible,
    tweets: tweetsReducer,
  },
});
