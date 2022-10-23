import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

const Home: NextPage = () => {
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
          <a href="/pcs-laptops" className={styles.card}>
            <h2>PCs/Laptops</h2>
          </a>

          <a href="/mobiles" className={styles.card}>
            <h2>Mobile Devices</h2>
          </a>

          <a href="/enterprises" className={styles.card}>
            <h2>Enterprises</h2>
          </a>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
        {/*     List 5 most recent updated posts here     */}
        {/* <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
      </section>
    </Layout>
  );
};

export default Home;
