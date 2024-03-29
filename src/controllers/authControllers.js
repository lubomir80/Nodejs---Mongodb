const { registration, login } = require("../services/authService")

const rigstrationController = async (req, res) => {
   const {
      email,
      password
   } = req.body


   await registration(email, password);
   res.json({ status: "success" })
}

const loginController = async (req, res) => {
   const {
      email,
      password
   } = req.body

   const token = await login(email, password);

   res.json({ status: "success", token })
}

module.exports = {
   rigstrationController,
   loginController
}