const express = require("express");
const routes = express.Router();
const category = require("./category");
const categoryService = require("./category.service")(category);

routes.route("/categories").get(categoryService.getAll);

module.exports = routes;
