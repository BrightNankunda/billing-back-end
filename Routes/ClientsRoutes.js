const express = require('express')
const router = express.Router()

const ClientController = require('../Controllers/ClientController')

router.post('/', ClientController.CreateClient)

router.get('/', ClientController.FetchClients)

router.get('/client', ClientController.FetchOneClient)

router.put('/', (req, res) => {
   res.json({'Message': 'Trying to edit client'})
})

router.delete('/', (req, res) => {
   res.json({'Message': 'Trying to delete a client'})
})

module.exports = router