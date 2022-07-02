const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
    {
        trueProductName: {
            type: String,
            required: true
        },
        productNickname: {
            type: String,
            required: false,
            minlength: 3,
            maxlength: 255
        },
        productPrice: {
            type: Number,
            required: true
        },   
        productBrand: {
            type: String,
            required: false
        },
        productSKU: {
            type: String,
            required: false,
        },
        vendor: {
            type: Schema.Types.ObjectId,
            ref: "Vendor"
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
        subCategory: {
            type: Schema.Types.ObjectId,
            ref: "SubCategory"
        }
          
    });

mongoose.model("Ingredient", ingredientSchema);