const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Company = require('../Models/CompanyModel')

exports.getAllCompanies = async (req, res) => {
   const Companies = await Company.find()
   res.status(200).json(Companies)
}

exports.getAllClientCompanies = async (req, res) => {
   const {clientId} = req.body
   
   const Companies = await Company.find({
      createdBy: req.user.id, 
      createdFor: clientId
   })
   res.status(200).json(Companies)
}

exports.getAllUserCompanies = async (req, res) => {
   const Companies = await Company.find({
      createdBy: req.user.id
   })
   res.status(200).json(Companies)
   // res.status(200).json(Companies.map(Company => (...Company, 
   //    Company.closeDate: new Date(Company.closeDate).toISOString(),
   //    Company.openDate: new Date(Company.openDate).toLocaleString()
   // )))
}

exports.postANewCompany = (req, res) => {
   const {
      advocateExpenses,
      advocateInstructions,
      assignedTo,
      capital,
      total,
      clientId
   } = req.body;
   
   const newCompany = new Company({
      advocateExpenses,
      advocateInstructions,
      assignedTo,
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

exports.FetchACompany = async (req, res) => {
   const {
      companyId
   } = req.params
   const {clientId} = req.body

   try {
      const SingleCompany = await Company.findOne({
         _id: companyId,
         createdBy: req.user.id,
         // createdFor: clientId
      })
         // }, {
         //    createdBy: req.user.id
      console.log(SingleCompany)
      res.json(SingleCompany)
   } catch (error) {
      console.log(error.message)
   }
}

exports.UpdateACompany = async (req, res) => {
   const {
      companyBillId
   } = req.params
   try {
      const updatedBill = await Company.findByIdAndUpdate(companyBillId, req.body, {
         useFindAndModify: false
      })
      res.status(200).json({'message': 'OK'})
      console.log('Updated Company', 'OK')
   } catch(error) {
      console.log(error.message)
      res.json(error.meessage)
   }

}

exports.DeleteACompany = async (req, res) => {
   const {
      companyId
   } = req.params
   try {
      const DeletedCompany = await Company.deleteOne({
         _id: companyId
      })
      res.status(200).json({'message': 'OK'})
      console.log('Deleted Company', 'OK')
   } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
   }
}