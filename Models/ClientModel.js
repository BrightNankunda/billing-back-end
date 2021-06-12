const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
   clientName: {
      type: String,
      required: true
   },
   createdBy: {type: Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Client', ClientSchema)