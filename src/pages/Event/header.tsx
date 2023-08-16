import React from 'react'

import { DateTime } from '@/components'
import { t } from '@/i18n'

import { IHeader } from './types'

import bgImg from '@/assets/images/rooms/05.png'

const Header: React.FC<IHeader> = ({ date, format = 'dddd, D MMMM' }) => {
  return (
    <>
      <div className="img">
        <span>{t('ticketsLeft', { number: 2 })}</span>
        <img src={bgImg} alt="" />
      </div>
      <div className="title-box">
        <h2>{t('weekendParty')}</h2>
      </div>
      <div className="time-box">
        <div className="data">
          <p>
            <DateTime value={date} format={format} />
          </p>
          <p>{t('end', { time: 11 })}</p>
        </div>
      </div>
    </>
  )
}

export default Header
