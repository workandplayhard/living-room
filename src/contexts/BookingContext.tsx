import React, { useCallback, useMemo, useState } from 'react'

import { IAttendee } from '@/types'

interface IBookingInfo {
  id?: number
  meetingTitle?: string
  guests?: number
  attendees?: IAttendee[]
  roomId?: number | string
  price?: number
  startTime?: string
  endTime?: string
}
interface IBookingContext {
  bookingInfo: IBookingInfo
  // eslint-disable-next-line no-unused-vars
  onChangeBookingInfo: (val: Partial<IBookingInfo>) => void
}

export const BookingContext = React.createContext<IBookingContext>({
  bookingInfo: {
    id: 0,
    startTime: '',
    endTime: '',
    guests: undefined,
    price: 0,
    roomId: 0,
    meetingTitle: '',
    attendees: [],
  },
  onChangeBookingInfo: () => null,
})

export const BookingContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [bookingInfo, setBookingInfo] = useState<IBookingInfo>({
    id: 0,
    startTime: '',
    endTime: '',
    guests: undefined,
    price: 0,
    roomId: 0,
    meetingTitle: '',
    attendees: [],
  })

  const onChangeBookingInfo = useCallback((data: Partial<IBookingInfo>) => {
    setBookingInfo(perv => ({ ...perv, ...data }))
  }, [])

  const values = useMemo(
    () => ({ bookingInfo, onChangeBookingInfo }),
    [bookingInfo, onChangeBookingInfo],
  )

  return (
    <BookingContext.Provider value={values}>{children}</BookingContext.Provider>
  )
}
