import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import UserMenu from 'components/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

function Navigation() {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <AppBar position="static" color="secondary" sx={{ mb: '25px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/contacts">Contacts</NavLink>
        </Typography>
        <Box component="div">
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Typography variant="h6" component="span" sx={{ mr: '1rem' }}>
                <NavLink to="/register">Register</NavLink>
              </Typography>
              <Typography variant="h6" component="span">
                <NavLink to="/login">Login</NavLink>
              </Typography>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
