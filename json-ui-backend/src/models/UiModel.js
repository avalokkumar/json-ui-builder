const mongoose = require("mongoose");

const UiSchema = new mongoose.Schema({
  jsonData: { type: Object, required: true },
  layout: { type: String, enum: ["table", "tree", "card", "list"], required: true },
  colorScheme: { type: String, required: true },
  fontSize: { type: String, required: true },
});

module.exports = mongoose.model("UiModel", UiSchema);
