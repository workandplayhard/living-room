import React from 'react'

import { t } from '@/i18n'

import mock from './mock'

const GeneralInfo: React.FC = () => (
  <div className="text-box">
    <h3>
      {t('generalInformation')}
      <br />
      {t('cancellationPolicy')}
    </h3>
    <p>{t('importantDetails')}</p>
    <ul>
      {mock.generalInfo.map((item, index) => (
        <li key={index}>
          <p>
            <b>{t(item.title)}</b>
          </p>
          <p>{t(item.content)}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default GeneralInfo
