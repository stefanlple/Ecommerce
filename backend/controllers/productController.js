const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  res.status(200);
  res.json(product);
});

const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();
  res.status(200);
  res.json(allProducts);
});

const registerProduct = asyncHandler(async (req, res) => {
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

  const productExist = await Product.findOne({ name, color });
  if (productExist) {
    res.status(400);
    throw new Error("Product already exist");
  }

  const product = await Product.create({
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
    res.json(product);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("No product with that id");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200);
  res.json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("No product with that id");
  }

  res.status(200);
  res.json({
    success: true,
    id: req.params.id,
  });
});

module.exports = {
  registerProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
};
