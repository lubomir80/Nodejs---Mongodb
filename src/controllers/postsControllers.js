const mongodb = require("mongodb");
const { ObjectId } = mongodb;


async function getPosts(req, res) {
   const posts = await req.db.Posts.find().toArray()
   return res.status(200).json({ posts })
}

async function getPostsById(req, res) {
   const { id } = req.params
   const post = await req.db.Posts.findOne({ _id: new ObjectId(id) })
   if (!post) res.status(400).json({ status: `failure, no post with ${id}` })
   return res.json({ post, status: "success" })
}

async function addPost(req, res) {
   const {
      topic,
      text
   } = req.body

   await req.db.Posts.insertOne({ topic, text })
   res.json({ status: "success" })
}

async function editPost(req, res) {
   const { id } = req.params;
   const { topic, text } = req.body

   await req.db.Posts.updateOne(
      { _id: new ObjectId(id) }
      , { $set: { topic, text } }
   );
   res.json({ status: "success" })
}

async function deletePost(req, res) {
   const { id } = req.params
   const { deletedCount } = await req.db.Posts.deleteOne({ _id: new ObjectId(id) })
   deletedCount === 1 ? res.json({ status: "success" }) : res.json({ status: `Not have contact ${id}` })

}

module.exports = {
   getPosts,
   getPostsById,
   addPost,
   editPost,
   deletePost
}