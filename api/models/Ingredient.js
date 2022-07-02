const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
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
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
});

module.exports = mongoose.model("Ingredient", IngredientSchema);
