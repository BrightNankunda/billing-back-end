const express = require('express')
const Client = require('../Models/ClientModel')

exports.CreateClient = async (req, res) => {
   
   const {clientName} = req.body
   try {
      const newClient = new Client({clientName})
      const savedClient = await newClient.save()
      res.json(savedClient)
   } catch(error) {
      console.log(error.message)
   }
}