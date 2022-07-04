import React, { useState, useEffect } from "react";
import SubCategoryAPI from "../apiCalls/classes/SubCategoryAPI";

const SubCategoryAPITest = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [subCatsByCatId, setSubCatsByCatId] = useState([]);

  useEffect(() => {
    SubCategoryAPI.getAll().then((data) => setSubCategories(data));
    SubCategoryAPI.getAllByCategory(
      "62c0c4f9626e095e54f4b6cf"
    ).then((data) => setSubCatsByCatId(data));
  }, []);

  console.log(subCategories, "subCats");
  console.log(subCatsByCatId, "subCatsById");

  return <div>SubCategoryAPITest</div>;
};

export default SubCategoryAPITest;
