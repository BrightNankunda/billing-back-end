const express = require('express')
const router = express.Router()

const AdvocateController = require('../Controllers/AdvocateController')

router.get('/', AdvocateController.getAllAdvocates)
// router.get('/client', AdvocateController.getAllClientBills)
// router.get('/user', AdvocateController.getAllUserBills)
router.post('/', AdvocateController.postANewAdvocate)
router.get('/:advocateId', AdvocateController.FetchAnAdvocate)
router.put('/:advocateId', AdvocateController.UpdateAnAdvocate)
router.delete('/:advocateId', AdvocateController.DeleteAnAdvocate)

module.exports = router