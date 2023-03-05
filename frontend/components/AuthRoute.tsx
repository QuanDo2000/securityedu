import { useRouter } from 'next/router';
import * as React from 'react';
import { authCheck } from '../lib/auth';

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    authCheck()
      .then((res) => {
        if (res) {
          setAuth(true);
        } else {
          setAuth(false);
          router.push('/login');
        }
      })
      .catch(() => {
        setAuth(false);
        router.push('/login');
      });
  }, [router]);

  return <>{auth && children}</>;
};

export default AuthRoute;
