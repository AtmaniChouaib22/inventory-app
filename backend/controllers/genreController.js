const genres = require("../models/genreSchema");
const games = require("../models/gameSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const genre_list = asyncHandler(async (req, res, next) => {
  const genresWithCount = await games.aggregate([
    {
      $group: {
        _id: "$genre",
        gameCount: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "genres",
        localField: "_id",
        foreignField: "_id",
        as: "genre",
      },
    },
    {
      $project: {
        _id: 0,
        genreId: "$_id",
        genreName: { $arrayElemAt: ["$genre.name", 0] },
        gameCount: 1,
      },
    },
  ]);
  res.status(200).json(genresWithCount);
});

//genres list
const genre_liste = asyncHandler(async (req, res, next) => {
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
  res.status(200).json(genre);
});
//genre post
const genre_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  if (!name)
    return res.status(404).json({ err: "please specify a correct value" });
  const newGenre = await genres.create({ name });
  res.status(201).json(newGenre);
});
//genre delete
const genre_delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no genre found" });
  const genre = await genres.findByIdAndDelete(id);
  if (!genre) return res.status(404).json({ err: "no genre found" });
  res.status(200).json(genre);
});

module.exports = { genre_delete, genre_list, genre_one, genre_post };
