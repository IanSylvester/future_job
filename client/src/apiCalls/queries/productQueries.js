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

export const createProduct = async (url, obj) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  const newProduct = await res.json();
  return newProduct;
};

