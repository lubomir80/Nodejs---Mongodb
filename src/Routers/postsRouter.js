const express = require("express");
const router = express.Router();
const {
   addPostValidation,
   putPostValidation
} = require("../middlewares/validationMiddlewate.js")
const {
   getPostsController,
   getPostsByIdController,
   addPostController,
   changePostByIdController,
   deletePostController
} = require("../controllers/postsControllers.js")
const { asyncWrapper } = require("../helpers/apiHelpers.js")




router.get("/", asyncWrapper(getPostsController));
router.get("/:id", asyncWrapper(getPostsByIdController));
router.post("/", addPostValidation, asyncWrapper(addPostController));
router.put("/:id", putPostValidation, asyncWrapper(changePostByIdController))
router.delete("/:id", asyncWrapper(deletePostController))


module.exports = { postsRouter: router };