import React, { useCallback, useRef, useState } from 'react'

import { t } from '@/i18n'
import { getCardImage, getCardNumberString, getCardType } from '@/utils'
import { Button, Icon } from '@/components'

import CreditCardsListModal from '../Booking/Payment/creditCards'
import AddNewCard from '../Payment/addNewCard'

import { CardInfo } from '../Payment/types'

import mock from './mock'

const CreditCards: React.FC = () => {
  const [_creditCards, setCreditCards] = useState<CardInfo[]>(
    mock.creditCards as unknown as CardInfo[],
  )
  const [creditCardModal, setCreditCardModal] = useState<boolean>(false)
  const [creditCardIndex, setCreditCardIndex] = useState<number | null>(null)
  const [openAddNewCard, setOpenAddNewCard] = useState<boolean>(false)
  const cardType = useRef<string>()

  const _getCardType = useCallback((creditCard: CardInfo) => {
    cardType.current = getCardType(creditCard.cardNumber || '')

    return cardType.current
  }, [])

  const handleCreditCardItem = useCallback((index: number) => {
    setCreditCardModal(true)
    setCreditCardIndex(index)
  }, [])

  return (
    <div className="info-section">
      <div className="title">
        <h3>{t('creditCards')}</h3>
      </div>
      <div className="cards-list">
        <ul>
          {_creditCards.map((creditCard: CardInfo, index: number) => (
            <li key={index} onClick={() => handleCreditCardItem(index)}>
              <div className="item-wrap">
                <span className="icon">
                  <img src={getCardImage(_getCardType(creditCard))} alt="" />
                </span>
                <span className="info">
                  <span>{cardType.current}</span>
                  {getCardNumberString(creditCard.cardNumber || '')}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="action-btn">
        <Button className="main-btn" onClick={() => setOpenAddNewCard(true)}>
          <Icon name="icon-plus" />
          {t('addNewCard')}
        </Button>
      </div>

      {creditCardModal && (
        <CreditCardsListModal
          onClose={() => setCreditCardModal(false)}
          creditCards={_creditCards}
          selectedCardIndex={creditCardIndex || 0}
        />
      )}

      {openAddNewCard && (
        <AddNewCard
          onClose={() => setOpenAddNewCard(false)}
          onAddCard={v =>
            setCreditCards(prev => (v ? [...prev, v] : [...prev]))
          }
        />
      )}
    </div>
  )
}

export default CreditCards
