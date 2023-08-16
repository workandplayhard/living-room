export type TLang = 'en' | 'he'

export interface ISignInPayload {
  email: string
  password: string
}

export interface ITab {
  id: string
  label: string
}

export interface IAttendee {
  firstName?: string
  lastName?: string
  phoneNumber?: string
}
export interface IRoom {
  id?: number
  meetingTitle?: string
  guests?: number
  attendees?: IAttendee[]
  roomId?: number
  price?: number
  startTime?: string
  endTime?: string
}
