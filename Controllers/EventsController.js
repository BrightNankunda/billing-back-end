const Event = require('../Models/EventsModel')
const moment = require('moment')

exports.getAllEvents = async (req, res) => {
   try {
      const events = await Event.find({start: {$gte: moment(req.query.start).toDate()}, 
      end: {$lte: moment(req.query.end).toDate()}})
      console.log(events)
      res.json(events)
   } catch(err) {
      console.log(err)
      res.status(400).json(err)
   }
   // .then(response => {
   // }).catch(err => {
   // })
}

exports.postANewEvent = (req, res) => {
   const {
      eventHeader, eventBody, start, end, createdBy
   } = req.body
   const event = new Event({eventHeader, eventBody, start, end, createdBy}).save().then(response => {
      console.log(event)
      res.status(201).json(event)
   }).catch(err => {
      console.log(err)
      res.json(err)
   })
}