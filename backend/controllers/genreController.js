const genres = require("../models/genreSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
//genres list
const genre_list = asyncHandler(async (req, res, next) => {
  const allgenres = await genres.find({}).sort({ createdAt: -1 });
  res.status(200).json(allgenres);
});
//one genre 
const genre_one = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no genre found" });
  const genre = await genres.findById(id);
  if (!genre) return res.status(404).json({ err: "no genre found" });
  res.status(400).json(genre);
});
//genre post 
const genre_post = asyncHandler(async (req, res, next) => {
  const { genreName } = req.body;
  if (!genreName) return res.status(404).json({ err: "no genre found" });
  const newGenre = await genres.create({ genreName });
  res.status(400).json(newGenre);
});
//genre delete 
const genre_delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no genre found" });
  const genre = await genres.findByIdAndDelete(id)
  if (!genre) return res.status(404).json({ err: "no genre found" });
  res.status(400).json(genre);
});

module.exports = { genre_delete, genre_list, genre_one, genre_post };
