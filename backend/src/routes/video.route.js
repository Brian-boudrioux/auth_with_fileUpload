const router = require("express").Router();

const videoController = require("../controllers/video.controller");
const fileUpload = require("../middlewares/fileUpload");
const auth = require("../middlewares/auth");

router.post("/videos", auth.isAuth, fileUpload.any(), videoController.add);

module.exports = router;
