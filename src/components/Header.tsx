import { Avatar, Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { show } from '../features/addNewTweet/reducer';

type HeaderProps = {
  children: React.ReactNode
}

function Header({ children }: HeaderProps) {
  const dispatch = useDispatch();
  const handleAddNewTweet = () => dispatch(show());

  return (
    <>
      <Box position="fixed" top={0} left={0} width="100%" bgcolor="white" padding={2} zIndex={9999} sx={{ bgcolor: '#e3f2fd' }}>
        <Container>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Avatar alt="User Avatar" src="/path/to/avatar.png" sx={{ bgcolor: '#0288d1' }}/>
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
}

export default Header;
