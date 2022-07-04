const express = require("express");
const router = express.Router();
const SubCategory = require("../models/SubCategory");

//get all subcategories
router.get("/", async (req, res) => {
  const subcategories = await SubCategory.find();
  try {
    res.status(200).json(subcategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all subcategories by category
router.get("/:category_id", async (req, res) => {
  const subcategories = await SubCategory.find({
    category_id: req.params.category_id,
  });
  try {
    res.status(200).json(subcategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create subcategory
router.post("/", async (req, res) => {
  const newSubCategory = new SubCategory(req.body);
  try {
    const savedSubCategory = await newSubCategory.save();
    res.status(200).json(savedSubCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
