import React from 'react'

import { t } from '@/i18n'

const TitleBox: React.FC = () => {
  return (
    <div className="title-box">
      <h1>{t('yourBookingConfirmed')}</h1>
      <p>{t('fillInTheGuest')}</p>
    </div>
  )
}

export default TitleBox
