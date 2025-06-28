const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  summary: {
    type: String
  },
  mood: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Entry', entrySchema);
