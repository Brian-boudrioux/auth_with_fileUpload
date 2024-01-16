const categoryModel = require("../models/category.model");

const getAll = async (req, res, next) => {
  try {
    const [categories] = await categoryModel.findAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
