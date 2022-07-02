
const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
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
        
        


    },
});

module.exports = mongoose.model("Vendor", VendorSchema);
