import express from "express";
import EventController from '../controllers/eventController.js'
import { registerValidation } from "../helpers/registerValidation.js";

const router = express.Router();

router.get('/', EventController.getEvents)
router.post('/:eventId/register', registerValidation, EventController.addParticipant)
router.get('/:eventId/participants', EventController.getParticipants)


export default router