import React from 'react'

import { t } from '@/i18n'

import { IBookingPrice } from './types'

const BookingPrice: React.FC<IBookingPrice> = ({ bookingPrice }) => {
  return (
    <div className="payment-details">
      <div className="total-box">
        <table>
          <thead>
            <tr>
              <td>{t('totalCost')}</td>
              <td>{t('currency', { value: bookingPrice, currency: 'USD' })}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>{t('priceILS')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookingPrice
