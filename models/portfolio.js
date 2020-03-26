const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const portfolioEntrySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  coverImageUrl: {
    type: String,
    required: true
  },
  keywords: {
    type: [String],
    required: false
  },
  when: {
    type: Date,
    required: true
  },
  teamSize: {
    type: Number,
    required: true
  },
  demoLink: {
    type: String
  }
});

module.exports = mongoose.model("PortfolioEntry", portfolioEntrySchema);
