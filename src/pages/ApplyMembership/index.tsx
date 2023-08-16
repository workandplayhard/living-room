import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import {
  TextInput,
  NavHeader,
  Checkbox,
  Button,
  DatePicker,
} from '@/components'
import { membershipRequestPath } from '@/utils'

const ApplyMembershipPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [dateofBirth, setDateOfBirth] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [businessName, setBusinessName] = useState<string>('')
  const [industry, setIndustry] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [linkedinLink, setLinkedinLink] = useState<string>('')
  const [, setMember] = useState<string>('')
  const [checked, setChecked] = useState<
    Record<'party' | 'host' | 'addend' | 'meet', boolean>
  >({
    party: false,
    host: false,
    addend: false,
    meet: false,
  })
  const [error, setError] = useState<
    Record<
      | 'firstName'
      | 'lastName'
      | 'dateOfBirth'
      | 'phoneNumber'
      | 'email'
      | 'businessName'
      | 'industry'
      | 'location'
      | 'city'
      | 'country'
      | 'linkedinLink'
      | 'member',
      string
    >
  >({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    businessName: '',
    industry: '',
    location: '',
    city: '',
    country: '',
    linkedinLink: '',
    member: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    setError(e => (email ? { ...e, email: '' } : e))
  }, [email])

  useEffect(() => {
    setError(e => (firstName ? { ...e, firstName: '' } : e))
  }, [firstName])

  useEffect(() => {
    setError(e => (lastName ? { ...e, lastName: '' } : e))
  }, [lastName])

  useEffect(() => {
    setError(e => (dateofBirth ? { ...e, dateofBirth: '' } : e))
  }, [dateofBirth])

  const validate = useCallback(() => {
    const _error: Record<
      'firstName' | 'lastName' | 'email' | 'dateOfBirth',
      string
    > = {
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
    }

    if (!firstName) {
      _error.firstName = t('validation.fieldRequired', {
        fieldName: 'First name',
      })
    }
    if (!lastName) {
      _error.lastName = t('validation.fieldRequired', {
        fieldName: 'Last name',
      })
    }
    if (!email) {
      _error.email = t('validation.fieldRequired', {
        fieldName: 'Email',
      })
    }
    if (!dateofBirth) {
      _error.dateOfBirth = t('validation.fieldRequired', {
        fieldName: 'Date of birth',
      })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error.email = t('validation.invalidEmail')
    }

    setError({ ...error, ..._error })
    return !Object.values(_error).some(e => !!e)
  }, [dateofBirth, email, error, firstName, lastName])

  const onHandleApply = useCallback(() => {
    if (validate()) {
      navigate(membershipRequestPath)
    }
  }, [navigate, validate])
  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack />
        </div>
      </div>

      <div className="form-page">
        <div className="container">
          <div className="title-box">
            <h1>{t('applyForMembership')}</h1>
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

            <DatePicker
              value={dateofBirth}
              label={t('dateOfBirth')}
              onChange={v => setDateOfBirth(v || '')}
              error={error.dateOfBirth}
            />

            <TextInput
              value={phoneNumber}
              placeholder={t('phoneNumber')}
              onChangeText={setPhoneNumber}
              error={error.phoneNumber}
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

            <TextInput
              value={location}
              placeholder={t('location')}
              onChangeText={setLocation}
              error={error.location}
            />

            <TextInput
              value={city}
              placeholder={t('city')}
              onChangeText={setCity}
              error={error.city}
            />

            <TextInput
              value={country}
              placeholder={t('country')}
              onChangeText={setCountry}
              error={error.country}
            />

            <TextInput
              value={linkedinLink}
              placeholder={t('linkedinLink')}
              onChangeText={setLinkedinLink}
              error={error.linkedinLink}
            />

            <h3>{t('join')}</h3>

            <Checkbox
              label={t('party')}
              onChangeChecked={() =>
                setChecked(prevState => ({
                  ...prevState,
                  party: !prevState.party,
                }))
              }
              checked={checked.party}
            />

            <Checkbox
              label={t('host')}
              onChangeChecked={() =>
                setChecked(prevState => ({
                  ...prevState,
                  host: !prevState.host,
                }))
              }
              checked={checked.host}
            />

            <Checkbox
              label={t('addend')}
              onChangeChecked={() =>
                setChecked(prevState => ({
                  ...prevState,
                  addend: !prevState.addend,
                }))
              }
              checked={checked.addend}
            />

            <Checkbox
              label={t('meet')}
              onChangeChecked={() =>
                setChecked(prevState => ({
                  ...prevState,
                  meet: !prevState.meet,
                }))
              }
              checked={checked.meet}
            />

            <TextInput
              placeholder={t('member')}
              onChangeText={setMember}
              error={error.member}
            />
          </div>
          <div className="action-btn">
            <Button className="main-btn" onClick={() => onHandleApply()}>
              {t('applyForMembership')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApplyMembershipPage
