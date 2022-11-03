import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData, PostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const sortedPostsData = getSortedPostsData();
  return {
    props: {
      sortedPostsData,
    },
  };
};

const Home = ({ sortedPostsData }: { sortedPostsData: PostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          SecurityEdu is a website to help users to reduce the possibility of
          information leakage and security issues by introducing information and
          specific steps to show users how to properly configure the settings
          using the controllable settings in mobile devices and PCs.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Categories</h2>
        <div className={styles.grid}>
          <Link href="/category/1">
            <a className={styles.card}>
              <h2>PCs/Laptops</h2>
            </a>
          </Link>

          <Link href="/category/2">
            <a className={styles.card}>
              <h2>Mobile Devices</h2>
            </a>
          </Link>

          <Link href="/category/3">
            <a className={styles.card}>
              <h2>Enterprises</h2>
            </a>
          </Link>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
        {/*     List 5 most recent updated posts here     */}
        <ul className={utilStyles.list}>
          {sortedPostsData.map(({ id, date, title }) => (
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
    </Layout>
  );
};

export default Home;
