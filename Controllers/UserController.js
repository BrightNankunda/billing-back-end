const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const User = require('../Models/UserModel')

exports.RegisterUser = async (req, res) => {

   const {email, password} = req.body
   try {
      const userAlreadyExists = await User.findOne({email})
      if(userAlreadyExists) {
         res.json('USER ALREADY EXISTS')
         return
      }
      const newUser = new User({email, password})
      const AuthedUser = await newUser.save()
      res.json({
         AuthedUser, 
         token: generateAccessToken(AuthedUser)
      })
   } catch(err) {
      console.log(err.message)
   }
}

exports.LoginUser = async(req, res) => {
   const {email, password} = req.body
   const AuthedUser = await User.findOne({email})
   if(AuthedUser) {
      const isValid = await AuthedUser.isPasswordValid(password)
      if(isValid) {
         res.json({
            AuthedUser, 
            token: generateAccessToken(AuthedUser)
         })
      } else {
         res.json('Invalid Password')
      }
   } else {
      console.log('USER NOT FOUND')
   }
}

const generateAccessToken = (user) => {
   return jwt.sign({
      id: user._id,
      email: user.email, 
      name: Math.round(Math.random() * 100)}, 
   process.env.TOKEN_SECRET || 'UG_BILLER')
}