import Link from 'next/link';
import * as React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

const Admin = () => {
  return (
    <Layout admin>
      <section className={utilStyles.headingMd}>
        <div className={styles.grid}>
          <Link href="/admin/submit">
            <a className={styles.card}>
              <h2>Submit</h2>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
