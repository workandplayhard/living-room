import React from 'react'

import { TextLink } from '@/components'
import { t } from '@/i18n'

const PaymentDetails: React.FC = () => {
  return (
    <div className="payment-details">
      <div className="total-box">
        <table>
          <thead>
            <tr>
              <td>{t('totalCost')}</td>
              <td>{t('currency', { value: 630 })}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>{t('priceILS')}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>
                {t('emailOrderDetails')}
                <br />
                <TextLink href="mailto:johndoe@gmail.com">
                  <b>johndoe@gmail.com</b>
                </TextLink>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default PaymentDetails
