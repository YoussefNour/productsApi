const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Cateogry = {
  Id: { type: Number, required: true },
  Name: { type: String, required: true },
};

const cateogry = mongoose.model("Cateogry", Cateogry, "Cateogry");

module.exports = cateogry;
