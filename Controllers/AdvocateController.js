const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Advocate = require('../Models/AdvocateModel')

exports.getAllAdvocates = async (req, res) => {
   const advocates = await Advocate.find()
   res.status(200).json(advocates)
}

// exports.getAllClientBills = async (req, res) => {
//    const {clientId} = req.body
   
//    const bills = await Bill.find({
//       createdBy: req.user.id, 
//       createdFor: clientId
//    })
//    res.status(200).json(bills)
// }

// exports.getAllUserBills = async (req, res) => {
//    const bills = await Bill.find({
//       createdBy: req.user.id
//    })
//    res.status(200).json(bills)
// }

exports.postANewAdvocate = (req, res) => {
   const {
      firstName,
      lastName
   } = req.body;
   
   const newAdvocate = new Advocate({
      firstName,
      lastName,
      createdBy: req.user.id
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

exports.FetchAnAdvocate = async (req, res) => {
   const {
      advocateId
   } = req.params
   // const {clientId} = req.body

   try {
      const SingleAdvocate = await Advocate.findOne({
         _id: advocateId,
         createdBy: req.user.id
      })
      console.log(SingleAdvocate)
      res.json(SingleAdvocate)
   } catch (error) {
      console.log(error.message)
      res.json(error.message)
   }
}

exports.UpdateAnAdvocate = async (req, res) => {
   const {
      advocateId
   } = req.params
   try {
      const updatedAdvocate = await Advocate.findByIdAndUpdate(advocateId, req.body, {
         useFindAndModify: false
      })
      res.status(200).json({'message': 'OK'})
      console.log('Updated Advocate', 'OK')
   } catch(error) {
      console.log(error.message)
      res.json(error.meessage)
   }

   // console.log('DATA', req.body, 'ID', advocateId)
   // try {
   //    const toUpdate = await Bill.find({
   //       createdBy: req.user.id
   //    })
   //    // let toUpdateIds = []
   //    // for (let i = 0; i < toUpdate.length; i++) {
   //    //    toUpdateIds.push(toUpdate[i].id)
   //    // }
   //    // const indexofSearchedBill = toUpdateIds.indexOf(advocateId.toString())
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

exports.DeleteAnAdvocate = async (req, res) => {
   const {
      advocateId
   } = req.params
   try {
      const DeletedAdvocate = await Advocate.deleteOne({
         _id: advocateId
      })
      res.status(200).json({'message': 'OK'})
      console.log('Deleted Advocate', 'OK')
   } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
   }
}