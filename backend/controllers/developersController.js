const developers = require("../models/developerSchema");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

// dev list
const dev_list = asyncHandler(async (req, res, next) => {
  const alldevs = await developers.find({}).sort({ createdAt: -1 });
  res.status(200).json(alldevs);
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

module.exports = { dev_post, dev_delete, dev_one, dev_list };
