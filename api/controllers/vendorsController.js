const Vendor = require("../models/Vendor");

// Get all Vendors
const getVendors = async (req, res) => {
  const vendors = await Vendor.find();
  try {
    res.status(200).json(vendors);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create Vendor
const createVendor = async (req, res) => {
  const newVendor = new Vendor(req.body);
  try {
    const savedVendor = await newVendor.save();
    res.status(200).json(savedVendor);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getVendors,
  createVendor,
};
