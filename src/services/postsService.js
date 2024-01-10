const { Post } = require("../db/postModel");
const { WrongParamError } = require("../helpers/errors")

async function getPosts() {
   const posts = await Post.find()
   return posts
};

async function getPostById(id) {
   const post = await Post.findById(id)
   if (!post) throw new WrongParamError(`failure, no post with ${id}`);
   return post
};

async function addPost({ topic, text }) {
   const post = new Post({ topic, text });
   await post.save();
};

async function changePostById(id, { topic, text }) {
   await Post.findByIdAndUpdate(
      id, { $set: { topic, text } }
   );
};


async function deletePost(id) {
   await Post.findOneAndDelete(id);
};

module.exports = {
   getPosts,
   getPostById,
   addPost,
   changePostById,
   deletePost
}