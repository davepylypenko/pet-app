import React from "react";
import { Container, List, ListItem, makeStyles } from "@mui/material";
import { getTweets } from "../api/getTweets";
import Tweet from "./Tweet";

const listItemClasses = {
  minWidth: "500px"
}

export function Tweets() {
  const tweets = getTweets();

  return (
    <Container>
      <List>
        {tweets && tweets.map((tweet) => 
          <ListItem key={tweet.id} style={{ justifyContent: "center" }} >
            <Tweet user={tweet.creator} content={tweet.data.text}/>
          </ListItem>
        )}
      </List>
    </Container>
  )
};
