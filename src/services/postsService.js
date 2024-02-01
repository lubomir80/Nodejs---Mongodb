const { Post } = require("../db/postModel");
const { WrongParamError } = require("../helpers/errors")

async function getPosts(userId, { skip, limit }) {
   const posts = await Post.find({ userId })
      .select({ __v: 0 })
      .skip(skip).limit(limit)
   return posts
};

async function getPostById(postId, userId) {
   const post = await Post.findOne({ _id: postId, userId })

   // ERROR with inccorect ID.....Fix

   if (!post) {
      throw new WrongParamError(`failure, no post with ${postId}`)
   }
   return post
};

async function addPost({ topic, text }, userId) {
   const post = new Post({ topic, text, userId });
   await post.save();
};

async function changePostById(postId, { topic, text }, userId) {
   await Post.findOneAndUpdate(
      { _id: postId, userId }, { $set: { topic, text } }
   );
};


async function deletePost(postId, userId) {
   await Post.findOneAndDelete({ _id: postId, userId });
};

module.exports = {
   getPosts,
   getPostById,
   addPost,
   changePostById,
   deletePost
}