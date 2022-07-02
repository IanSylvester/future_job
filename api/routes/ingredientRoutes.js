const express = require("express");
const router = express.Router();
const Ingredient = require("../models/Ingredient");

// Get all ingredients
router.get("/", async (req, res) => {
  const ingredients = await Ingredient.find();
  try {
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all ingredient by category
router.get("/:category", async (req, res) => {
  const ingredients = await Ingredient.find({ category: req.params.category });
  try {
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Ingredient
router.post("/", async (req, res) => {
  const newIngredient = new Ingredient(req.body);
  try {
    const savedIngredient = await newIngredient.save();
    res.status(200).json(savedIngredient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
