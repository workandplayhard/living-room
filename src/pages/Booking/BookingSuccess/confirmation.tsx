import React from 'react'

import { Button } from '@/components'
import { t } from '@/i18n'
import { useBooking } from '@/hooks'

import TitleBox from './titleBox'
import BookingList from './bookingList'
import GuestDetails from './guestDetails'
import TimeBox from './timeBox'
import PaymentDetails from './paymentDetails'

const Confirmation: React.FC = () => {
  const { bookingInfo } = useBooking()

  return (
    <>
      <TitleBox />
      <BookingList />
      <GuestDetails />
      <div className="action-btn top-border">
        <Button className="main-btn">{t('sendInvitationsToGuests')}</Button>
      </div>
      <TimeBox
        startDate={bookingInfo.startTime}
        endDate={bookingInfo.endTime}
      />
      <div className="action-btn">
        <Button className="main-btn">
          <span className="icon-calendar" />
          {t('addToCalendar')}
        </Button>
      </div>
      <PaymentDetails />
    </>
  )
}

export default Confirmation
