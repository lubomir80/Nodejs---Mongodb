class Nodejs26ErrorError extends Error {
   constructor(message) {
      super(message);
      this.status = 400;
   }
}

class ValidationError extends Nodejs26ErrorError {
   constructor(message) {
      super(message);
      this.status = 400;
   }
}

class WrongParamError extends Nodejs26ErrorError {
   constructor(message) {
      super(message);
      this.status = 400;
   }
}

class NotAuthorizedError extends Nodejs26ErrorError {
   constructor(message) {
      super(message);
      this.status = 401;
   }
}

module.exports = {
   Nodejs26ErrorError,
   ValidationError,
   WrongParamError,
   NotAuthorizedError,
}