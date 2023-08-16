import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { NavHeader, RoomsList, DataBox } from '@/components'
import { t } from '@/i18n'
import { homePath, roomDetailsPath, generatePath } from '@/utils'
import { useBooking } from '@/hooks'

const ChooseLivingRoomPage: React.FC = () => {
  const navigate = useNavigate()
  const { bookingInfo, onChangeBookingInfo } = useBooking()

  const handleSelectedRoom = useCallback(
    (roomId: number) => {
      onChangeBookingInfo({ roomId })
      navigate(generatePath(roomDetailsPath, { id: roomId }))
    },
    [navigate, onChangeBookingInfo],
  )

  return (
    <>
      <div className="toolbar dark">
        <div className="container">
          <NavHeader
            canBack
            title={t('choose')}
            onBack={() => navigate(homePath)}
          />
          <DataBox
            startTime={bookingInfo.startTime}
            endTime={bookingInfo.endTime}
            guests={bookingInfo.guests}
          />
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <RoomsList onClick={(roomId: number) => handleSelectedRoom(roomId)} />
        </div>
      </div>
    </>
  )
}

export default ChooseLivingRoomPage
