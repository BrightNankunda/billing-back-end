const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bill = require('../Models/BillerModel')

exports.getAllBills = async (req, res) => {
   const bills = await Bill.find()
   res.json(bills)
}

exports.postANewBill = async (req, res) => {

   const {property, scale, advocate } = req.body;
   const newSchema = new Bill({property})
   const biller = await newSchema.save()
   res.json(biller)
}