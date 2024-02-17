const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 3, maxLength: 25 },
    genre: { type: mongoose.Types.ObjectId, ref: "genres", required: true },
    description: { type: String, required: true, maxLength: 100 },
    developer: {
      type: mongoose.Types.ObjectId,
      ref: "developers",
      required: true,
    },
    picture: { type: String },
  },
  { timestamps: true }
);

gameSchema.virtual("url").get(function () {
  return `/api/games/${this._id}`;
});

module.exports = mongoose.model("games", gameSchema);
