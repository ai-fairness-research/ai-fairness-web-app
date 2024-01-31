const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  instructions: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Model", modelSchema);
