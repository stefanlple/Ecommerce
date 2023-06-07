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

const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;
  console.log(category);
  const productsByCategory = await Product.find({ category: category });

  res.status(200).json(productsByCategory);
});

const getProductsByName = asyncHandler(async (req, res) => {
  const { name } = req.body;

  console.log(name);
  const regex = new RegExp(name, "i");

  const products = await Product.find({ name: regex });

  if (!products) {
    res.status(400).json("no product with that name");
  }

  res.status(200);
  res.json(products);
});

const registerProduct = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    description,
    modelUrl,
    imageUrls,
    options,
    price,
    isActive,
  } = req.body;

  const productExist = await Product.findOne({ name });
  if (productExist) {
    res.status(400);
    throw new Error("Product already exist");
  }

  const product = await Product.create({
    name,
    category,
    description,
    modelUrl,
    imageUrls,
    options,
    price,
    isActive,
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
  getProductsByName,
  getProductsByCategory,
};
