export const authCheck = async () => {
  try {
    const res = await fetch('http://localhost:8000/auth/user', {
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
