import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, TextInput } from '@/components'
import { t } from '@/i18n'
import { paymentPath } from '@/utils'
import { useBooking } from '@/hooks'

const DetailsForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const navigate = useNavigate()
  const { bookingInfo, onChangeBookingInfo } = useBooking()

  const [error, setError] = useState<
    Record<'firstName' | 'lastName' | 'phoneNumber', string>
  >({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  })

  const handleNext = useCallback(() => {
    navigate(`/booking/${paymentPath}`)
    onChangeBookingInfo({
      attendees: bookingInfo.attendees?.concat({
        firstName,
        lastName,
        phoneNumber,
      }),
    })
  }, [
    bookingInfo,
    firstName,
    lastName,
    phoneNumber,
    navigate,
    onChangeBookingInfo,
  ])

  return (
    <div className="details-form">
      <div className="title-box">
        <h2>{t('attendee')}</h2>
      </div>
      <div className="form-fields">
        <TextInput
          value={firstName}
          placeholder={t('firstName')}
          onChangeText={setFirstName}
          error={error.firstName}
        />

        <TextInput
          value={lastName}
          placeholder={t('lastName')}
          onChangeText={setLastName}
          error={error.lastName}
        />

        <TextInput
          value={phoneNumber}
          placeholder={t('phoneNumber')}
          onChangeText={setPhoneNumber}
          error={error.phoneNumber}
        />
      </div>
      <div className="form-submit">
        <Button className="main-btn" onClick={handleNext}>
          {t('next')}
        </Button>
        <Button
          className="main-btn white"
          onClick={() => navigate(`/booking/${paymentPath}`)}
        >
          {t('skipGuestDetails')}
        </Button>
      </div>
    </div>
  )
}

export default DetailsForm
