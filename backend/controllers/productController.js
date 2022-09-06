const Product = require("../models/productModel");

const registerProduct = (req, res) => {
  res.json({
    message: "asdfaw",
  });
};

const getProduct = (req, res) => {
  res.json({ message: "hallo" });
};

module.exports = { registerProduct, getProduct };
