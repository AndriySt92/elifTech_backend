import mongoose from 'mongoose'
import { IParticipant } from '../interfaces/eventInterfaces'

export interface IEventSchema {
  title: string
  description: string
  event_date: string
  organizer: string
  participants: IParticipant[]
}

const EventSchema = new mongoose.Schema<IEventSchema>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_date: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    participants: {
      type: [
        {
          fullName: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          birth_date: {
            type: Date,
            required: true,
          },
          source: {
            type: String,
            enum: ["social media", "friends", "found myself"],
            required: true,
          },
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('Event', EventSchema)