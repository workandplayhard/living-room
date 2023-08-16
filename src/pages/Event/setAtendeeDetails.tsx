import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, DatePicker, Modal, TextInput } from '@/components'
import { t } from '@/i18n'
import { bookingPaymentPath } from '@/utils'

import { ISetAtendeeDetails } from './types'

const SetAtendeeDetails: React.FC<ISetAtendeeDetails> = ({ openModal }) => {
  const [fullName, setFullName] = useState<string>('')
  const [dateofBirth, setDateOfBirth] = useState<string>('')
  const [mobileNumber, setMobileNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [businessName, setBusinessName] = useState<string>('')
  const [industry, setIndustry] = useState<string>('')
  const [error, setError] = useState<
    Record<
      | 'fullName'
      | 'dateOfBirth'
      | 'mobileNumber'
      | 'email'
      | 'businessName'
      | 'industry',
      string
    >
  >({
    fullName: '',
    dateOfBirth: '',
    mobileNumber: '',
    email: '',
    businessName: '',
    industry: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    setError(e => (email ? { ...e, email: '' } : e))
  }, [email])

  useEffect(() => {
    setError(e => (fullName ? { ...e, fullName: '' } : e))
  }, [fullName])

  useEffect(() => {
    setError(e => (mobileNumber ? { ...e, mobileNumber: '' } : e))
  }, [mobileNumber])

  useEffect(() => {
    setError(e => (dateofBirth ? { ...e, dateofBirth: '' } : e))
  }, [dateofBirth])

  useEffect(() => {
    setError(e => (businessName ? { ...e, businessName: '' } : e))
  }, [businessName])

  useEffect(() => {
    setError(e => (industry ? { ...e, industry: '' } : e))
  }, [industry])

  const validate = useCallback(() => {
    const _error: Record<
      | 'fullName'
      | 'dateOfBirth'
      | 'email'
      | 'mobileNumber'
      | 'businessName'
      | 'industry',
      string
    > = {
      fullName: '',
      dateOfBirth: '',
      email: '',
      mobileNumber: '',
      businessName: '',
      industry: '',
    }

    if (!fullName) {
      _error.fullName = t('validation.fieldRequired', {
        fieldName: 'Full name',
      })
    }
    if (!dateofBirth) {
      _error.dateOfBirth = t('validation.fieldRequired', {
        fieldName: 'Date of birth',
      })
    }
    if (!email) {
      _error.email = t('validation.fieldRequired', {
        fieldName: 'Email',
      })
    }
    if (!mobileNumber) {
      _error.mobileNumber = t('validation.fieldRequired', {
        fieldName: 'Mobile number',
      })
    }
    if (!businessName) {
      _error.businessName = t('validation.fieldRequired', {
        fieldName: 'Business Name',
      })
    }
    if (!industry) {
      _error.industry = t('validation.fieldRequired', {
        fieldName: 'Industry',
      })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error.email = t('validation.invalidEmail')
    }

    setError({ ...error, ..._error })
    return !Object.values(_error).some(e => !!e)
  }, [
    businessName,
    dateofBirth,
    email,
    error,
    fullName,
    industry,
    mobileNumber,
  ])

  const onHandleApply = useCallback(() => {
    if (validate()) {
      navigate(bookingPaymentPath)
    }
  }, [navigate, validate])

  return (
    <Modal
      onClose={() => openModal(false)}
      className="modal-content set-attendee-details"
    >
      <div className="modal-title">
        <h3>{t('editAttendeeDetails')}</h3>
      </div>

      <div className="form-box">
        <div className="form-fields">
          <TextInput
            value={fullName}
            placeholder={t('fullName')}
            onChangeText={setFullName}
            error={error.fullName}
          />

          <DatePicker
            value={dateofBirth}
            label={t('dateOfBirth')}
            onChange={v => setDateOfBirth(v || '')}
            error={error.dateOfBirth}
          />

          <TextInput
            value={mobileNumber}
            placeholder={t('mobileNumber')}
            onChangeText={setMobileNumber}
            error={error.mobileNumber}
          />

          <TextInput
            value={email}
            placeholder={t('email')}
            onChangeText={setEmail}
            error={error.email}
          />

          <TextInput
            value={businessName}
            placeholder={t('businessName')}
            onChangeText={setBusinessName}
            error={error.businessName}
          />

          <TextInput
            value={industry}
            placeholder={t('industry')}
            onChangeText={setIndustry}
            error={error.industry}
          />
        </div>
      </div>

      <div className="modal-btn">
        <Button
          type="button"
          className="main-btn"
          onClick={() => onHandleApply()}
        >
          {t('next')}
        </Button>
      </div>
    </Modal>
  )
}

export default SetAtendeeDetails
