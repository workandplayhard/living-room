export interface IBook {
  id: string
  name: string
  roomImgUrl: string
  description: string
  startTime: string
  endTime: string
  cost: number
  guests: Guest[]
}

export interface Guest {
  id: string
  fullName: string
  phoneNumber: string
}

export interface IBookings {
  title: string
  status: 'active' | 'inactive'
}
