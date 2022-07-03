import { useContext } from "react";
import { Context } from "../ContextProvider";
import React from "react";
import ProductAPI from "../apiCalls/classes/ProductAPI";

const ProductAPITest = () => {
  const context = useContext(Context);
  const { products, newProduct, setNewProduct } = context;

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
    // console.log(newProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ProductAPI.add(newProduct);
  };

  // console.log(productByCategory);
  return (
    <div>
      {products &&
        products.map((product) => {
          return <h3 key={product._id}>{product.trueProductName}</h3>;
        })}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="trueProductName">
          Product Name:
          <input
            value={newProduct.trueProductName}
            type="text"
            name="trueProductName"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="productPrice">
          Product Price:
          <input
            value={newProduct.productPrice}
            type="number"
            name="productPrice"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="category_id">
          Category:
          <input
            value={newProduct.category_id}
            type="text"
            name="category_id"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductAPITest;
