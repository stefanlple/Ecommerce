const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        sizes: {
          size: {
            type: String,
            enum: ["ONESIZE", "XXS", "XS", "S", "M", "L", "XL"],
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
