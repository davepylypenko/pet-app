import { Avatar, Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../features/addNewTweet/reducer";

function Header({children}) {
  const addNewTweet = useSelector(({ addNewTweet }) => addNewTweet.value)
  const dispatch = useDispatch();
  const handleAddNewTweet = () => dispatch(show())

  return (
    <>
      <Box position="fixed" top={0} left={0} width="100%" bgcolor="white" padding={2} zIndex={9999}>
        <Container>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Avatar alt="User Avatar" src="/path/to/avatar.png" />
              <Box ml={2}>
                <Typography variant="h3">Twitter Clone</Typography>
              </Box>
            </Box>
            <Button variant="contained" onClick={handleAddNewTweet}>Add new Tweet</Button>
          </Box>
          <Divider />
        </Container>
      </Box>
      <Box marginTop={15}>
        {children}
      </Box>
    </>
  );
};

export default Header;
