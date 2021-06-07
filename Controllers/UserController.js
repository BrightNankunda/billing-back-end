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
      const SavedUser = await newUser.save()
      res.json({
         SavedUser, 
         token: generateAccessToken(SavedUser)
      })
   } catch(err) {
      console.log(err.message)
   }
}

exports.LoginUser = async(req, res) => {
   const {email, password} = req.body
   const foundUser = await User.findOne({email})
   const isValid = await foundUser.isPasswordValid(password)
   if(foundUser && isValid) {
      res.json({
         user, 
         token: generateAccessToken(userExists)
      })
   } else {
      console.log('USER NOT FOUND')
   }
}

const generateAccessToken = (user) => {
   return jwt.sign({email: user.email, name: Math.round(Math.random() * 100)}, 
   process.env.TOKEN_SECRET || 'UG_BILLER')
}