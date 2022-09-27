const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Product = {
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: { type: [String] },
};

const product = mongoose.model("product", Product, "products");

module.exports = product;
