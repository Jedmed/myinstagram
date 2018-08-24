// Get Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const commentsSchema = Schema({
  post_id: String,
  text: String,
  user: String
});

// Export Schema
const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
