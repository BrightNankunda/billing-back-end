const express = require('express')
const router = express.Router()

const NotesController = require('../Controllers/NotesController')

router.get('/user',NotesController.getAllUserNotes)
router.post('/', NotesController.postANewNote)
router.get('/:noteId', NotesController.fetchASingleNote)
router.delete('/:noteId', NotesController.deleteANote)

module.exports = router