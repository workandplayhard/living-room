import Booking from './booking'
import { BookingContextProvider } from '@/contexts'

export default function ({ ...props }) {
  return (
    <BookingContextProvider>
      <Booking {...props} />
    </BookingContextProvider>
  )
}
