const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

const getCart = async (req, res) => {
  res.json({ all: "asdfsdf" });
};

const registerCart = async (req, res) => {
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
};

const addToCart = async (req, res) => {
  const user = req.user._id;
  const products = req.body.products;
  const query = req.params.cartId;

  const cartExist = await Cart.findOne({ user });
  if (cartExist) {
    await Cart.updateOne(query, { $push: { products: product } });
    decreaseQuantity(products);
  } else {
    res.status(400);
    throw new Error("The cart already exists");
  }
};
const deleteCart = async (req, res) => {
  res.json({ all: "asdfsdf" });
};

const deleteProductfromCart = async (req, res) => {
  res.json({ all: "asdfsdf" });
};

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
