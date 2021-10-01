const express = require('express')
const router = express.Router()

const NotesController = require('../Controllers/NotesController')

router.get('/user',NotesController.getAllUserNotes)
router.post('/', NotesController.postANewNote)

module.exports = router