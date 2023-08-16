import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, TextInput } from '@/components'
import { t } from '@/i18n'
import { guestDetailsPath } from '@/utils'
import { useBooking } from '@/hooks'

const DetailsForm: React.FC = () => {
  const [val, setVal] = useState<string>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const { onChangeBookingInfo } = useBooking()

  const handleNext = useCallback(() => {
    onChangeBookingInfo({ meetingTitle: val })
    navigate(`/booking/${guestDetailsPath}`)
  }, [val, navigate, onChangeBookingInfo])

  return (
    <div className="details-form">
      <div className="title-box">
        <h2>{t('titleForYourMeeting')}</h2>
        <p>{t('titleAppear')}</p>
      </div>
      <div className="form-fields">
        <TextInput
          onChangeText={setVal}
          value={val}
          error={error}
          placeholder={t('meetingTitle')}
        />
      </div>
      <div className="form-submit">
        <Button className="main-btn" onClick={handleNext}>
          {t('next')}
        </Button>
        <Button
          className="main-btn white"
          onClick={() => navigate(`/booking/${guestDetailsPath}`)}
        >
          {t('skip')}
        </Button>
      </div>
    </div>
  )
}

export default DetailsForm
