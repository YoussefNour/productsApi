const express = require("express");
const routes = express.Router();
const product = require("./product");
const productService = require("./product.service")(product);

routes.route("/products/").get(productService.getAll);

module.exports = routes;
