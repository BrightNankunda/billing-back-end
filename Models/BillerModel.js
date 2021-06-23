const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BillSchema = new Schema({
   propertyType: { type: String, required: true},
   scaleOrRentalType: {type: Number, required: true},
   advocate: {type: Number, required: true},
   landValue: {type: Number, required: true},
   registered: {type: Number, required: true},
   total: {type: Number, required: true},
   createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
   createdOn: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Bill', BillSchema)