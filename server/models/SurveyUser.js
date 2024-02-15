const mongoose = require("mongoose");

const surveyUserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  bornYear: {
    type: String,
  },
  gender: {
    type: String,
  },
  home: {
    type: String,
  },
  education: {
    type: String,
  },
  area: {
    type: String,
  },
  living_desc: {
    type: String,
  },
  isReligion: {
    type: String,
  },
  religion: {
    type: String,
  },
  isMinority: {
    type: String,
  },
  minority: {
    type: Array,
  },
  bias: {
    type: Array,
  },
  answers: {
    type: Array,
  },
  attitude: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("SurveyUser", surveyUserSchema);
