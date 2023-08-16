import React, { useCallback, useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { TextInput, PasswordInput, TextLink, Button, Icon } from '@/components'
import { applyMembershipPath, phoneInputPath } from '@/utils'
import { t } from '@/i18n'
import { useAuth } from '@/hooks'

import bgImg from '@/assets/images/logo.png'
import welcomeBgImg from '@/assets/images/welcome-bg.png'

const SignInPage: React.FC = () => {
  const { onSignIn } = useAuth()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<Record<'email' | 'password', string>>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  useEffect(() => {
    setError(e => (email ? { ...e, email: '' } : e))
  }, [email])

  useEffect(() => {
    setError(e => (password ? { ...e, password: '' } : e))
  }, [password])

  const validate = useCallback(() => {
    const _error: Record<'email' | 'password', string> = {
      email: '',
      password: '',
    }
    if (!email) {
      _error.email = t('validation.fieldRequired', { fieldName: 'Email' })
    }
    if (!password) {
      _error.password = t('validation.fieldRequired', { fieldName: 'Password' })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error.email = t('validation.invalidEmail')
    }

    if (password && password.length < 8) {
      _error.password = t('validation.passwordLength')
    }
    setError(_error)
    return !Object.values(_error).some(e => !!e)
  }, [email, password])

  const onHandleSignIn = useCallback(() => {
    if (validate()) {
      onSignIn({ email, password })
    }
  }, [email, onSignIn, password, validate])

  return (
    <div className="welcome-box">
      <div className="bg-box">
        <img src={welcomeBgImg} alt="" />
      </div>

      <div className="container">
        <div className="box-wrap">
          <div className="intro-text">
            <div className="logo">
              <img src={bgImg} alt="" />
            </div>
            <div className="title">
              <h1>{t('welcomeBack')}</h1>
              <p>{t('howWasYourDay')}</p>
            </div>
          </div>
          <div className="intro-form">
            <div className="form-box">
              <div className="form-fields">
                <TextInput
                  label={t('email')}
                  error={error.email}
                  onChangeText={setEmail}
                />
                <PasswordInput
                  label={t('password')}
                  error={error.password}
                  onChangeText={setPassword}
                />
              </div>
              <p>
                <TextLink label={t('forgotYourPassword')} />
              </p>
            </div>
            <div className="action-btn">
              <Button
                className="main-btn white"
                onClick={() => onHandleSignIn()}
              >
                {t('signIn')}
              </Button>
              <Button
                className="main-btn outline"
                onClick={() => navigate(phoneInputPath)}
              >
                <Icon name="icon-phone" />
                {t('loginByPhoneNumber')}
              </Button>
            </div>
            <div className="apply-membership">
              <p>
                <Trans
                  i18nKey="membershipLink"
                  components={{
                    link: (
                      <TextLink
                        href={applyMembershipPath}
                        label={t('applyFree')}
                      />
                    ),
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
