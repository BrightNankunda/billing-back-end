const express = require('express')
const router = express.Router()

const ClientController = require('../Controllers/ClientController')

router.post('/', ClientController.CreateClient)

router.get('/', ClientController.FetchClients)

router.get('/:clientId', ClientController.FetchOneClient)

router.put('/:clientId', ClientController.UpdateOneClient)

router.delete('/:clientId', ClientController.DeleteOneClient)

module.exports = router