import React from "react";

// import components to test here
import UserApiTest from "./UserApiTest";
import CategoryAPITest from "./CategoryAPITest";
import ProductAPITest from "./ProductAPITest";

const TestComponents = () => {
  return (
    <div>
      <UserApiTest />
      <CategoryAPITest/>
      <ProductAPITest/>
    </div>
  );
};

export default TestComponents;


