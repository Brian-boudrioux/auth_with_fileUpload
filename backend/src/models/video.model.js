const db = require("../../database/client");

const insert = (video) => {
  const { title, description, thumbnail } = video;

  return db.query(
    "INSERT INTO Videos (title, description, URL_video, type_video, thumbnail, category_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      title,
      description,
      video.URL_video,
      video.type_video,
      thumbnail,
      video.category_id,
      video.user_id,
    ]
  );
};

const insertVideoTag = (video, tag) => {
  return db.query("INSERT INTO Add_Tags (video_id, tag_id) VALUES (?, ?)", [
    video,
    tag,
  ]);
};

const findById = (id) => {
  return db.query("SELECT * FROM Videos WHERE video_id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * FROM Videos");
};

module.exports = {
  insert,
  findById,
  findAll,
  insertVideoTag,
};
