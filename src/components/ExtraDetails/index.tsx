import React from 'react'
import { useLocation } from 'react-router-dom'

import { Radio } from '@/components'
import { t } from '@/i18n'

import mock from './mock'

export const ExtraDetails: React.FC = () => {
  const normalizeString = (str: string) => {
    return str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  }

  const currentURL = useLocation().pathname.split('/')[2]

  return (
    <div className="extra-details">
      <div className="form-fields">
        {mock.radioInfo.map((item, index) => (
          <Radio
            readOnly
            key={index}
            label={t(item.label)}
            checked={
              normalizeString(currentURL) === normalizeString(item.label)
            }
          />
        ))}
      </div>
    </div>
  )
}

export default ExtraDetails
