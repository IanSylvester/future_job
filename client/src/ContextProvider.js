import React, { useState, useEffect, createContext } from "react";
import UserAPI from "./apiCalls/classes/UserAPI";
import CategoryAPI from "./apiCalls/classes/CategoryAPI";
import ProductAPI from "./apiCalls/classes/ProductAPI";

export const Context = createContext({
  users: [],
  setUsers: () => {},
  categories: [],
  setCategories: () => {},
  products: [],
  setProducts: () => {},
  productByCategory: [],
  setProductByCategory: () => {},
  newProduct: { trueProductName: "", productPrice: 0, category_id: "" },
  setNewProduct: () => {},
});

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [productByCategory, setProductByCategory] = useState();
  const [newProduct, setNewProduct] = useState({
    trueProductName: "",
    productPrice: 0,
    category_id: "",
  });

  useEffect(() => {
    UserAPI.getAll().then((data) => setUsers(data));
    CategoryAPI.getAll().then((data) => setCategories(data));
    ProductAPI.getAll().then((data) => setProducts(data));
    ProductAPI.getAllByCategory("62c0c4f9626e095e54f4b6cf").then((data) =>
      setProductByCategory(data)
    );
  }, []);

  const values = {
    users,
    setUsers,
    categories,
    setCategories,
    products,
    setProducts,
    productByCategory,
    setProductByCategory,
    newProduct,
    setNewProduct,
  };

  return (
    <div>
      <Context.Provider value={values}>{children}</Context.Provider>
    </div>
  );
};

export default ContextProvider;
