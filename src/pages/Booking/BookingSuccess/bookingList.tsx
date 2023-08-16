import React from 'react'

import { t } from '@/i18n'
import { useBooking } from '@/hooks'

import mock from '@/rooms'

const BookingList: React.FC = () => {
  const { bookingInfo } = useBooking()
  const room = mock.rooms[+(bookingInfo.roomId || 1) - 1]

  return (
    <div className="booking-list">
      <ul>
        <li>
          <div className="img">
            <span>
              <img src={room.imgURL} alt="" />
            </span>
          </div>
          <div className="info">
            <h3>{t(room.infoTitle)}</h3>
            <p>{t(room.infoContent)}</p>
          </div>
        </li>
      </ul>
      <div className="total">
        <p>
          {t('bookingNumber')} <span>2582</span>
        </p>
        <p>
          {t('numberOfGuest')} <span>{bookingInfo.guests}</span>
        </p>
      </div>
    </div>
  )
}

export default BookingList
