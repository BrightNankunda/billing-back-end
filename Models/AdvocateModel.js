const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AdvocateSchema = new Schema({
   firstName: { type: String, required: true},
   lastName: {type: String, required: true},
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Advocate', AdvocateSchema)