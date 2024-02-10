const genre = require("../models/genreSchema");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

//all genres
exports.genre_list = asyncHandler(async (req, res, next) => {
  const allGenres = await genre.find({}).exec();
  res.status(200).json(allGenres);
});

//one genre
exports.genre_one = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: "no such genre" });
  }
  const book = await genre.findById(id);
  if (!book) {
    return res.status(404).json({ msg: "no such genre" });
  }
  res.status(200).json(book);
});

//post genre
exports.genre_create = asyncHandler(async (req, res, next) => {});
//delete genre
exports.genre_delete = asyncHandler(async (req, res, next) => {});
