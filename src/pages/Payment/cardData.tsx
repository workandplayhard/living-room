import React, { useMemo } from 'react'

import { t } from '@/i18n'
import { getFullCardNumberString } from '@/utils'

import { CardInfo } from './types'

interface ICardData {
  data: CardInfo | null
}

const CardData: React.FC<ICardData> = ({ data }) => {
  const cardDisplayNum = useMemo(() => {
    const card = getFullCardNumberString(
      data?.cardNumber?.replace(/\s/g, '') || '',
    )
    const mask = '**** **** **** ****'
    return `${card}${mask.slice(card.length)}`
  }, [data?.cardNumber])

  return (
    <div className="card-data">
      <table>
        <thead>
          <tr>
            <td colSpan={2}>{cardDisplayNum}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{t('cardHolder')}</span>
              {data?.name || 'Name Surname'}
            </td>
            <td>
              <span>{t('validThru')}</span>
              {data?.expiryDate || 'MM/VV'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardData
