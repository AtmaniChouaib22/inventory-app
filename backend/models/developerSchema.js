const mongoose = require("mongoose");

const { Schema } = mongoose;

const developerSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 25 },
});

developerSchema.virtual("url").get(function () {
  return `/api/developers/${this._id}`;
});

module.exports = mongoose.model("developers", developerSchema);
