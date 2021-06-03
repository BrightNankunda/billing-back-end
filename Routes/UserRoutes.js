const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/UserController')

router.get('/login', UserController.LoginUser)
router.post('/signin', UserController.RegisterUser)

module.exports = router
