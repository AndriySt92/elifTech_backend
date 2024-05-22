import express from "express";
import EventController from '../controllers/eventController.ts'
import { registerValidation } from "../helpers/registerValidation.ts";

const router = express.Router();

router.get('/', EventController.getEvents)
router.post('/:eventId/register', registerValidation, EventController.addParticipant)
router.get('/:eventId/participants', EventController.getParticipants)


export default router