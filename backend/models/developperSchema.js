const mongoose = require("mongoose");

const { Schema } = mongoose;

const develepperSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 25 },
});

develepperSchema.virtual("url").get(function () {
  return `/api/developpers/${this._id}`;
});

module.exports = mongoose.model("developpers", develepperSchema);
