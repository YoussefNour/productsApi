const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const debug = require("debug")("app");
const chalk = require("chalk");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const db = mongoose.connect("mongodb://localhost:27017/storeDb");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  morgan("tiny", {
    skip: (req) => {
      return req.originalUrl.includes("public");
    },
  })
);

app.listen(port, () => {
  debug(`Server running on port ${chalk.green(port)}`);
});
