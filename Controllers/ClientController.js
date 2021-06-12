const express = require('express')
const Client = require('../Models/ClientModel')

exports.CreateClient = async (req, res) => {
   
   const {clientName} = req.body
   const newClient = new Client({clientName})
   newClient.CreatedBy = req.user.id
   try { 
      const savedClient = await newClient.save()
      res.status(201).json(savedClient)
   } catch(error) {
      console.log(error.message)
   }
}

exports.FetchClients = async (req, res) => {
   console.log(req.user)
   // try {
   //    const allClients = await Client.find()
   //    // const allClients = await Client.find({created: req.user.id})
   //    res.status(200).json(allClients)
   // } catch(error) {
   //    console.log(error.message)
   // }
}

exports.FetchOneClient = async (req, res) => {
   const {clientId} = req.params.id
   console.log(req.user, 'params', req.params.id)
   try {
      const SingleClient = await Client.findById({clientId})
   } catch(error) {
      console.log(error.message)
   }
}