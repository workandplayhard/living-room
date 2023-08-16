import React from 'react'

import { Button, Icon } from '@/components'
import { t } from '@/i18n'
import { useBooking } from '@/hooks'

interface IGuestDetails {
  title?: string
}

const GuestDetails: React.FC<IGuestDetails> = ({ title }) => {
  const { bookingInfo } = useBooking()

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
          {bookingInfo.attendees?.map((attendee, index) => (
            <tr key={index}>
              <td>
                <b>{'Attendee ' + (index + 1)}</b>
              </td>
              <td>
                {attendee.firstName + ' ' + attendee.lastName} <br />{' '}
                {attendee.phoneNumber}
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

export default GuestDetails
