import React from "react";
import { Tweets } from "./components/Tweets";
import Header from "./components/Header";
import CreateTweet from "./components/CreateTweet";

export default function App() {
  return (
    <Header>
      <CreateTweet />
      <Tweets />
    </Header>
  );
}