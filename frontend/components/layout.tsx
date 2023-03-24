import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { authCheck, BACKEND_URL } from '../lib/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    authCheck()
      .then((res) => {
        setAuth(res);
      })
      .catch(() => {
        setAuth(false);
      });
  });

  const handleLogout = async (e: React.MouseEventHandler<HTMLLinkElement>) => {
    try {
      const res = await fetch(`${BACKEND_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      const resJson = res.json();
      if (res.status === 200) {
        router.push('/');
      } else {
        console.log(resJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        {!home && !admin && <Link href="/">← Back to home</Link>}
        {!home && admin && <Link href="/">← Back to main site</Link>}
        {home && <Link href="/faq">FAQ</Link>}
        {home && isAuth && !admin && <Link href="/admin">Admin</Link>}
        {isAuth && admin && (
          <Link legacyBehavior={false} href="#" onClick={handleLogout}>
            Logout
          </Link>
        )}
        {home && !isAuth && <Link href="/login">Login</Link>}
      </div>
    </div>
  );
};

export default Layout;
