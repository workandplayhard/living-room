import React from 'react'

import { t } from '@/i18n'

import mock from './mock'

const PersonalDetails: React.FC = () => {
  return (
    <div className="info-section">
      <div className="title">
        <h3>{t('personalDetails')}</h3>
      </div>
      <div className="details-box">
        <table>
          <tbody>
            {mock.personalDetails.map((d, index) => (
              <tr key={index}>
                <td>{t(d.key)}:</td>
                <td>
                  <b>{d.value}</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PersonalDetails
