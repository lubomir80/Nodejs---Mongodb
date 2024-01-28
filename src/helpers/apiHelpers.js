
const { ValidationError, WrongParamError, Nodejs26ErrorError, NotAuthorizedError } = require("./errors")


const asyncWrapper = (controller) => {
   return (req, res, next) => {
      controller(req, res).catch(next);
   }
}

const errorHandler = (error, req, res, next) => {
   if (error instanceof ValidationError ||
      error instanceof WrongParamError) {
      return res.status(error.status)
   }
   res.status(500).json({ message: error.message })
}

module.exports = {
   asyncWrapper,
   errorHandler
}