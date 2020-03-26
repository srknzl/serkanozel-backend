const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogEntrySchema = new Schema({
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
  }
});

module.exports = mongoose.model("BlogEntry", blogEntrySchema);
