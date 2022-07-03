const mongoose = require("mongoose");

const RecipeCardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    ingredients_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            amount: {
                type: Number,
                required: true



            }
        }
    ],
    instructions: {
        type: String,
        required: false,
    },
});

model.exports = mongoose.model("RecipeCard", RecipeCardSchema);


