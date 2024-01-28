const { Post } = require("../db/postModel");
const {
   getPosts,
   getPostById,
   addPost,
   changePostById,
   deletePost
} = require("../services/postsService")


async function getPostsController(req, res) {
   const {
      _id
   } = req.user;


   const posts = await getPosts(_id);
   return res.status(200).json({ posts, status: "success" })
}

async function getPostsByIdController(req, res) {
   const { id } = req.params
   const post = await getPostById(id)
   return res.json({ post, status: "success" })
}

async function addPostController(req, res) {
   const {
      topic,
      text
   } = req.body
   const {
      _id
   } = req.user;

   await addPost({ topic, text }, _id)
   res.json({ status: "success" })
}

async function changePostByIdController(req, res) {
   const { id } = req.params;
   const { topic, text } = req.body

   changePostById(id, { topic, text })
   res.json({ status: "success" })
}

async function deletePostController(req, res) {
   const { id } = req.params
   await deletePost(id)
   res.json({ status: "success" })
}

module.exports = {
   getPostsController,
   getPostsByIdController,
   addPostController,
   changePostByIdController,
   deletePostController
}