const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  review: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  savedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Review", reviewSchema);
