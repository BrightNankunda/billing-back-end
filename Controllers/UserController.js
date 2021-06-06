const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const User = require('../Models/UserModel')

exports.RegisterUser = async (req, res) => {

   const {email, password} = req.body
   try {
      const userAlreadyExists = await User.findOne({email})
      if(userAlreadyExists) {
         res.json('User Already Exists')
         return
      }
      const newUser = new User({email, password})
      const SavedUser = await newUser.save()
      res.json(generateAccessToken(SavedUser))
   } catch(err) {
      console.log(err.message)
   }
}

exports.LoginUser = async(req, res) => {
   const {email, password} = req.body
   const userExists = await User.findOne({email})
   if(userExists.length > 0) {
      console.log(userExists.length)
      console.log('User Seen', userExists)
      
   } else {
      console.log('User Not there')
   }
}

const generateAccessToken = (user) => {
   return jwt.sign({email: user.email, name: Math.round(Math.random() * 100)}, 
   process.env.TOKEN_SECRET || 'UG_BILLER')
}