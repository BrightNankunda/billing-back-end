const Event = require('../Models/EventsModel')

exports.getAllEvents = (req, res) => {
   console.log('req')
}

exports.postANewEvent = (req, res) => {
   console.log(req.body)
   res.json(req.body)
}