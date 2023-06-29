import React from "react";
import { Container, List, ListItem, makeStyles } from "@mui/material";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

export function Tweets() {
  const tweets = useSelector(({ tweets }) => tweets.value);

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
