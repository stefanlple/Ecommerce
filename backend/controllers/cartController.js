const CartItem = require("../models/cartItemModel");
const Cart = require("../models/cartModel");

const addProductToCart = async (req, res) => {
  const user = req.user.id;
  const cartItem = CartItem.create({});
  //put item into cart
};
