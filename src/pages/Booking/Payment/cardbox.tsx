import React from 'react'

import { t } from '@/i18n'
import { getCardImage, getCardType } from '@/utils'

import { CardInfo } from '@/pages/Payment/types'

interface ICardBox {
  // eslint-disable-next-line no-unused-vars
  handleCardBox: (v: string) => void
  selectedCard: CardInfo | null
}

const CardBox: React.FC<ICardBox> = ({ handleCardBox, selectedCard }) => {
  return (
    <div className="card-box" onClick={() => handleCardBox('cardbox')}>
      <span className="icon">
        <img
          src={getCardImage(getCardType(selectedCard?.cardNumber || ''))}
          alt=""
        />
      </span>
      <h4>
        <span className="icon-card" />
        {t('myBusinessCard')}
      </h4>
      <p>{t('click')}</p>
    </div>
  )
}

export default CardBox
