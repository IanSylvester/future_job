const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductsByVendor,
  createProduct,
} = require("../controllers/productsController");

router.get("/", getProducts);
router.post("/", createProduct);

// Strict Params Here instead of slugs
router.get("/category/:category_id", getProductsByCategory);
router.get("/subCategory/:subCategory_id", getProductsBySubcategory);
router.get("/vendor/:vendor_id", getProductsByVendor);

module.exports = router;
