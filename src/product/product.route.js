const express = require("express");
const routes = express.Router();
const product = require("./product");
const productService = require("./product.service")(product);

routes.use("/product/:productID", productService.getByIdMiddleware);
routes
  .route("/product/:productID")
  .get((req, res) => {
    res.json({
      success: true,
      resutls: [req.product],
      messages: ["successfuly fetched book"],
    });
  })
  .put(productService.update);
routes.route("/product").post(productService.create);
routes.route("/products").get(productService.getAll);
routes.route("/products").post(productService.createBulk);

module.exports = routes;
