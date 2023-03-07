import Head from 'next/head';
import AuthRoute from '../../components/AuthRoute';
import Layout from '../../components/layout';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { getSortedPostsData, PostsData } from '../../lib/posts';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';

const Manage = () => {
  const [sortedPostsData, setPostsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getSortedPostsData().then((res) => {
        setPostsData(res);
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleDelete = (id: number) => {
    console.log(`Delete post with ID ${id}`);
    setLoading(true);
  };

  return (
    <AuthRoute>
      <Layout admin>
        <Head>
          <title>Admin Manage</title>
        </Head>
        <TableContainer component={Paper} sx={{ maxHeight: '45rem' }}>
          {isLoading ? (
            <Skeleton variant="rectangular" height="80vh" />
          ) : (
            <Table stickyHeader sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Date Created</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedPostsData.map(({ id, date, title }) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{date}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Layout>
    </AuthRoute>
  );
};

export default Manage;
