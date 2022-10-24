import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Mobiles: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Mobile Devices</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Mobile Devices</h2>
      </section>
    </Layout>
  );
};

export default Mobiles;
