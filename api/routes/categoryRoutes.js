const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Get all Categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  try {
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Category
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;