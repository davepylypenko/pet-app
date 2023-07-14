import React, { useState } from 'react';
import { Avatar, Typography, Paper, Box, IconButton, Popover } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TweetContextMenu from './TweetContextMenu';

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

const Tweet = ({ user, tweet }: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { name, avatar } = user;
  const { data: {
    text
  }} = tweet;

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <Paper style={tweetStyles.root} elevation={3} sx={{ bgcolor: '#0288d1', color: 'white' }}>
      <Avatar alt={name} src={avatar} style={tweetStyles.avatar} sx={{ bgcolor: 'white' }}/>
      <Box style={tweetStyles.content}>
        <Typography variant="subtitle2">{name}</Typography>
        <Typography style={{ wordBreak: 'break-word' }} variant="body1">{text}</Typography>
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
