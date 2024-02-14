const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 25 },
  genreName: { type: mongoose.Types.ObjectId, ref: "genres", required: true },
  description: { type: String, required: true, maxLength: 100 },
  developper: {
    type: mongoose.Types.ObjectId,
    ref: "developpers",
    required: true,
  },
  picture: { type: String },
});

gameSchema.virtual("url").get(function () {
  return `/api/games/${this._id}`;
});

module.exports = mongoose.model("games", gameSchema);
