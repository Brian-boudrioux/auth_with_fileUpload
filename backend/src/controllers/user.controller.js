const argon = require("argon2");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const { sendConfirmationMail } = require("../utils/mailer");

const add = async (req, res, next) => {
  try {
    const user = req.body;
    const [result] = await userModel.insert(user);

    if (result.insertId) {
      const [[newUser]] = await userModel.findById(result.insertId);
      const token = jwt.sign({ id: newUser.user_id }, process.env.APP_SECRET, {
        expiresIn: "1d",
      });
      await sendConfirmationMail(newUser.mail, token);
      res.status(201).json(newUser);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const [[user]] = await userModel.findByUsername(username);
    if (!user) res.sendStatus(422);
    else if (await argon.verify(user.password, password)) {
      if (!user.validate) res.sendStatus(401);
      else {
        const token = jwt.sign(
          { id: user.user_id, admin: user.Admin },
          process.env.APP_SECRET,
          {
            expiresIn: "30d",
          }
        );
        res.cookie("auth-token", token, {
          expire: "30d",
          httpOnly: true,
          secure: false,
          sameSite: "Lax",
        });
        res.status(200).json(user);
      }
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const [users] = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getCurrent = async (req, res, next) => {
  try {
    const [[user]] = await userModel.findById(req.user_id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  res.clearCookie("auth-token").sendStatus(200);
};

const validate = async (req, res, next) => {
  try {
    const { token } = req.query;
    if (!token) res.sendStatus(404);
    else {
      const { id } = jwt.verify(token, process.env.APP_SECRET);
      const [[user]] = await userModel.findById(id);
      user.validate = true;
      const [result] = await userModel.update(user, id);
      if (result.affectedRows > 0)
        res.redirect(`${process.env.FRONTEND_URL}/login?activated=true`);
      else res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
  login,
  getAll,
  getCurrent,
  logout,
  validate,
};
