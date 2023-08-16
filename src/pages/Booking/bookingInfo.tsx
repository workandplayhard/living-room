import React from 'react'

import { t } from '@/i18n'

import BookingList from './BookingSuccess/bookingList'
import BookingDateTime from './bookingDateTime'
import BookingPrice from './bookingPrice'
import BookingGuests from './bookingGuests'

import { IBookingInfo } from './types'

const BookingInfo: React.FC<IBookingInfo> = ({
  startDate,
  endDate,
  bookingPrice = 650,
  guestTitle = 'guest',
}) => {
  return (
    <>
      <div className="title-box">
        <h1>{t('marketingTeamTitle')}</h1>
      </div>
      <BookingDateTime startDate={startDate} endDate={endDate} />
      <BookingList />
      {!isNaN(bookingPrice) && <BookingPrice bookingPrice={bookingPrice} />}
      <BookingGuests title={guestTitle} />
    </>
  )
}

export default BookingInfo
