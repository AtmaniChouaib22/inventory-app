const mongoose = require("mongoose");

const { Schema } = mongoose;

const genreSchema = new Schema(
  {
    genreName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 15,
    },
  },
  { timestamps: true }
);

genreSchema.virtual("url").get(function () {
  return `/api/genres/${this._id}`;
});

module.exports = mongoose.model("genres", genreSchema);
