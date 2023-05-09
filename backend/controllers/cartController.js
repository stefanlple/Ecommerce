const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getCart = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const cart = await Cart.findOne({ user }).populate("products.product");
  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(401);
    throw new Error("There is no cart with this id");
  }
});

const registerCart = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const products = req.body.products;
  console.log(products);
  const cartExist = await Cart.findOne({ user });

  if (cartExist) {
    res.status(400);
    throw new Error("The cart already exists");
  }

  const cart = await Cart.create({
    user,
    products,
  });
  //decreaseQuantity(products);

  if (cart) {
    res.status(200);
    res.json(cart);
  } else {
    res.status(401);
    throw new Error("Something went wrong");
  }
});

const addToCart = asyncHandler(async (req, res) => {
  const products = req.body.products;
  const query = { _id: req.params.cartId };

  const cartExist = await Cart.findOne(query);

  if (cartExist) {
    const cart = await Cart.updateOne(query, { $push: { products: products } });
    decreaseQuantity(products);
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

const decreaseQuantity = async (products) => {
  let bulkOptions = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    for (let j = 0; j < product.options.length; j++) {
      const option = product.options[j];

      const filter = {
        _id: product._id,
        "options.color.colorname": option.color.colorname,
        "options.sizes.size": option.sizes.size,
      };

      const update = {
        $inc: {
          "options.$[i].sizes.$[j].quantity": -option.sizes.quantity,
        },
      };

      const arrayFilters = [
        { "i.color.colorname": option.color.colorname },
        { "j.sizes.size": option.sizes.size },
      ];

      bulkOptions.push({ updateOne: { filter, update, arrayFilters } });
    }
  }
  console.log("incoming");
  await Product.bulkWrite(bulkOptions);
};

module.exports = {
  getCart,
  registerCart,
  addToCart,
  deleteCart,
  deleteProductfromCart,
};
