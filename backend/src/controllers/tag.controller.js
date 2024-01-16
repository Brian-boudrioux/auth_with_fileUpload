const tagModel = require("../models/tag.model");

const getAll = async (req, res, next) => {
  try {
    const [tags] = await tagModel.findAll();
    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
