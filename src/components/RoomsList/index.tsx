import React from 'react'
import { useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { chooseLivingRoomPath } from '@/utils'

import CardBox from './cardbox'

import mock from '@/rooms'

interface IRoomsList {
  choose?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick?: (id: number) => void
}

export const RoomsList: React.FC<IRoomsList> = ({ onClick }) => {
  const navigate = useNavigate()

  return (
    <div className="rooms-list">
      {mock.rooms.map((card, index) => (
        <CardBox
          id={card.id}
          key={index}
          imgURL={card.imgURL}
          title={t(card.title)}
          iconNames={card.iconNames}
          iconTitle={t(card.iconTitle)}
          onClick={
            onClick
              ? () => onClick(card.id)
              : () => navigate(chooseLivingRoomPath)
          }
        />
      ))}
    </div>
  )
}

export default RoomsList
