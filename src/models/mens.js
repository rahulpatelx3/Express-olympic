const mongoose = require('mongoose');

const menSchema = mongoose.Schema({
  ranking : {
    type: Number,
    require: true,
    unique: true
  },
  dob: {
    type: Date,
    require: true,
    trim: true
  },
  country: {
    type: String,
    require: true,
    trim: true
  },
  score: {
    type: Number,
    require: true,
    trim: true
  },
  name: {
    type: String,
    require: true,
    trim: true
  },
  event: {
    type: String,
    default: "100m"
  }
});
module.exports = mongoose.model("MensRanking",menSchema);