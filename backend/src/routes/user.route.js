const router = require("express").Router();

const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.post("/users", auth.hashPassword, userController.add);
router.post("/users/login", userController.login);
router.get("/users", auth.isAuth, auth.isAdmin, userController.getAll);
router.get("/users/me", auth.isAuth, userController.getCurrent);
router.get("/users/logout", auth.isAuth, userController.logout);
router.get("/users/validate", userController.validate);

module.exports = router;
