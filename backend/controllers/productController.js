const Product = require("../models/productModel");

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200);
  res.json(product);
};
const registerProduct = async (req, res) => {
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

const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("No product with that id");
  }
};

const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("No product with that id");
  }

  await product.remove();

  res.status(200);
  res.status(200).json({ id: req.params.id });
};

module.exports = { registerProduct, getProduct };
