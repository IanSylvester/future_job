const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
});

module.exports = mongoose.model("Category", categorySchema);
