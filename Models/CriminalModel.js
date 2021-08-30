const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CriminalSchema = new Schema({
   assignedTo: { type: String, required: true},
   status: {type: String, required: true},
   court: { type: String, required: true},
   offence: { type: String, required: true},
   committed: { type: String, required: true},
   remand: { type: String, required: true},
   notes: { type: String, required: true},
   advocateExpenses: { type: Number, required: true},
   firmExpenses: { type: Number, required: true},
   subjectValue: {type: Number, required: true},
   total: {type: Number, required: true},
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now},
   createdFor: {type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true}
})

module.exports = mongoose.model('Criminal', CriminalSchema)