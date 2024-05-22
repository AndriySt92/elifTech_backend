export interface IParticipant {
  fullName: string
  email: string
  birth_date: string
  source: string
}

export interface IEvent {
  id: string
  title: string
  description: string
  event_date: string
  organizer: string
  participants: IParticipant[]
}
