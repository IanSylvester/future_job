const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  trueProductName: {
    type: String,
    required: true,
  },
  productNickname: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 255,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productBrand: {
    type: String,
    required: false,
  },
  productSKU: {
    type: String,
    required: false,
  },
  vendor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
});

module.exports = mongoose.model("Ingredient", ProductSchema);
