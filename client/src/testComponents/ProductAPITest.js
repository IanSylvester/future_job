import { useState, useEffect } from "react";
import React from "react";
import ProductAPI from "../apiCalls/classes/ProductAPI";

const ProductAPITest = () => {
  const [products, setProducts] = useState();
  const [productByCategory, setProductByCategory] = useState();
  
  useEffect(() => {
    ProductAPI.getAll().then((data) => setProducts(data));
    ProductAPI.getAllByCategory("62c0c503626e095e54f4b6d1").then((data) =>
      setProductByCategory(data)
    );
  }, []);

  console.log(productByCategory);
  return (
    <div>
      {products &&
        products.map((product) => {
          return <h3 key={product._id}>{product.trueProductName}</h3>;
        })}
    </div>
  );
};

export default ProductAPITest;
