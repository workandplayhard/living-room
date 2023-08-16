import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NavHeader, DataBox, Button } from '@/components'
import { CardInfo } from '@/pages/Payment/types'
import { useBooking, useEvent } from '@/hooks'
import { t } from '@/i18n'
import {
  eventAwaitingApprovalPath,
  generatePath,
  guestDetailsPath,
  roomDetailsPath,
} from '@/utils'

import BookingList from './bookinglist'
import CardBox from './cardbox'
import TotalBox from './totalbox'
import CreditCards from './creditCards'
import BookingSuccess from '../BookingSuccess'

const Payment: React.FC = () => {
  const navigate = useNavigate()
  const {
    bookingInfo: { roomId },
  } = useBooking()
  const [card, setCard] = useState<CardInfo | null>(null)
  const [modal, setModal] = useState<string | null>(null)
  const { eventInfo } = useEvent()
  const currentTime = new Date()
  const oneHourLaterCurrentTime = new Date(
    currentTime.getTime() + 60 * 60 * 1000,
  )

  return (
    <>
      <div className="toolbar dark">
        <div className="container">
          <NavHeader
            canBack
            title={t('payment')}
            onBack={() => navigate(`/booking/${guestDetailsPath}`)}
          >
            <div className="btn-box right">
              <Button className="main-btn">
                <span className="icon-scan" />
              </Button>
            </div>
          </NavHeader>
          <DataBox
            startTime={currentTime.toString()}
            endTime={oneHourLaterCurrentTime.toString()}
            guests={2}
          />
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="payment-details">
            <BookingList />
            <CardBox
              handleCardBox={() => setModal('cardbox')}
              selectedCard={card || null}
            />
            <TotalBox />
            <div className="confirm-btn">
              <Button
                className="main-btn"
                onClick={() =>
                  navigate(
                    generatePath(eventAwaitingApprovalPath, {
                      id: eventInfo.eventId,
                    }),
                  )
                }
              >
                {t('swipe')}
                <span className="icon-right" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {modal === 'cardbox' && (
        <CreditCards
          selectedCard={card}
          onSelectCard={v => setCard({ ...v })}
          onClose={v => setModal(v)}
        />
      )}

      {modal === 'confirmation' && (
        <BookingSuccess
          onClose={() => {
            setModal(null)
            navigate(generatePath(roomDetailsPath, { id: roomId }))
          }}
        />
      )}
    </>
  )
}

export default Payment
