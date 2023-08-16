import React from 'react'

import { t } from '@/i18n'

import { NavMenu } from '@/components'
import QRImg from './qrImg'
import PriceDetails from './priceDetails'
import EventInfo from './eventInfo'

const EventApproved: React.FC = () => {
  return (
    <div className="qr-page">
      <NavMenu />
      <div className="content-box">
        <div className="container">
          <div className="title-box">
            <h1>{t('weekendParty')}</h1>
            <p>{t('admissionTicket', { total: 1, current: 1 })}</p>
          </div>
          <QRImg />
          <EventInfo />
          <PriceDetails />
          <div className="notice">
            <p>
              {t('copiesOfOriginalTicket')}
              <br />
              {t('transferring')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventApproved
