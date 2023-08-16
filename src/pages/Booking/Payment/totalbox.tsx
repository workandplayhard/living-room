import React from 'react'

import { t } from '@/i18n'

const TotalBox: React.FC = () => {
  return (
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
            <td rowSpan={2}>{t('priceILS')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TotalBox
