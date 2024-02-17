const developers = require("../models/developerSchema");
const games = require("../models/gameSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const devList = asyncHandler(async (req, res, next) => {
  const devs = await developers.find({}).sort({ name: 1 });
  res.status(200).json(devs);
});

// dev list
const dev_list = asyncHandler(async (req, res, next) => {
  const devsWithCount = await games.aggregate([
    {
      $group: {
        _id: "$developer",
        gameCount: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "developers",
        localField: "_id",
        foreignField: "_id",
        as: "developer",
      },
    },
    {
      $project: {
        _id: 0,
        developerId: "$_id",
        developerName: { $arrayElemAt: ["$developer.name", 0] },
        gameCount: 1,
      },
    },
  ]);
  res.status(200).json(devsWithCount);
});

//one dev
const dev_one = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no developer found" });
  const dev = await developers.findById(id);
  if (!dev) return res.status(404).json({ err: "no developer found" });
  res.status(200).json(dev);
});

//dev post
const dev_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ err: "please specify a correct value" });
  const dev = await developers.create({ name });
  res.status(201).json(dev);
});

//genre delete
const dev_delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no developer found" });
  const dev = await developers.findByIdAndDelete(id);
  if (!dev) return res.status(404).json({ err: "no developer found" });
  res.status(200).json(dev);
});

module.exports = { dev_post, dev_delete, dev_one, dev_list, devList };
