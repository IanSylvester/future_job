const SubCategory = require("../models/SubCategory");

// Get all Subcategories
const getSubCategories = async (req, res) => {
  const subcategories = await SubCategory.find();
  try {
    res.status(200).json(subcategories);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get all Subcategories by Category
const getSubCategoriesByCategory = async (req, res) => {
  const subcategories = await SubCategory.find({
    category_id: req.params.category_id,
  });
  try {
    res.status(200).json(subcategories);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create Subcategory
const createSubCategory = async (req, res) => {
  const newSubCategory = new SubCategory(req.body);
  try {
    const savedSubCategory = await newSubCategory.save();
    res.status(200).json(savedSubCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSubCategories,
  getSubCategoriesByCategory,
  createSubCategory,
};
