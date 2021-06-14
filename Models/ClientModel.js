const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
   firstName: {
      type: String,
      required: true
   },
   middleName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   phoneNumber: {
      type: String,
      required: true
   },
   occupation: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Client', ClientSchema)