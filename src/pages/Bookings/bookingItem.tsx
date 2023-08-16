import React from 'react'
import { useNavigate } from 'react-router-dom'

import { DateTime } from '@/components'
import { t } from '@/i18n'
import { bookingDetailPath } from '@/utils'

import { IBook } from './types'

interface Props {
  item: IBook
}

const BookingItem: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate()

  return (
    <li
      onClick={() =>
        navigate({ pathname: bookingDetailPath, search: item.name })
      }
    >
      <div className="img">
        <span>
          <img src={item.roomImgUrl} alt="" />
        </span>
      </div>
      <div className="info">
        <h3>{t(item.name)}</h3>
        <p>
          <span className="icon-calendar" />
          <DateTime
            value={item.startTime}
            format="DD MMM, HH:mm"
            className="date-time"
          />
          {' - '}
          <DateTime value={item.endTime} format="HH:mm" className="date-time" />
        </p>
        <p>
          <span className="icon-group" />
          {t('guestsNum', {
            postProcess: 'interval',
            count: item.guests.length,
            applyPostProcessor: true,
          })}
        </p>
      </div>
    </li>
  )
}

export default BookingItem
