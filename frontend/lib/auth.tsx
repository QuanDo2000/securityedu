export const authCheck = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/auth/user', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    });
    if (res.status === 200) return true;
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
