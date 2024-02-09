const mongoose = require("mongoose");

const { Schema } = mongoose;

const genreSchema = new Schema({
  genre: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
});

module.exports = mongoose.model("genres", genreSchema);
