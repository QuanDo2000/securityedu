export const authCheck = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/auth/user`, {
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
