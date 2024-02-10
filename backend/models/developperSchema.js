const mongoose = require("mongoose");

const { Schema } = mongoose.Schema;

const develepperSchema = new Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 25 },
  games: [{ games: mongoose.Types.ObjectId, ref: "games" }],
});

develepperSchema.virtual("url").get(function () {
  return `/api/developpers/${this._id}`;
});

module.exports = mongoose.model("games", gameSchema);
