const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
   topic: {
      type: String,
      require: true,
      unique: true
   },
   userId: {
      type: String,
      unique: true
   },
   text: {
      type: String,
      require: true,
   },
   createdAt: {
      type: Date,
      default: Date.now()
   }
});

const Post = mongoose.model('Post', postSchema);

module.exports = {
   Post
}