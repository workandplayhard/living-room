import React from 'react'
import moment from 'moment'

import { t } from '@/i18n'
import { DateTime } from '@/components'

import { ITimeBox } from '../types'

const TimeBox: React.FC<ITimeBox> = ({
  startDate,
  endDate,
  format = 'dddd, D MMMM',
}) => {
  return (
    <div className="time-box">
      <h3>{t('dateAndTime')}</h3>
      <div className="data">
        <p>
          <DateTime value={startDate || ''} format={format} />
        </p>
        <p>
          {moment(startDate).format('ha')} - {moment(endDate).format('ha')}
        </p>
      </div>
    </div>
  )
}

export default TimeBox
