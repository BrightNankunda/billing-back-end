const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/UserController')

router.post('/login', UserController.LoginUser)
router.post('/signin', UserController.RegisterUser)

module.exports = router
