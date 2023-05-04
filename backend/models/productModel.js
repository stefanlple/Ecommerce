const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "tees",
        "knitwear",
        "top",
        "outerwear",
        "pants",
        "shorts",
        "accessoires",
        "footwear",
        "special",
      ],
      required: true,
    },
    description: [
      {
        type: String,
        required: [true, "Please add a description"],
        trim: true,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    quantity: [
      {
        color: {
          colorname: {
            type: String,
          },
          colorhex: {
            type: String,
          },
        },
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
    ],
    price: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
