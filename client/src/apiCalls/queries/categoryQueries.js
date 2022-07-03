export const fetchAllCategories = async (url) => {
  const res = await fetch(url);
  const categories = await res.json();
  return categories;
};
