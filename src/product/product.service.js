const debug = require("debug")("app:productsService");

function productService(Product) {
  async function getAll(req, res) {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      debug(error);
      response.status(500).send(error);
    }
  }
  return { getAll };
}

module.exports = productService;
