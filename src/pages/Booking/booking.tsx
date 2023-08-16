import React from 'react'

import { Button, Icon, NavHeader } from '@/components'
import { t } from '@/i18n'

import BookingInfo from './bookingInfo'
import Direction from '../RoomsDetails/direction'

const Booking: React.FC = () => {
  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack />
        </div>
      </div>
      <div className="confirmation-page">
        <div className="container">
          <BookingInfo
            startDate="2020-03-20 10:20:30"
            endDate="2020-03-20 22:20:30"
          />
          <div className="action-btn">
            <Button className="main-btn white outline">
              <Icon name="icon-plus" />
              {t('addNewGuest')}
            </Button>
            <Button className="main-btn">{t('sendInvitationsToGuests')}</Button>
          </div>
          <Direction />
          <div className="action-btn">
            <p>{t('contactUsToChange')}</p>
            <Button className="main-btn">
              <Icon name="icon-phone-outline" />
              {t('contactUs')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking
