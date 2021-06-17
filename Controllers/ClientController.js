const express = require('express')
const Client = require('../Models/ClientModel')

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
      // }, {
      //    createdBy: req.user.id
      })
      console.log(SingleClient)
      res.json(SingleClient)
   } catch (error) {
      console.log(error.message)
   }
}

exports.UpdateOneClient = async (req, res) => {
   const {
      clientId
   } = req.params
   try {
      const toUpdate = await Client.find({
         createdBy: req.user.id
      })
      let toUpdateIds = []
      for (let i = 0; i < toUpdate.length; i++) {
         toUpdateIds.push(toUpdate[i].id)
      }
      const indexofSearchedClient = toUpdateIds.indexOf(clientId.toString())
      if (indexofSearchedClient < 0) {
         console.log('Client not found')
      } else {
         const updatedClient = await Client.findByIdAndUpdate(clientId, req.body, {
            useFindAndModify: false
         })
         console.log('OK, Updated Client')
         res.json({
            'message': 'Client Updated'
         })
      }
   } catch (error) {
      console.log(error.message)
      res.status(500).json(error.message)
   }
}

exports.DeleteOneClient = async (req, user) => {
   const {
      clientId
   } = req.params
   try {
      const deletedClient = await Client.findByIdAndDelete({
         clientId
      })
      console.log('Deleted Client', deletedClient)
   } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message)
   }
}