const express = require('express')
const router = express.Router()

const ClientController = require('../Controllers/ClientController')

router.post('/', ClientController.CreateClient)

router.get('/', (req, res) => {
   res.json({'message':'Trying to get all clients', ClientGetter: req.user.email, clientId: req.user._id})
})

router.put('/', (req, res) => {
   res.json({'Message': 'Trying to edit client'})
})

router.delete('/', (req, res) => {
   res.json({'Message': 'Trying to delete a client'})
})

module.exports = router