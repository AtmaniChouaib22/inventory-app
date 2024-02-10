const mongoose = require("mongoose");

const { Schema } = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 25 },
  genre: { type: mongoose.Types.ObjectId, ref: "genres" },
  description: { type: String, required: true, maxLength: 100 },
  developper: { type: mongoose.Types.ObjectId, ref: "develeppers" },
});

gameSchema.virtual("url").get(function () {
  return `/api/games/${this._id}`;
});

module.exports = mongoose.model("games", gameSchema);
