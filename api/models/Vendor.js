
const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
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
        unique: true
    },
    address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    vendorRep: {
        type: Schema.Types.ObjectId,
        ref: "VendorRep"
    },
});

module.exports = mongoose.model("Vendor", vendorSchema);
