const Cart = require("../models/cartModel");

const getCart = async (req, res) => {
  res.json({ all: "asdfsdf" });
};
const addCart = async (req, res) => {
  const user = req.user._id;
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

module.exports = {
  getCart,
  addCart,
  updateCart,
  deleteCart,
  deleteProductfromCart,
};
