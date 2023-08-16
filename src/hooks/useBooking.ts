import { useContext } from 'react'

import { BookingContext } from '@/contexts'

export const useBooking = () => useContext(BookingContext)
