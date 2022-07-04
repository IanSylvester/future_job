const Product = require("../models/Product");

// Get all Products
const getProducts = async (req, res) => {
  const products = await Product.find();
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all Products by Category
const getProductsByCategory = async (req, res) => {
  const products = await Product.find({ category_id: req.params.category_id });
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all Products by Subcategory
const getProductsBySubcategory = async (req, res) => {
  const products = await Product.find({
    subCategory_id: req.params.subCategory_id,
  });
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all Products by Vendor
const getProductsByVendor = async (req, res) => {
  const products = await Product.find({ vendor_id: req.params.vendor_id });
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create Product
const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getProducts,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductsByVendor,
  createProduct,
};
