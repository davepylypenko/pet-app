import React from 'react';
import { Tweets } from './components/Tweets';
import Header from './components/Header';
import CreateTweetForm from './components/CreateTweetForm';

export default function App() {
  return (
    <Header>
      <CreateTweetForm />
      <Tweets />
    </Header>
  );
}
