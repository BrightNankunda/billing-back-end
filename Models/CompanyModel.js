const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
   selection: {type: Number, required: true},
   capital: {type: Number, required: true},
   total: {type: Number, required: true},
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now},
   createdFor: {type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true}
})

module.exports = mongoose.model('Company', CompanySchema)