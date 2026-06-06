const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  price: Number,
  stock: Number,
  brand: String,
  images: [String],
  thumbnail: String,
});

module.exports = mongoose.model("Product", productSchema);