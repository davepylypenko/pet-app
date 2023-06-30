import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


function TweetContextMenu() {
  const handleDeleteTweet = () => {
    // eslint-disable-next-line no-console
    console.log('tweet was deleted');
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
