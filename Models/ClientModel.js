const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
   clientName: {type: String, required: true}
})

module.exports = mongoose.model('Client', ClientSchema)