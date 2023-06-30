import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { hide } from "../features/addNewTweet/reducer";
import { newTweet } from "../api/mock";
import { setTweets } from "../app/tweets";

function CreateTweetForm() {
  const addNewTweet = useSelector(({ addNewTweet }) => addNewTweet.value)
  const tweets = useSelector(({ tweets }) => tweets.value)
  const dispatch = useDispatch()
  const [tweetText, setTweetText] = useState('');

  if (!addNewTweet) {
    return;
  }


  const handleClose = () => {
    setTweetText('')
    dispatch(hide())
  }

  const handleChange = ({
    target: { value },
  }) => {
    setTweetText(value);
  };

  const handleCreateTweet = () => {
    const newId = tweets[0].id + 1;
    const newData = { ...newTweet.data, text: tweetText}
    const addNewTweet = { ...newTweet, id: newId, data: newData}

    setTweetText('')
    dispatch(setTweets(addNewTweet))
  }

  return (
    <Box display="flex" justifyContent="center" marginBottom={5}>
      <Paper sx={{minWidth: '500px'}}>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ flexGrow: 1, marginLeft: 1 }}>
            Create Tweet
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
          </Box>
          <Box flexGrow={1} textAlign="center" display="flex">
            <TextField
              value={tweetText}
              onChange={handleChange}
              id="standard-basic"
              label="Enter text"
              variant="standard"
              sx={{ minWidth: 500, margin: 1 }}
            />
          <IconButton disabled={!Boolean(tweetText)} onClick={handleCreateTweet}>
            <SendIcon fontSize="small" color="primary" />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateTweetForm;
