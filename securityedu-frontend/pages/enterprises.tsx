import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Enterprises: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Enterprises</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Enterprises</h2>
      </section>
    </Layout>
  );
};

export default Enterprises;
