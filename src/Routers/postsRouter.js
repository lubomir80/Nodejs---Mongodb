const express = require("express");
const router = express.Router();
const { addPostValidation, putPostValidation } = require("../middlewares/validationMiddlewate.js")
const { getPosts, getPostsById, addPost, editPost, deletePost } = require("../controllers/postsControllers.js")
const modelsMiddleware = require("../middlewares/models.js")
const { asyncWrapper } = require("../helpers/apiHelpers.js")


router.use(modelsMiddleware);

router.get("/", asyncWrapper(getPosts));
router.get("/:id", asyncWrapper(getPostsById));
router.post("/", addPostValidation, asyncWrapper(addPost));
router.put("/:id", putPostValidation, asyncWrapper(editPost))
router.delete("/:id", asyncWrapper(deletePost))


module.exports = { postsRouter: router };