const db = require("../../database/client");

// The C of CRUD - Create operation

async function create(item) {
  // Execute the SQL INSERT query to add a new item to the "item" table
  const [result] = await db.query(`insert into items (title) values (?)`, [
    item.title,
  ]);

  // Return the ID of the newly inserted item
  return result.insertId;
}

// The Rs of CRUD - Read operations

async function read(id) {
  // Execute the SQL SELECT query to retrieve a specific item by its ID
  const [rows] = await db.query(`select * from items where id = ?`, [id]);

  // Return the first row of the result, which represents the item
  return rows[0];
}

async function readAll() {
  // Execute the SQL SELECT query to retrieve all items from the "item" table
  const [rows] = await db.query(`select * from items`);

  // Return the array of items
  return rows;
}
// The U of CRUD - Update operation
// TODO: Implement the update operation to modify an existing item

async function update(item, id) {
  return db.query("UPDATE items SET ? WHERE id = ?", [item, id]);
}

// The D of CRUD - Delete operation
// TODO: Implement the delete operation to remove an item by its ID

async function remove(id) {
  return db.query("DELETE FROM items WHERE id=?", [id]);
}

module.exports = {
  create,
  read,
  readAll,
  update,
  remove,
};
