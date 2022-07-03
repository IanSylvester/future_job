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
router.get("/:category", async (req, res) => {
  const products = await products.find({ category: req.params.category });
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
