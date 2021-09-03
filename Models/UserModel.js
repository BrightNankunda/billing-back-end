const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
   email: {type: String},
   password: {type: String},
   signedIn: {type: Date, default: Date.now}
})

UserSchema.pre('save', async function(next) {
   try {
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(this.password, salt)
      this.password = passwordHash
      next()
   } catch(error) {
      next(error)
   }
})

UserSchema.methods.isPasswordValid = async function(value) {
   try {
      return await bcrypt.compare(value, this.password)
   } catch(error) {
      throw new Error(error)
   }
}

module.exports = mongoose.model('User', UserSchema)