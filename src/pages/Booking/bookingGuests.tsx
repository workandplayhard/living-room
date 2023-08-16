import React from 'react'

import { Button, Icon } from '@/components'
import { t } from '@/i18n'

import mock from './mock'

interface IBookingGuests {
  title?: string
}

const BookingGuests: React.FC<IBookingGuests> = ({ title }) => {
  return (
    <div className="guest-details">
      <h3>
        {title === 'guest' ? (
          t('myGuests')
        ) : (
          <>
            {t('_fillInTheGuest')}
            <br />
            {t('sendInvitation')}
          </>
        )}
      </h3>
      <table>
        <tbody>
          {mock.attendees.map((attendee, index) => (
            <tr key={index}>
              <td>
                <b>{attendee.order}</b>
              </td>
              <td>
                {attendee.name} <br /> {attendee.phoneNumber}
              </td>
              <td>
                <Button className="main-btn white">
                  <Icon name="icon-edit" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookingGuests
