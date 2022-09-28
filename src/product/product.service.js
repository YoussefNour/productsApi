const debug = require("debug")("app:productsService");

const validateProduct = (product) => {
  let errMsgs = [];
  if (!product.Name) errMsgs.push("Name is required");
  if (!product.Price) errMsgs.push("Price is required");
  if (!product.Quantity) errMsgs.push("Quantity is required");
  if (!product.CateogryID) errMsgs.push("CateogryID is required");
  return errMsgs;
};

function productService(Product) {
  const getAll = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({
        success: true,
        resutls: products,
        messages: ["successfuly fetched products"],
      });
    } catch (error) {
      debug(error);
      response.status(500).send({
        success: false,
        resutls: [],
        messages: ["failed to fetch products"],
      });
    }
  };
  const getById = async (req, res) => {
    try {
      Book.findById(req.params.bookId, (err, book) => {
        if (err) {
          console.log(err);
          return res.send(err);
        }
        if (book) {
          req.book = book;
          return next();
        }
        return res.sendStatus(404);
      });
    } catch (error) {
      debug(error);
      response.status(500).send({
        success: false,
        resutls: [],
        messages: ["failed to fetch products"],
      });
    }
  };
  const createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      let errMsgs = validateProduct(product);
      if (errMsgs.length > 0) {
        res.status(400);
        return res.send({
          success: false,
          resutls: [],
          messages: errMsgs,
        });
      }
      await product.save();
      res.status(201);
      return res.json({
        success: true,
        resutls: product,
        messages: ["successfuly created product"],
      });
    } catch (error) {
      debug(error);
      response.status(500).send({
        success: false,
        resutls: [],
        messages: ["failed to create product"],
      });
    }
  };
  const createProducts = async (req, res) => {
    try {
      let products = req.body;
      for (let i = 0; i < products.length; i++) {
        let errMsgs = validateProduct(products[i]);
        if (errMsgs.length > 0) {
          res.status(400);
          return res.send({
            success: false,
            resutls: [],
            messages: `validation error in ${JSON.stringify(
              products[i]
            )}\n${errMsgs.join("")}`,
          });
        }
      }
      await products.forEach(async (product) => {
        let prod = new Product(product);
        await prod.save();
      });
      res.status(200).send({
        success: true,
        resutls: products,
        messages: ["successfuly created products"],
      });
    } catch (error) {
      debug(error);
      response.status(500).send({
        success: false,
        resutls: [],
        messages: ["failed to create product"],
      });
    }
  };
  return { getAll, getById, createProduct, createProducts };
}

module.exports = productService;
