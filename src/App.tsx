import React from 'react';
import { Tweets } from './components/Tweets';
import Header from './components/Header';
import CreateTweetForm from './components/CreateTweetForm';
import { getPosts } from './api/requests/getPosts';
import { useDispatch } from 'react-redux';
import { setTweets } from './app/tweets';
import { hide } from './features/createTweetVisible/reducer';

export default function App() {
  const dispatch = useDispatch();

  const init = async () => {
    dispatch(hide());
    const posts = await getPosts();
    dispatch(setTweets(posts));
  };
  
  init();
  return (
    <Header>
      <CreateTweetForm />
      <Tweets />
    </Header>
  );
}
