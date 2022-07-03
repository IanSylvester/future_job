export const fetchAllProducts = async (url) => {
  const res = await fetch(url);
  const products = await res.json();
  return products;
};

export const fetchAllProductsByCategory = async (url) => {
  const res = await fetch(url);
  const products = await res.json();
  return products;
};
