import React from "react";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const SubCategoryAPITest = () => {
  const context = useContext(Context);
  const { subCategories } = context;
  //console.log(subCategories, "subCats");
  //console.log(subCatsByCatId, "subCatsById");
  return ( 
  <div>
    {subCategories &&
      subCategories.map((subCategory) => {
        return <h3 key={subCategory._id}>{subCategory.name}</h3>;
      })}
  </div>
  );
};

export default SubCategoryAPITest;
