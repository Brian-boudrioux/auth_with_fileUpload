const db = require("../../database/client");

const insert = (user) => {
  const { mail, password, username } = user;

  return db.query(
    "INSERT INTO Users (mail, password, username) VALUES (?, ?, ?)",
    [mail, password, username]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM Users WHERE user_id = ?", [id]);
};

const findByUsername = (username) => {
  return db.query("SELECT * FROM Users WHERE username = ?", [username]);
};

const findAll = () => {
  return db.query("SELECT * FROM Users");
};

const update = (user, id) => {
  return db.query("UPDATE Users SET ? WHERE user_id = ?", [user, id]);
};

module.exports = {
  insert,
  findById,
  findByUsername,
  findAll,
  update,
};
