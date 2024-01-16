const db = require("../../database/client");

const insert = (category) => {
  const { name } = category;

  return db.query("INSERT INTO Categories (name) VALUES (?)", [name]);
};

const findById = (id) => {
  return db.query("SELECT * FROM Categories WHERE video_id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * FROM Categories");
};

module.exports = {
  insert,
  findById,
  findAll,
};
