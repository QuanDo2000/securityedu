export const BACKEND_URL = 'http://20.185.25.136:8000';
// export const BACKEND_URL = 'http://localhost:8000';

export const authCheck = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/user`, {
      method: 'GET',
      credentials: 'include',
    });
    if (res.status === 200) return true;
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
