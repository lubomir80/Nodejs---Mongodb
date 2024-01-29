const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const { User } = require("../db/userModel");
const { NotAuthorizedError } = require("../helpers/errors");


async function registration(email, password) {


   const user = new User({
      email, password
      // password: await bcrypt.hash(password, 10)
   })
   await user.save();

};

async function login(email, password) {
   const user = await User.findOne({ email });

   if (!user) {
      throw new NotAuthorizedError(`No user with ${email} found`)
   }

   if (!await bcrypt.compare(password, user.password)) {
      throw new NotAuthorizedError("Wrong password")
   }

   const token = jwt.sign({
      _id: user._id,
      createdAt: user.createdAt
   }, process.env.JWT_SECRET)

   return token
};


module.exports = {
   registration,
   login
}