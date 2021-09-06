const express = require('express')
const router = express.Router()

const CompanyController = require('../Controllers/CompanyController')

router.get('/', CompanyController.getAllCompanies)
router.get('/client', CompanyController.getAllClientCompanies)
router.get('/user', CompanyController.getAllUserCompanies)
router.post('/', CompanyController.postANewCompany)
router.get('/:companyId', CompanyController.FetchACompany)
router.put('/:companyId', CompanyController.UpdateACompany)
router.delete('/:companyId', CompanyController.DeleteACompany)

module.exports = router