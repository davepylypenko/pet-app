import { configureStore } from '@reduxjs/toolkit'
import addNewTweetReducer from '../features/addNewTweet/reducer'
import tweetsReducer from './tweets'

export default configureStore({
  reducer: {
    addNewTweet: addNewTweetReducer,
    tweets: tweetsReducer,
  },
})
