import React from 'react'

import { t } from '@/i18n'

import mock from './mock'

const EventInfo: React.FC = () => {
  return (
    <div className="qr-info">
      <ul>
        {mock.eventInfoList.map((eventInfo, index) => (
          <li key={index}>
            <p>{t(eventInfo.key)}:</p>
            <p>{eventInfo.value}</p>
          </li>
        ))}
      </ul>
      <ul>
        {mock.eventInfoAttendeeList.map((item, index) => (
          <li key={index}>
            <p>
              <b>{item.key}</b>
            </p>
            <p>
              {item.valueName}
              <br />
              {item.valueEmail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventInfo
