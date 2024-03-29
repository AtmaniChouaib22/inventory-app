const games = require("../models/gameSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const multer = require("multer");

//games list
const games_list = asyncHandler(async (req, res, next) => {
  const allgames = await games
    .find({})
    .populate("genre")
    .populate("developer")
    .exec();
  res.status(200).json(allgames);
});

//one game
const game_one = asyncHandler(async (req, res, next) => {
  console.log("id", req.params.id);
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  const game = await games
    .findById(id)
    .populate("genre")
    .populate("developer")
    .exec();
  if (!game) return res.status(404).json({ err: "no game found" });
  res.status(200).json(game);
});

//game post
const game_post = asyncHandler(async (req, res, next) => {
  console.log(req.file.filename);
  const picture = req.file.filename;
  const { title, description, developer, genre } = req.body;
  const newGame = {
    title,
    description,
    developer,
    genre,
    picture,
  };
  if (!newGame) return res.status(404).json({ err: "no game found" });
  const game = await games.create(newGame);
  res.status(201).json(game);
});

//genre delete
const game_delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  const game = await games.findByIdAndDelete(id);
  if (!game) return res.status(404).json({ err: "no game found" });
  res.status(200).json(game);
});

const game_update = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  console.log(req.file.filename);
  const picture = req.file.filename;
  const { title, description, developer, genre } = req.body;
  const updatedGame = {
    title,
    description,
    developer,
    genre,
    picture,
  };
  const game = await games.findByIdAndUpdate(id, updatedGame, { new: true });
  if (!game) return res.status(404).json({ err: "no game found" });
  res.status(200).json(game);
});

module.exports = { game_one, games_list, game_delete, game_post, game_update };
