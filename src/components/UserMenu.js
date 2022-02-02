import { Box, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUserEmail } from 'redux/auth/auth-selectors';

function UserMenu() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <AccountCircleIcon sx={{ mr: '5px' }} />
      <Typography variant="body1" component="span" sx={{ mr: '10px' }}>
        {email}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
}

export default UserMenu;
