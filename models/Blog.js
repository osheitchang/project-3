const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({

  title : String,
  body: String,
  author: String,
  likes:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})



const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;