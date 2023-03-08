import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { authCheck } from '../lib/auth';

const Login = () => {
  const router = useRouter();
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    authCheck()
      .then((res) => {
        if (res) {
          router.push('/admin');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append('username', e.currentTarget.username.value);
    formData.append('password', e.currentTarget.password.value);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/auth/login`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      const resJson = await res.json();
      if (res.status === 200) {
        setMessage('Login successful');
        router.push('/admin');
      } else {
        setMessage('Some error occurred');
        console.log(resJson);
      }
    } catch (err) {
      setMessage('Some error occurred');
      console.log(err);
    }
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
        {message !== '' && (
          <Alert severity="info" sx={{ mb: '1rem' }}>
            {message}
          </Alert>
        )}
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
