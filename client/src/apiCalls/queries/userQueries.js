export const fetchAllUsers = async (url) => {
   const res = await fetch(url);
    const users = await res.json();
    return users;
};
