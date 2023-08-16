export interface ITimeBox {
  startDate?: Date | string
  endDate?: Date | string
  format?: string
}

export interface IBookingInfo {
  startDate?: Date | string
  endDate?: Date | string
  bookingPrice?: number | undefined
  guestTitle?: string
}

export interface IBookingPrice {
  bookingPrice?: number | undefined
}
