const Note = require('../Models/NotesModel')

exports.getAllUserNotes = async (req, res) => {
   try {
      const notes = await Note.find({createdBy: req.user.id})
      console.log(notes)
      res.json(notes)
   } catch(err) {
      console.log(err)
      res.status(400).json(err)
   }
}

exports.postANewNote = async (req, res) => {
   const createdBy = req.user.id

   const {
      noteHeader, 
      noteBody, 
   } = req.body
   try {
      const note = new Note({noteHeader, noteBody, createdBy})
      const newNote = await note.save()
      res.status(201).json(newNote)
   } catch(err) {
      console.log(err)
      res.json(err)
   }
}