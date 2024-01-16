const router = require("express").Router();

const categoryController = require("../controllers/category.controller");

router.get("/categories", categoryController.getAll);

module.exports = router;
