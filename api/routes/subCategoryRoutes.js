const express = require("express");
const router = express.Router();
const {
  getSubCategories,
  getSubCategoriesByCategory,
  createSubCategory,
} = require("../controllers/subCategoriesController");

router.get("/", getSubCategories);
router.get("/:category_id", getSubCategoriesByCategory);
router.post("/", createSubCategory);

module.exports = router;
