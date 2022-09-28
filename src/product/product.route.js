const express = require("express");
const routes = express.Router();
const product = require("./product");
const productService = require("./product.service")(product);

routes.route("/product/:productID").get(productService.getById);
routes.route("/product").post(productService.createProduct);
routes.route("/products").get(productService.getAll);
routes.route("/products").post(productService.createProducts);

module.exports = routes;
