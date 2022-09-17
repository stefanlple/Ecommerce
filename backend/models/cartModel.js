const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 0,
  },
  priceWithTax: {
    type: Number,
    default: 0,
  },
  totalTax: {
    type: Number,
    default: 0,
  },
  priceWithoutTax: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "Not processed",
    enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"],
  },
});

const cartSchema = new mongoose.Schema(
  {
    products: [cartItemSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartItem", cartItemSchema);
module.exports = mongoose.model("Cart", cartSchema);
