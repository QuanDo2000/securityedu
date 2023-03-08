export const authCheck = async () => {
  try {
    const res = await fetch(`http://20.185.25.136:8000/auth/user`, {
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
