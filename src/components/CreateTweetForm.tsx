import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { hide } from "../features/createTweetVisible/reducer";
import { addTweet } from "../app/tweets";
import { addNewTweet } from "../api/requests/addNewTweet";

function CreateTweetForm() {
  const visible = useSelector(({ createTweetVisible }) => createTweetVisible.value);
  const tweets = useSelector(({ tweets }) => tweets.value);
  const dispatch = useDispatch();
  const [tweetText, setTweetText] = useState('');
  const disabled = !tweetText.trimStart();
  const hasTweets = Boolean(tweets.length);

  useEffect(() => {

    // if (!hasTweets) {
    //   dispatch(show());
    // }
  }, [tweets]);

  if (!visible) {
    return;
  }

  const handleClose = () => {
    setTweetText('');
    dispatch(hide());
  };

  const handleChange = ({
    target: { value },
  }) => {
    setTweetText(value);
  };

  const handleCreateTweet = async () => {

    const tweet = {
      title: '',
      body: tweetText,
      userId: 1,
    };
  
    console.log(tweetText, addNewTweet);
    setTweetText('');
    const newTweet = await addNewTweet(tweet);
    dispatch(addTweet(newTweet));
  };

  const handleKeyEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleCreateTweet();
    }
  };

  return (
    <Box display="flex" justifyContent="center" marginBottom={5}>
      <Paper sx={{minWidth: '500px'}}>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ flexGrow: 1, marginLeft: 1 }}>
            Create Tweet
          </Typography>
          <IconButton disabled={!hasTweets} onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box flexGrow={1} textAlign="center" display="flex">
          <TextField
            value={tweetText}
            id="standard-basic"
            label="Enter text"
            variant="standard"
            sx={{ minWidth: 500, margin: 1 }}
            onChange={handleChange}
            onKeyDown={handleKeyEnter}
          />
          <IconButton disabled={disabled} onClick={handleCreateTweet}>
            <SendIcon fontSize="small" color={disabled ? "disabled" : "primary"} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

export default CreateTweetForm;
