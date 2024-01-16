const router = require("express").Router();

const tagController = require("../controllers/tag.controller");

router.get("/tags", tagController.getAll);

module.exports = router;
