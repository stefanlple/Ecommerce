const Product = require("../models/productModel");

const registerProduct = (req, res) => {
  const {
    name,
    category,
    color,
    description,
    quantity,
    price,
    isActive,
    soldOut,
  } = req.body;
  const images = req.body.file;

  const productExist = Product.findOne({ name, color });
  if (productExist) {
    res.status(400);
    throw new Error("Product already exist");
  }

  const product = Product.create({
    name: name,
    category: category,
    color: color,
    description: description,
    quantity: quantity,
    price: price,
    isActive: isActive,
    soldOut: soldOut,
    images: images,
  });

  if (product) {
    res.status(200);
    res.json({
      _id: product.id,
      name: product.name,
      category: product.category,
      color: product.color,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      isActive: product.isActive,
      soldOut: product.soldOut,
      images: product.images,
    });
  }
};

const getProduct = (req, res) => {
  res.json({ message: "hallo" });
};

module.exports = { registerProduct, getProduct };
