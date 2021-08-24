const express = require('express')
const router = express.Router()

const CriminalController = require('../Controllers/CriminalController')

router.get('/', CriminalController.getAllCriminals)
router.get('/client', CriminalController.getAllClientCriminals)
router.get('/user', CriminalController.getAllUserCriminals)
router.post('/', CriminalController.postANewCriminal)
router.get('/:criminalId', CriminalController.FetchACriminal)
router.put('/:criminalId', CriminalController.UpdateACriminal)
router.delete('/:criminalId', CriminalController.DeleteACriminal)

module.exports = router