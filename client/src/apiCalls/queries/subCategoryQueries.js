export const fetchAllSubCategories = async (url) => {
  const res = await fetch(url);
  const categories = await res.json();
  return categories;
};

export const fetchAllSubCategoriesByCategory = async (url) => {
  const res = await fetch(url);
  const subCategories = await res.json();
  return subCategories;
};


