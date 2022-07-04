import React, { useState, useEffect, createContext } from "react";
import UserAPI from "./apiCalls/classes/UserAPI";
import CategoryAPI from "./apiCalls/classes/CategoryAPI";
import ProductAPI from "./apiCalls/classes/ProductAPI";
import VendorAPI from "./apiCalls/classes/VendorAPI";
import SubCategoryAPI from "./apiCalls/classes/SubCategoryAPI";

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
  vendors: [],
  setVendors: () => {},
});

const ContextProvider = ({ children }) => {
  const [subCategories, setSubCategories] = useState([]);
  const [subCatsByCatId, setSubCatsByCatId] = useState([]);
  const [users, setUsers] = useState();
  const [categories, setCategories] = useState();
  const [vendors, setVendors] = useState();
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
    VendorAPI.getAll().then((data) => setVendors(data));
    SubCategoryAPI.getAll().then((data) => setSubCategories(data));
    SubCategoryAPI.getAllByCategory("62c0c4f9626e095e54f4b6cf").then((data) => 
      setSubCatsByCatId(data));
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
    vendors,
    setVendors,
    subCategories,
    setSubCategories,
    subCatsByCatId,
    setSubCatsByCatId,
  };

  return (
    <div>
      <Context.Provider value={values}>{children}</Context.Provider>
    </div>
  );
};

export default ContextProvider;
