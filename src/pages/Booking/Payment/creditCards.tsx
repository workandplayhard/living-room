import React, { useCallback, useRef, useState } from 'react'

import { Button, Icon, Modal } from '@/components'
import { t } from '@/i18n'
import { getCardImage, getCardNumberString, getCardType } from '@/utils'
import AddNewCard from '@/pages/Payment/addNewCard'

import DefaultCardHeader from './defaultCardHeader'

import { ICreditCards } from './types'
import { CardInfo } from '@/pages/Payment/types'

import mock from './mock'

const CreditCards: React.FC<ICreditCards> = ({
  selectedCard,
  onSelectCard,
  onClose,
  creditCards,
  selectedCardIndex,
}) => {
  const [_creditCards, setCreditCards] = useState<CardInfo[]>(
    creditCards || (mock.creditCards as unknown as CardInfo[]),
  )
  const [openAddNewCard, setOpenAddNewCard] = useState<boolean>(false)
  const cardType = useRef<string>()

  const _getCardType = useCallback((creditCard: CardInfo) => {
    cardType.current = getCardType(creditCard.cardNumber || '')

    return cardType.current
  }, [])

  return (
    <Modal onClose={() => onClose?.(null)}>
      <div className="modal-title">
        <h3>{t('myCreditCards')}</h3>
      </div>
      <div className="cards-list">
        <ul>
          <DefaultCardHeader />
          {_creditCards.map((creditCard: CardInfo, index: number) => (
            <li key={index} onClick={() => onSelectCard?.(creditCard)}>
              <label>
                <input
                  type="radio"
                  name="card"
                  defaultChecked={
                    selectedCard?.cardNumber === creditCard.cardNumber ||
                    index === selectedCardIndex
                  }
                  // defaultChecked={
                  //   selectedCard?.cardNumber === creditCard.cardNumber
                  // }
                />
                <span className="item-wrap">
                  <span className="icon">
                    <img src={getCardImage(_getCardType(creditCard))} alt="" />
                  </span>
                  <span className="info">
                    <span>{cardType.current}</span>
                    {getCardNumberString(creditCard.cardNumber || '')}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="modal-btn">
        <Button
          className="main-btn white outline"
          onClick={() => setOpenAddNewCard(true)}
        >
          <Icon name="icon-plus" />
          {t('addNewCard')}
        </Button>
      </div>

      {openAddNewCard && (
        <AddNewCard
          onClose={v => setOpenAddNewCard(v)}
          onAddCard={v =>
            setCreditCards(prev => (v ? [...prev, v] : [...prev]))
          }
        />
      )}
    </Modal>
  )
}

export default CreditCards
