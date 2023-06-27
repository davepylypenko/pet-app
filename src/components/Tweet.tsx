import React from 'react';
import { Avatar, Typography, Paper } from '@mui/material';

const tweetStyles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
    minWidth: 500,
  },
  avatar: {
    marginRight: 8,
  },
  content: {
    flexGrow: 1,
  },
};

const Tweet = ({ user, content }) => {
  return (
    <Paper style={tweetStyles.root} elevation={3}>
      <Avatar alt={user.name} src={user.avatar} style={tweetStyles.avatar} />
      <div style={tweetStyles.content}>
        <Typography variant="subtitle1">{user.name}</Typography>
        <Typography variant="body1">{content}</Typography>
      </div>
    </Paper>
  );
};

export default Tweet;
