import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import AuthRoute from '../components/AuthRoute';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

const Admin = () => {
  return (
    <AuthRoute>
      <Layout admin>
        <Head>
          <title>Admin Page</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <div className={styles.grid}>
            <Link href="/admin/submit">
              <a className={styles.card}>
                <h2>Submit</h2>
              </a>
            </Link>
            <Link href="/admin/manage">
              <a className={styles.card}>
                <h2>Manage</h2>
              </a>
            </Link>
          </div>
        </section>
      </Layout>
    </AuthRoute>
  );
};

export default Admin;