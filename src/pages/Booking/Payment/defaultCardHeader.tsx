import React from 'react'

import { t } from '@/i18n'

import applePayImg from '@/assets/images/apple-pay.svg'

const DefaultCardHeader: React.FC = () => {
  return (
    <li>
      <label>
        <input type="radio" name="card" />
        <span className="item-wrap">
          <span className="icon">
            <img src={applePayImg} alt="" />
          </span>
          <span className="info">
            <b>{t('applePay')}</b>
          </span>
        </span>
      </label>
    </li>
  )
}

export default DefaultCardHeader
