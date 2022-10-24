import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const PcsLaptops: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>PCs/Laptops</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>PCs/Laptops</h2>
      </section>
    </Layout>
  );
};

export default PcsLaptops;
