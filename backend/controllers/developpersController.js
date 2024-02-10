const developpers = require("../models/developperSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// dev list
const dev_list = asyncHandler(async (req, res, next) => {
  const alldevs = await developpers.find({}).sort({ createdAt: -1 });
  res.status(200).json(alldevs);
});

//one dev
const dev_one = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  const dev = await developpers.findById(id);
  if (!dev) return res.status(404).json({ err: "no game found" });
  res.status(400).json(dev);
});

//dev post
const dev_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  console.log(name);
  if (!name) return res.status(404).json({ err: "no dev found" });
  const dev = await developpers.create({ name });
  res.status(400).json(dev);
});

//genre delete
const dev_delete = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ err: "no game found" });
  const dev = await developpers.findByIdAndDelete(id);
  if (!dev) return res.status(404).json({ err: "no game found" });
  res.status(400).json(dev);
});

module.exports = { dev_post, dev_delete, dev_one, dev_list };
