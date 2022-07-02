const mongoose = require("mongoose");

const vendorSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 255 
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    phone: {
        type: String, 
        required: true, 
        unique: false
    },
});

    module.exports = mongoose.model("Vendor", vendorSchema);
