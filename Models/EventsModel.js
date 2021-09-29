const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventsSchema = new Schema({
   eventHeader: {type: String, required: true},
   eventBoody: {type: String, required: true},
   start: {type: Date},
   end: {type: Date},
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Event', EventsSchema)

   