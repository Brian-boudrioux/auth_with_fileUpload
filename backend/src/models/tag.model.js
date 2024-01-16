const db = require("../../database/client");

const insert = (tag) => {
  const { name } = tag;

  return db.query("INSERT INTO Tags (name) VALUES (?)", [name]);
};

const findById = (id) => {
  return db.query("SELECT * FROM Tags WHERE video_id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * FROM Tags");
};

module.exports = {
  insert,
  findById,
  findAll,
};
