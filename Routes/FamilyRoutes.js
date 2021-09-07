const express = require('express')
const router = express.Router()

const FamilyController = require('../Controllers/FamilyController')

router.get('/', FamilyController.getAllFamilyBills)
router.get('/client', FamilyController.getAllClientFamilyBills)
router.get('/user', FamilyController.getAllUserFamilyBills)
router.post('/', FamilyController.postANewFamilyBill)
router.get('/:familyBillId', FamilyController.FetchAFamilyBill)
router.put('/:familyBillId', FamilyController.UpdateAFamilyBill)
router.delete('/:familyBillId', FamilyController.DeleteAFamilyBill)

module.exports = router