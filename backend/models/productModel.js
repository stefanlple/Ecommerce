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
      required: true,
    },
    color: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
      trim: true,
    },
    images: {
      data: Buffer,
      contentType: String,
    },
    quantity: {
      type: Number,
      required: [true, "Please add a description"],
    },
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
