const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const debug = require("debug")("app");
const chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./src/product/product.route");
const categoryRoutes = require("./src/category/category.route");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBNAME}.nhrxx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error "));
db.once("open", function () {
  debug(chalk.green("Connected to Db successfully"));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  morgan("tiny", {
    skip: (req) => {
      return req.originalUrl.includes("public");
    },
  })
);

app.use(cors());

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);

app.listen(port, () => {
  debug(`Server running on port ${chalk.green(port)}`);
});
