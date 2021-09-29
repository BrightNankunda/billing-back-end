const express = require('express')
const router = express.Router()

const EventsController = require('../Controllers/EventsController')

router.get('/',EventsController.getAllEvents)
// router.get('/user',EventsController.getAllUserUser)
router.post('/',EventsController.postANewEvent)
// router.get('/:eventId',EventsController.FetchAnEvent)
// router.put('/:eventId',EventsController.UpdateAnEvent)
// router.delete('/:eventId',EventsController.DeleteAnEvent)

module.exports = router