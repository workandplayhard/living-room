export interface IHeader {
  date: Date
  format?: string
}

export interface ISetTicket {
  // eslint-disable-next-line no-unused-vars
  handleCounter: (val: number) => void
  // eslint-disable-next-line no-unused-vars
  openModal: (val: string | null) => void
  counter: number
}

export interface Detail {
  fullName: string
  dateOfBirth: Date | string
  mobileNumber: string
  email: string
  businessName: string
  industry: string
}

export interface ISetAtendeeDetails {
  // eslint-disable-next-line no-unused-vars
  openModal: (val: boolean) => void
}
