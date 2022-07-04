const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all products by category
router.get("/:category_id", async (req, res) => {
  const products = await Product.find({ category_id: req.params.category_id });
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products by subcategory
router.get("/:category_id/:subCategory_id", async (req, res) => {
  const products = await Product.find({
    subCategory_id: req.params.subCategory_id,
  });
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all products by vendor
router.get("/:vendor_id", async (req, res) => {
  const products = await Product.find({ vendor_id: req.params.vendor_id });
  try {
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Product
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
