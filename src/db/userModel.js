const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   email: {
      type: String,
      require: true,
      unique: true
   },
   password: {
      type: String,
      require: true,
   },
   firstName: String,
   lastName: String,
   title: String,
   bio: String,
   createdAt: {
      type: Date,
      default: Date.now()
   }
});

userSchema.pre("save", async function () {
   if (this.isNew) {
      this.password = await bcrypt.hash(this.password, 10)
   };
   // TODO:if user changed his password
})

const User = mongoose.model('User', userSchema);

module.exports = {
   User
}