const { Post } = require("../db/postModel")


async function getPosts(_, res) {
   const posts = await Post.find()
   return res.status(200).json({ posts })
}

async function getPostsById(req, res) {
   const { id } = req.params
   const post = await Post.findById(id)
   if (!post) res.status(400).json({ status: `failure, no post with ${id}` })
   return res.json({ post, status: "success" })
}

async function addPost(req, res) {
   const {
      topic,
      text
   } = req.body

   const post = new Post({ topic, text });
   await post.save();

   res.json({ status: "success" })
}

async function editPost(req, res) {
   const { id } = req.params;
   const { topic, text } = req.body

   await Post.findByIdAndUpdate(
      id, { $set: { topic, text } }
   );
   res.json({ status: "success" })
}

async function deletePost(req, res) {
   const { id } = req.params
   await Post.findOneAndDelete(id)
   res.json({ status: "success" })
}

module.exports = {
   getPosts,
   getPostsById,
   addPost,
   editPost,
   deletePost
}