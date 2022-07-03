const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");

//get all vendors
router.get("/", async (req, res) => {
    const vendors = await Vendor.find();
    try {
        res.status(200).json(vendors);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

//create vendor
router.post("/", async (req, res) => {
    const newVendor = new Vendor(req.body);
    try {
        const savedVendor = await newVendor.save();
        res.status(200).json(savedVendor);
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

export default router;
