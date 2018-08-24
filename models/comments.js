// Get Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const commentsSchema = Schema({
  text: String,
  user: String
});

// Export Schema
const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
