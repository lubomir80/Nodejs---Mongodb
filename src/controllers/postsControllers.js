const {
   getPosts,
   getPostById,
   addPost,
   changePostById,
   deletePost
} = require("../services/postsService")


async function getPostsController(req, res) {
   const { _id: userId } = req.user;

   let {
      skip = 0,
      limit = 5
   } = req.query

   limit = limit > 10 ? 10 : limit

   const posts = await getPosts(userId, { skip, limit });
   return res.status(200).json({ posts, status: "success", skip, limit })
}

async function getPostsByIdController(req, res) {
   const { id: postId } = req.params
   const { _id: userId } = req.user

   const post = await getPostById(postId, userId)
   return res.json({ post, status: "success" })
}

async function addPostController(req, res) {
   const { topic, text } = req.body
   const { _id: userId } = req.user

   await addPost({ topic, text }, userId)
   res.json({ status: "success" })
}

async function changePostByIdController(req, res) {

   const { topic, text } = req.body
   const { id: postId } = req.params
   const { _id: userId } = req.user

   await changePostById(postId, { topic, text }, userId)
   res.json({ status: "success" })
}

async function deletePostController(req, res) {
   const { id: postId } = req.params
   const { _id: userId } = req.user

   await deletePost(postId, userId)
   res.json({ status: "success" })
}

module.exports = {
   getPostsController,
   getPostsByIdController,
   addPostController,
   changePostByIdController,
   deletePostController
}