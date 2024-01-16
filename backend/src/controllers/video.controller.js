const videoModel = require("../models/video.model");

const add = async (req, res, next) => {
  try {
    const video = req.body;
    video.URL_video = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;
    video.thumbnail = `${req.protocol}://${req.get("host")}/upload/${
      req.files[1].filename
    }`;
    video.user_id = req.user_id;
    const [result] = await videoModel.insert(video);
    if (result.insertId) res.status(201).json(video);
    else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  add,
};
