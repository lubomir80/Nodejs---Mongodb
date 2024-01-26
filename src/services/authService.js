const bcrypt = require('bcrypt');
const { User } = require("../db/userModel");
const { NotAuthorizedError } = require("../helpers/errors");


async function registration(email, password) {


   const user = new User({
      email, password
      // password: await bcrypt.hash(password, 10)
   })
   await user.save();

};

async function login() {

};


module.exports = {
   registration,
   login
}