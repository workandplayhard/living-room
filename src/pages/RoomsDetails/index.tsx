import React, { useCallback, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { t } from '@/i18n'
import { NavHeader, Button } from '@/components'
import { chooseLivingRoomPath, meetingDetailsPath } from '@/utils'
import { useBooking } from '@/hooks'

import Description from './description'
import Facilities from './facilities'
import GeneralInfo from './generalinfo'
import Direction from './direction'
import SetBookingInfoModal from '../Booking/SetBookingInfoModal'

import mock from '@/rooms'

const RoomsDetails: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const bookingInfoRef =
    useRef<React.ElementRef<typeof SetBookingInfoModal>>(null)
  const { bookingInfo, onChangeBookingInfo } = useBooking()
  const { startTime, endTime, guests } = bookingInfo

  const handleNext = useCallback(() => {
    if (startTime && endTime && guests) {
      navigate(`/booking/${meetingDetailsPath}`)
    } else {
      onChangeBookingInfo({ roomId: id })
      bookingInfoRef?.current?.start()
    }
  }, [endTime, guests, id, navigate, onChangeBookingInfo, startTime])

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader
            canBack
            title={t('details')}
            onBack={() => navigate(chooseLivingRoomPath)}
          />
        </div>
      </div>
      <div className="room-details">
        <div className="container">
          <div className="img">
            <img src={mock.rooms[+(id || 1) - 1].imgURL} alt="" />
          </div>
          <Description />
          <Facilities />
          <GeneralInfo />
          <Direction />
          <div className="book-btn">
            <Button className="main-btn" onClick={handleNext}>
              {t('book')}
            </Button>
          </div>
        </div>
      </div>
      <SetBookingInfoModal ref={bookingInfoRef} />
    </>
  )
}

export default RoomsDetails
