const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Criminal = require('../Models/CriminalModel')

exports.getAllCriminals = async (req, res) => {
   const criminals = await Criminal.find()
   res.status(200).json(criminals)
}

exports.getAllClientCriminals = async (req, res) => {
   const {clientId} = req.body
   
   const criminals = await Criminal.find({
      createdBy: req.user.id, 
      createdFor: clientId
   })
   res.status(200).json(criminals)
}

exports.getAllUserCriminals = async (req, res) => {
   const criminals = await Criminal.find({
      createdBy: req.user.id
   })
   res.status(200).json(criminals)
}

exports.postANewCriminal = (req, res) => {
   const {
      assignedTo,
      status,
      court,
      offence,
      committed,
      remand,
      notes,
      advocateExpenses,
      firmExpenses,
      subjectValue,
      total,
      clientId
   } = req.body;
   
   const newCriminal = new Criminal({
      assignedTo,
      status,
      court,
      offence,
      committed,
      remand,
      notes,
      advocateExpenses,
      firmExpenses,
      subjectValue,
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

exports.FetchACriminal = async (req, res) => {
   const {
      criminalId
   } = req.params
   const {clientId} = req.body

   try {
      const SingleCriminal = await Criminal.findOne({
         _id: criminalId,
         createdBy: req.user.id,
         // createdFor: clientId
      })
         // }, {
         //    createdBy: req.user.id
      console.log(SingleCriminal)
      res.json(SingleCriminal)
   } catch (error) {
      console.log(error.message)
   }
}

exports.UpdateACriminal = async (req, res) => {
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

}
exports.DeleteACriminal = async (req, res) => {
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