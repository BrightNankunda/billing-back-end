const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Family = require('../Models/FamilyModel')

exports.getAllFamilyBills = async (req, res) => {
   const allFamilyBills = await Family.find()
   res.status(200).json(allFamilyBills)
}

exports.getAllClientFamilyBills = async (req, res) => {
   const {clientId} = req.body
   
   const clientFamilyBills = await Family.find({
      createdBy: req.user.id, 
      createdFor: clientId
   })
   res.status(200).json(clientFamilyBills)
}

exports.getAllUserFamilyBills = async (req, res) => {
   const userFamilyBills = await Family.find({
      createdBy: req.user.id
   })
   res.status(200).json(userFamilyBills)
   // res.status(200).json(FamilyBills.map(Family => (...Family, 
   //    Family.closeDate: new Date(Family.closeDate).toISOString(),
   //    Family.openDate: new Date(Family.openDate).toLocaleString()
   // )))
}

exports.postANewFamilyBill = (req, res) => {
   const {
      selection,
      capital,
      total,
      clientId
   } = req.body;
   
   const newFamilyBill = new Family({
      selection,
      capital,
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

exports.FetchAFamilyBill = async (req, res) => {
   const {
      familyBillId
   } = req.params
   const {clientId} = req.body

   try {
      const SingleFamilyBill = await Family.findOne({
         _id: familyBillId,
         createdBy: req.user.id,
         // createdFor: clientId
      })
         // }, {
         //    createdBy: req.user.id
      console.log(SingleFamilyBill)
      res.json(SingleFamilyBill)
   } catch (error) {
      console.log(error.message)
   }
}

exports.UpdateAFamilyBill = async (req, res) => {
   const {
      familyBillId
   } = req.params
   try {
      const updatedBill = await Family.findByIdAndUpdate(familyBillId, req.body, {
         useFindAndModify: false
      })
      res.status(200).json({'message': 'OK'})
      console.log('Updated Family', 'OK')
   } catch(error) {
      console.log(error.message)
      res.json(error.meessage)
   }

}
exports.DeleteAFamilyBill = async (req, res) => {
   const {
      familyBillId
   } = req.params
   try {
      const DeletedFamily = await Family.deleteOne({
         _id: familyBillId
      })
      res.status(200).json({'message': 'OK'})
      console.log('Deleted Family', 'OK')
   } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
   }
}