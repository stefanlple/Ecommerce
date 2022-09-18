const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const CartItem = require("../models/cartModel");
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

const updateCart = async (req, res) => {
  res.json({ all: "asdfsdf" });
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
  updateCart,
  deleteCart,
  deleteProductfromCart,
};
