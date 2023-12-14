import React, { useState } from 'react';
import { Avatar, Typography, Paper, Box, IconButton, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TweetContextMenu from './TweetContextMenu';
import { ITweet } from '../types/ITweet';
import { getUserById } from '../api/requests/getUserById';
import useAsync from '../hooks/useAsync';

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
    color: '#64748B'
  },
  content: {
    flexGrow: 1,
    maxWidth: 500,
  },
  menuIcon: {
    color: 'white'
  },
};

const Tweet = ({ tweet }: {tweet: ITweet}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { body, userId } = tweet;
  const user = useAsync(async () => await getUserById(userId));
  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <Paper style={tweetStyles.root} elevation={3} sx={{ bgcolor: '#0288d1', color: 'white' }}>
      <Avatar alt={user?.name} style={tweetStyles.avatar} sx={{ bgcolor: 'white' }}/>
      <Box style={tweetStyles.content}>
        <Typography variant="subtitle2">{user?.name}</Typography>
        <Typography style={{ wordBreak: 'break-word' }} variant="body1">{body}</Typography>
      </Box>
      <Box>
        <IconButton onClick={handleClickMenu}>
          <MenuIcon style={tweetStyles.menuIcon}/>
        </IconButton>
        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          transformOrigin={{
            horizontal: 'left',
            vertical: 'top',
          }}
          onClose={handleClose}
        >
          <TweetContextMenu tweet={tweet} />
        </Popover>
      </Box>
    </Paper>
  );
};

export default Tweet;
