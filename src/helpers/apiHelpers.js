const asyncWrapper = (controller) => {
   return (req, res, next) => {
      controller(req, res).catch(next);
   }
}

const errorHandler = (error, req, res, next) => {
   res.status(500).json({ message: error.message })
}

module.exports = {
   asyncWrapper,
   errorHandler
}