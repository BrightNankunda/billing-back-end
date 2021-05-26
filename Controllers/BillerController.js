const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bill = require('../Models/BillerModel')

exports.getAllBills = async (req, res) => {
   const bills = await Bill.find()
   res.json(bills)
}

exports.postANewBill = (req, res) => {

   const {
      propertyType, 
      scale, 
      advocate, 
      landValue, 
      total
   } = req.body;

      const newSchema = new Bill({
         propertyType, 
         scale, 
         advocate, 
         landValue,  
         total
      }).save()
      .then(response => {
         res.json(response)
         console.log(response)
      })
      .catch(err => {
         res.send(err.message)
         console.log(err.message)
      })
}