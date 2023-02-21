import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Layout from '../components/layout';

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    });
  };

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>Admin Login</h2>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            required
            id="username"
            autoComplete="username"
            autoFocus
            fullWidth
            label="Username"
            sx={{ mb: '1rem' }}
          />
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            autoComplete="current-password"
            label="Password"
            sx={{ mb: '1rem' }}
          />
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
