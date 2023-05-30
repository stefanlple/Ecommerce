const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getCart = asyncHandler(async (req, res) => {
  const user = req.user._id;
  const cart = await Cart.findOne({ user });
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
  const cartExist = await Cart.findOne({ user: user });

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
  const user = req.user._id;
  const body = req.body;
  const { productId, color, sizes } = body;
  const cartExist = await Cart.findOne({ user });

  // Validate if the product exists in the Product collection
  const product = await Product.findOne({
    _id: productId,
    "options.color.colorname": color,
    "options.sizes.size": sizes.size,
  });

  // Calculate the updated quantity after adding to the cart
  let updatedQuantity = sizes.quantity;
  // Find the matching option within the product's options array
  const matchingOption = product.options.find(
    (option) =>
      option.color.colorname === color &&
      option.sizes.some((size) => size.size === sizes.size)
  );

  if (!matchingOption) {
    res.status(400);
    throw new Error("No product with this options");
  }

  const matchingOptionQuantity = matchingOption.sizes.find(
    (size) => size.size === sizes.size
  ).quantity;

  // Check if the matching option is found and if the requested quantity exceeds the available stock
  if (!matchingOption || updatedQuantity > matchingOptionQuantity) {
    res.status(400);
    throw new Error("Requested quantity exceeds available stock");
  }

  if (cartExist) {
    if (!product) {
      res.status(400);
      throw new Error("Product does not exist or is not available");
    }

    // Check if the product already exist in the cart
    const existingProduct = cartExist.products.find(
      (product) =>
        product.productId.toString() === productId &&
        product.color === color &&
        product.sizes.size === sizes.size
    );

    updatedQuantity = existingProduct
      ? existingProduct.sizes.quantity + sizes.quantity
      : sizes.quantity;

    // Check if the matching option is found and if the requested quantity exceeds the available stock
    if (!matchingOption || updatedQuantity > matchingOptionQuantity) {
      res.status(400);
      throw new Error("Requested quantity exceeds available stock");
    }

    if (existingProduct) {
      // If the product exists, increment the quantity
      existingProduct.sizes.quantity += sizes.quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cartExist.products.push({
        productId,
        color,
        sizes,
      });
    }

    await cartExist.save();
    res.status(200).json(cartExist);
  } else if (!cartExist) {
    const product = [
      {
        productId,
        color,
        sizes,
      },
    ];

    const cart = await Cart.create({
      user,
      products: product,
    });

    res.status(200).json(cart);
  } else {
    res.status(401);
    throw new Error("There is no cart with this id");
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
  await Product.bulkWrite(bulkOptions);
};

module.exports = {
  getCart,
  registerCart,
  addToCart,
  deleteCart,
  deleteProductfromCart,
};
