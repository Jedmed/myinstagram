// Get Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const postsSchema = Schema({
  code: String,
  caption: String,
  likes: {
    type: Number,
    min: 0
  },
  id: String,
  display_src: {
    type: String,
    required: true
  }
});

// Export Schema
const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;
