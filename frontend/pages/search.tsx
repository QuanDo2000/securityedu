import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/search.module.css';
import { PostsData, getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const sortedPostsData = await getSortedPostsData();
  return {
    props: {
      sortedPostsData,
    },
  };
};

const Search = ({ sortedPostsData }: { sortedPostsData: PostsData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<PostsData>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const results = sortedPostsData.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchResult(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>SecurityEdu Search</title>
      </Head>
      <div>
        <h1 className={utilStyles.headingXl}>Search</h1>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          className={styles.search}
        >
          <InputBase
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            inputProps={{ 'aria-label': 'search' }}
            className={styles.searchInput}
          />
          <IconButton
            type="submit"
            aria-label="search"
            className={styles.searchButton}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <section className={`${utilStyles.headingMd} ${utilStyles.margin1rem}`}>
          <ul className={utilStyles.list}>
            {searchResult.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Search;
