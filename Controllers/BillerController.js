const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bill = require('../Models/BillerModel')

exports.getAllBills = async (req, res) => {
   const bills = await Bill.find()
   res.status(200).json(bills)
}

exports.getAllClientBills = async (req, res) => {
   const {clientId} = req.body
   
   const bills = await Bill.find({
      createdBy: req.user.id, 
      createdFor: clientId
   })
   res.status(200).json(bills)
}

exports.getAllUserBills = async (req, res) => {
   const bills = await Bill.find({
      createdBy: req.user.id
   })
   res.status(200).json(bills)
}

exports.postANewBill = (req, res) => {
   const {
      propertyType, 
      scale, 
      advocate, 
      landValue, 
      registered,
      rentalType,
      total,
      clientId
   } = req.body;
   
   const newBill = new Bill({
      propertyType, 
      scaleOrRentalType: scale || rentalType, 
      advocate, 
      landValue,  
      registered,
      total,
      createdBy: req.user.id,
      createdFor: clientId
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

exports.FetchABill = async (req, res) => {
   const {
      billId
   } = req.params
   const {clientId} = req.body

   try {
      const SingleBill = await Bill.findOne({
         _id: billId,
         createdBy: req.user.id,
         createdFor: clientId
      })
         // }, {
         //    createdBy: req.user.id
      console.log(SingleBill)
      res.json(SingleBill)
   } catch (error) {
      console.log(error.message)
   }
}

exports.UpdateABill = async (req, res) => {
   const {
      billId
   } = req.params
   try {
      const updatedBill = await Bill.findByIdAndUpdate(billId, req.body, {
         useFindAndModify: false
      })
      res.status(200).json({'message': 'OK'})
      console.log('Updated Bill', 'OK')
   } catch(error) {
      console.log(error.message)
      res.json(error.meessage)
   }

   // console.log('DATA', req.body, 'ID', billId)
   // try {
   //    const toUpdate = await Bill.find({
   //       createdBy: req.user.id
   //    })
   //    // let toUpdateIds = []
   //    // for (let i = 0; i < toUpdate.length; i++) {
   //    //    toUpdateIds.push(toUpdate[i].id)
   //    // }
   //    // const indexofSearchedBill = toUpdateIds.indexOf(billId.toString())
   //    // if (indexofSearchedBill < 0) {
   //    //    console.log('Bill not found')
   //    // } else {
   //    //    const updatedBill = await Bill.findByIdAndUpdate(BillId, req.body, {
   //    //       useFindAndModify: false
   //    //    })
   //    //    console.log('OK, Updated Bill')
   //    //    res.json({
   //    //       'message': 'Bill Updated'
   //    //    })
   //    // }
   // } catch (error) {
   //    console.log(error.message)
   //    res.status(500).json(error.message)
   // }
}

exports.DeleteABill = async (req, res) => {
   const {
      billId
   } = req.params
   try {
      const DeletedBill = await Bill.deleteOne({
         _id: billId
      })
      res.status(200).json({'message': 'OK'})
      console.log('Deleted Bill', 'OK')
   } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
   }
}