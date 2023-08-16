import React from 'react'

import { t } from '@/i18n'
import { useBooking } from '@/hooks'
import mock from '@/rooms'

const BookingList: React.FC = () => {
  const {
    bookingInfo: { roomId },
  } = useBooking()
  const room = mock.rooms[+(roomId || 1) - 1]

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
    </div>
  )
}

export default BookingList
