import { useContext } from "react";
import React from "react";
import { Context } from "../ContextProvider";

const CategoryAPITest = () => {
  const context = useContext(Context);
  const {categories} = context;
  
  return (
    <div>
      {categories &&
        categories.map((category) => {
          return <h3 key={category._id}>{category.name}</h3>;
        })}
    </div>
  );
};

export default CategoryAPITest;
