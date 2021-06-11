const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
   res.json({'message':'Trying to create a new client', ClientCreator: req.user.email, clientId: req.user._id})
})

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