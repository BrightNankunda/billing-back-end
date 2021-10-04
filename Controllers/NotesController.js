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

exports.fetchASingleNote = async (req, res) => {
   const noteId = req.params.noteId
   try {
      const SingleNote = await Note.findOne({
         _id: noteId,
         createdBy: req.user.id,
      })
      console.log(SingleNote)
      res.json(SingleNote)
   } catch (error) {
      console.log(error.message)
   }
}

exports.deleteANote = async (req, res) => {
   const noteId =  req.params.noteId
   try {
      const DeletedNote = await Note.deleteOne({
         _id: noteId,
         createdBy: req.user.id
      })
      res.status(200).json({'message': 'OK'})
      console.log('Deleted Note', 'OK')
   } catch (error) {
      console.log(error.message);
      res.status(404).json(error.message)
   }
}