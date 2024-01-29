const express = require("express");
const router = express.Router();

const {
   rigstrationController,
   loginController
} = require("../controllers/authControllers.js")
const { asyncWrapper } = require("../helpers/apiHelpers.js")


router.post("/registration", asyncWrapper(rigstrationController));
router.post("/login", asyncWrapper(loginController));



module.exports = { authRouter: router };