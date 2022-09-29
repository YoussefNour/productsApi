function CategoryService(category) {
  const getAll = async (req, res) => {
    try {
      const categories = await category.find({});
      res.status(200).json({
        success: true,
        resutls: categories,
        messages: ["successfuly fetched categories"],
      });
    } catch (error) {
      debug(error);
      res.status(500).send({
        success: false,
        resutls: [],
        messages: ["failed to fetch categories"],
      });
    }
  };
  return { getAll };
}

module.exports = CategoryService;
