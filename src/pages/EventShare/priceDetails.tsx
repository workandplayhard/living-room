import React from 'react'

import { t } from '@/i18n'

const PriceDetails: React.FC = () => (
  <div className="payment-details">
    <div className="total-box">
      <table>
        <thead>
          <tr>
            <td>{t('eventCost')}</td>
            <td>{t('price')}</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
)

export default PriceDetails
