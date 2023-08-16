import React from 'react'

import { Icon } from '@/components'
import { t } from '@/i18n'

import mock from './mock'

const Facilities: React.FC = () => (
  <div className="facilities-list">
    <h3>{t('facilities')}</h3>
    <ul>
      {mock.facilities.map((item, index) => (
        <li key={index}>
          <Icon name={item.iconName} />
          {t(item.content)}
        </li>
      ))}
    </ul>
  </div>
)

export default Facilities
