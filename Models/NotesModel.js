const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotesSchema = new Schema({
   noteHeader: {type: String, required: true},
   noteBody: {type: String, required: true},
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Note', NotesSchema)

   