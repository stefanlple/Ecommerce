const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
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
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  soldOut: {
    type: Boolean,
    default: false,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
