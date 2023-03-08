import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Alert from '@mui/material/Alert';
import Layout from '../../components/layout';
import AuthRoute from '../../components/AuthRoute';
import Head from 'next/head';
import { BACKEND_URL } from '../../lib/auth';

const Submit = () => {
  const [postName, setPostName] = React.useState('');
  const [mdContent, setMdContent] = React.useState('');
  const [tags, setTags] = React.useState<string[]>([]);
  const [hasError, setHasError] = React.useState(false);
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const error = tags.filter((value) => {
      if (!(value.match(/^[a-z0-9_\-]+$/i) || value.includes(' '))) {
        return value;
      }
    });

    if (error.length !== 0) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [tags]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BACKEND_URL}/api/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          title: e.currentTarget.postname.value,
          content: e.currentTarget.markdown.value,
          category: tags.join(', '),
        }),
      });
      const resJson = await res.json();
      if (res.status === 200) {
        setPostName('');
        setMdContent('');
        setTags([]);
        setMessage('Post submitted successfully');
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
    <AuthRoute>
      <Layout admin>
        <Head>
          <title>Admin Submit</title>
        </Head>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2>Post Submission</h2>
          {message !== '' && (
            <Alert severity="info" sx={{ mb: '1rem' }}>
              {message}
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              id="postname"
              label="Title"
              autoFocus
              fullWidth
              value={postName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostName(e.target.value);
              }}
              sx={{ mb: '1rem' }}
            />
            <TextField
              required
              id="markdown"
              label="Markdown"
              fullWidth
              multiline
              rows={10}
              value={mdContent}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setMdContent(e.target.value);
              }}
              sx={{ mb: '1rem' }}
            />
            {hasError && (
              <Alert severity="error" sx={{ mb: '1rem' }}>
                Category name has invalid characters.
              </Alert>
            )}
            <Autocomplete
              sx={{ mb: '1rem' }}
              id="category"
              multiple
              freeSolo
              autoSelect
              fullWidth
              options={tags}
              value={tags}
              onChange={(e: any, newValue) => {
                if (newValue) {
                  setTags(newValue);
                }
              }}
              renderInput={(params) => (
                <TextField {...params} label="Categories" value={tags} />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={
                hasError ||
                postName === '' ||
                mdContent === '' ||
                tags.length === 0
              }
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Layout>
    </AuthRoute>
  );
};

export default Submit;
