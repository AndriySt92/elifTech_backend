import { validationResult } from 'express-validator'
import EventModel from '../models/eventModel.js'

const EventController = {
  getEvents: async (req, res) => {
    const { page = 1, limit = 12 } = req.query

    const offset = (page - 1) * limit

    try {
      const events = await EventModel.find({}, { participants: 0 }).skip(offset).limit(limit)

      if (!events.length) {
        res.json({ message: 'No events' })
      }

      const totalCount = await EventModel.countDocuments()

      res.json({ totalCount, events })
    } catch (error) {
      console.error('Error in get events:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
  getParticipants: async (req, res) => {
    const { eventId } = req.params

    try {
      const event = await EventModel.findById(eventId, 'title participants')

      if (!event) {
        res.json({ message: 'Event not found' })
      }

      res.json(event)
    } catch (error) {
      console.error('Error in getParticipants:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
  addParticipant: async (req, res) => {
    const { eventId } = req.params
  
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Register data error",
        })
      }

      await EventModel.findByIdAndUpdate(
        eventId,
        {
          $push: { participants: req.body },
        }
      )

      res.status(200).json({message: 'success'})
    } catch (error) {
      console.error('Error in addParticipant', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
}

export default EventController
