const express = require('express')
const router = express.Router()

const BillerController = require('../Controllers/BillerController')

router.get('/', BillerController.getAllBills)
router.post('/', BillerController.postANewBill)
router.get('/:billId', BillerController.FetchABill)
router.put('/:billId', BillerController.UpdateABill)
router.delete('/:billId', BillerController.DeleteABill)

module.exports = router