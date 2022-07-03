import { useState, useEffect } from "react";
import React from "react";
import CategoryAPI from "../apiCalls/classes/CategoryAPI";

const CategoryAPITest = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    CategoryAPI.getAll().then((data) => setCategories(data));
  }, []);
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
