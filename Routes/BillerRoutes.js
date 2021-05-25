const express = require('express')
const router = express.Router()

const BillerController = require('../Controllers/BillerController')

router.get('/', BillerController.getAllBills)
router.post('/', BillerController.postANewBill)

module.exports = router