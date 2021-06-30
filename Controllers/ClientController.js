const express = require('express')
const Client = require('../Models/ClientModel')
const Bill = require('../Models/BillerModel')

exports.CreateClient = async (req, res) => {

   const {firstName, middleName, lastName, email, phoneNumber, occupation, address} = req.body
   const newClient = new Client({firstName, middleName, lastName, email, phoneNumber, occupation, address})
   newClient.createdBy = req.user.id
   try { 
      const savedClient = await newClient.save()
      res.status(201).json(savedClient)
   } catch(error) {
      console.log(error.message)
   }
}

exports.FetchClients = async (req, res) => {
   // console.log({'USER': req.user})
   try {
      const allClients = await Client.find({
         createdBy: req.user.id
      })
      res.status(200).json(allClients)
   } catch (error) {
      console.log(error.message)
   }
}

exports.FetchOneClient = async (req, res) => {
   const {
      clientId
   } = req.params

   try {
      const SingleClient = await Client.findOne({
         _id: clientId
      })
         // }, {
         //    createdBy: req.user.id
      // if(SingleClient === null) {
         console.log(SingleClient)
         res.json(SingleClient)
      // } else
   } catch (error) {
      console.log(error.message)
   }
}

exports.UpdateOneClient = async (req, res) => {
   const {
      clientId
   } = req.params
   try {
      const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
         useFindAndModify: false
      })
      res.status(200).json({'message': 'OK'})
      console.log('Updated Client', 'OK')
   } catch(error) {
      console.log(error.message)
      res.json(error.meessage)
   }

   // console.log('DATA', req.body, 'ID', clientId)
   // try {
   //    const toUpdate = await Client.find({
   //       createdBy: req.user.id
   //    })
   //    // let toUpdateIds = []
   //    // for (let i = 0; i < toUpdate.length; i++) {
   //    //    toUpdateIds.push(toUpdate[i].id)
   //    // }
   //    // const indexofSearchedClient = toUpdateIds.indexOf(clientId.toString())
   //    // if (indexofSearchedClient < 0) {
   //    //    console.log('Client not found')
   //    // } else {
   //    //    const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
   //    //       useFindAndModify: false
   //    //    })
   //    //    console.log('OK, Updated Client')
   //    //    res.json({
   //    //       'message': 'Client Updated'
   //    //    })
   //    // }
   // } catch (error) {
   //    console.log(error.message)
   //    res.status(500).json(error.message)
   // }
}

exports.DeleteOneClient = async (req, res) => {
   const {
      clientId
   } = req.params
   try {
      // const clientBills = await Bill.find({
      //    createdBy: req.user.id,
      //    createdFor: clientId
      // })
      const deletedClientBills = await Bill.deleteMany({
         createdBy: req.user.id,
         createdFor: clientId
      })
      if(deletedClientBills.ok === 1){
         const deletedClient = await Client.deleteOne({
            _id: clientId
         })
         if(deletedClient.deletedCount === 1) {
            res.status(200).json({'message': 'OK'})
            console.log('Deleted Client', 'OK')
         } else {
            res.json({"message": "Client not Deleted"})
         }
      }
      // res.json(clientBills)

   } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
   }
}