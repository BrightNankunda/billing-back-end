const express = require('express')
const router = express.Router()

const CompanyController = require('../Controllers/CompanyController')

router.get('/', CompanyController.getAllCompanies)
router.get('/client', CompanyController.getAllClientCompanies)
router.get('/user', CompanyController.getAllUserCompanies)
router.post('/', CompanyController.postANewCompany)
router.get('/:companyBillId', CompanyController.FetchACompany)
router.put('/:companyBillId', CompanyController.UpdateACompany)
router.delete('/:companyBillId', CompanyController.DeleteACompany)

module.exports = router