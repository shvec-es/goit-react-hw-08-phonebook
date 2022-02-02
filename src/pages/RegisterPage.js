import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { TextField, Typography, Button, Box } from '@mui/material';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);

      case 'email':
        return setEmail(e.target.value);

      case 'password':
        return setPassword(e.target.value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Typography
        variant="h3"
        color="secondary"
        sx={{ mb: '15px', textAlign: 'center' }}
      >
        Registration form
      </Typography>

      <Box
        component="form"
        sx={{ width: '350px', m: '0 auto' }}
        onSubmit={handleSubmit}
      >
        <TextField
          required
          label="Enter your name"
          size="small"
          margin="dense"
          fullWidth
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          required
          label="Enter your email"
          size="small"
          margin="dense"
          fullWidth
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          required
          label="Create a password"
          size="small"
          margin="dense"
          fullWidth
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: '150px', display: 'block', m: '15px auto' }}
          type="submit"
        >
          Register
        </Button>
      </Box>
    </>
  );
}

export default RegisterPage;
