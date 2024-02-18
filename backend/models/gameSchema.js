const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 3, maxLength: 50 },
    genre: { type: mongoose.Types.ObjectId, ref: "genres", required: true },
    description: { type: String, required: true, maxLength: 300 },
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
gameSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("games", gameSchema);
