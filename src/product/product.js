const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Product = {
  Name: { type: String, required: true },
  Price: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  ImgURL: { type: String },
  CateogryID: { type: Number, required: true },
};

const product = mongoose.model("product", Product, "product");

module.exports = product;
