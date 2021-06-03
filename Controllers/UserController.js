const express = require('express')
const User = require('../Models/UserModel')

exports.RegisterUser = async (req, res) => {

   const {email, password} = req.body
   try {
      // const userAlreadyExists = await User.find({email})
      // if(userAlreadyExists) {
      //    res.json('User Already Exists')
      //    return
      // }
      const newUser = new User({email, password})
      const SavedUser = await newUser.save()
      res.json(SavedUser)
   } catch(err) {
      console.log(err.message)
   }
}

exports.LoginUser = async(req, res) => {
   const {email, password} = req.body
   const userExists = await User.find({email})
   if(userExists.length > 0) {
      console.log(userExists.length)
      console.log('User Seen', userExists)
   } else {
      console.log('User Not there')
   }
}