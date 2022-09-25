const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getCart = asyncHandler(async (req, res) => {
  res.json({ all: "asdfsdf" });
});

const registerCart = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const products = req.body.products;

  const cartExist = await Cart.findOne({ user });
  if (cartExist) {
    res.status(400);
    throw new Error("The cart already exists");
  }

  const cart = await Cart.create({
    user: user,
    products: products,
  });

  decreaseQuantity(products);

  if (cart) {
    res.status(200);
    res.json(cart);
  }
});

const addToCart = asyncHandler(async (req, res) => {
  const products = req.body.products;
  const query = { _id: req.params.cartId };

  const cartExist = await Cart.findOne(query);

  if (cartExist) {
    const cart = await Cart.updateOne(query, { $push: { products: products } });
    res.status(200).json(cart);
  } else {
    res.status(400);
    throw new Error("The cart does not exists");
  }
});

const deleteCart = asyncHandler(async (req, res) => {
  const query = req.params.cartId;

  const product = await Cart.findByIdAndRemove(query);
  if (!product) {
    res.status(400);
    throw new Error("No product with that id");
  }

  res.status(200);
  res.json({
    success: true,
    id: query,
  });
});

const deleteProductfromCart = asyncHandler(async (req, res) => {
  const productId = { productId: req.params.productId };
  const cartId = { _id: req.params.cartId };

  const cartExist = await Cart.findOne(cartId);

  if (cartExist) {
    const cart = await Cart.updateOne(cartId, {
      $pull: { products: productId },
    });
    res.status(200).json(cart);
  } else {
    res.status(400);
    throw new Error("The cart does not exists");
  }
});

const decreaseQuantity = (products) => {
  let bulkOptions = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product },
        update: { $inc: { quantity: -item.quantity } },
      },
    };
  });
  Product.bulkWrite(bulkOptions);
};

module.exports = {
  getCart,
  registerCart,
  addToCart,
  deleteCart,
  deleteProductfromCart,
};
