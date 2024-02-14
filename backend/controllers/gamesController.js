const games = require("../models/gameSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const multer = require("multer");

//games list
const games_list = asyncHandler(async (req, res, next) => {
  const allgames = await games
    .find({})
    .populate("genreName")
    .populate("developper")
    .exec();
  res.status(200).json(allgames);
});

//one game
const game_one = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  const game = await games.findById(id);
  if (!game) return res.status(404).json({ err: "no game found" });
  res.status(400).json(game);
});

//game post
const game_post = asyncHandler(async (req, res, next) => {
  console.log(req.file.filename);
  const picture = req.file.filename;
  const { title, description, developper, genreName } = req.body;
  const newGame = {
    title,
    description,
    developper,
    genreName,
    picture,
  };
  if (!newGame) return res.status(404).json({ err: "no game found" });
  const game = await games.create(newGame);
  res.status(400).json(game);
});

//genre delete
const game_delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  const game = await games.findByIdAndDelete(id);
  if (!game) return res.status(404).json({ err: "no game found" });
  res.status(400).json(game);
});

module.exports = { game_one, games_list, game_delete, game_post };
