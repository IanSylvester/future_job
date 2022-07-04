import React from "react";

// import components to test here
import UserApiTest from "./UserApiTest";
import CategoryAPITest from "./CategoryAPITest";
import ProductAPITest from "./ProductAPITest";
import SubCategoryAPITest from "./SubCategoryAPITest";
import VendorAPITest from "./VendorAPITest";

const TestComponents = () => {
  return (
    <div>
      {/* <UserApiTest />
      <CategoryAPITest/>
      <ProductAPITest/> */}
      <SubCategoryAPITest /> 
      <VendorAPITest />
    </div>
  );
};

export default TestComponents;


