import React from 'react'

import { Icon } from '@/components'
import { t } from '@/i18n'
import { useBooking } from '@/hooks'
import roomsMock from '@/rooms'

import mock from './mock'

const Description: React.FC = () => {
  const {
    bookingInfo: { roomId },
  } = useBooking()

  return (
    <>
      <div className="title-box">
        <h2>{t(roomsMock.rooms[+(roomId || 1) - 1].title)}</h2>
        <ul>
          {mock.descriptionList.map((item, index) => (
            <li key={index}>
              <Icon name={item.iconName} />
              {t(item.content)}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-box">
        <p>{t('feel')}</p>
        <p>{t('offer')}</p>
      </div>
    </>
  )
}

export default Description
