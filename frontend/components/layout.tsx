import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = 'SecurityEdu';

const Layout = ({
  children,
  home,
  admin,
}: {
  children: React.ReactNode;
  home?: boolean;
  admin?: boolean;
}) => {
  const isAuth = true;

  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>
              {siteTitle} {admin && 'Admin Page'}
            </h1>
          </>
        ) : (
          <>
            <h1 className={utilStyles.heading2Xl}>
              <Link href={admin ? '/admin' : '/'}>
                <a className={utilStyles.colorInherit}>
                  {siteTitle} {admin && 'Admin Page'}
                </a>
              </Link>
            </h1>
          </>
        )}
      </header>
      <main>{children}</main>
      <div className={styles.footer}>
        {!home && <Link href="/">← Back to home</Link>}
        {home && <div></div>}
        {/* {home && !isAuth && <Link href="/login">Login</Link>}
        {home && isAuth && <Link href="/admin">Admin</Link>} */}
      </div>
    </div>
  );
};

export default Layout;
