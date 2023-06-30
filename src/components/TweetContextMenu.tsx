import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteTweet } from "../app/tweets";


function TweetContextMenu({ tweet }: any) {
  const dispatch = useDispatch();
  const handleDeleteTweet = () => {
    dispatch(deleteTweet(tweet.id));
  };

  return (
    <List dense>
      <ListItemButton onClick={handleDeleteTweet}>
        <ListItem
          secondaryAction={
            <DeleteIcon sx={{ color: 'gray' }}/>
          }
        >
          <ListItemText primary="Delete Tweet" />
        </ListItem>
      </ListItemButton>
    </List>
  );
}

export default TweetContextMenu;
