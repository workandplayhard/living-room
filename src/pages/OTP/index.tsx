import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { t } from '@/i18n'
import { NavHeader, Button, OTPCode } from '@/components'
import { homePath, phoneInputPath } from '@/utils'

const OTP: React.FC = () => {
  const [otp, setOTP] = useState<string>('')
  const navigate = useNavigate()
  const location = useLocation()
  const phoneNumber = location.search.substring(1)

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack onBack={() => navigate(phoneInputPath)} />
        </div>
      </div>

      <div className="form-page">
        <div className="container">
          <div className="title-box align-center">
            <h1>{t('smsCode')}</h1>
            <p>{t('enterCode', { phoneNumber })}</p>
          </div>
          <div className="sms-code">
            <div className="form-fields">
              <OTPCode value={otp} onChange={setOTP} />
            </div>
          </div>
          <div className="action-btn">
            <Button
              className={classNames('main-btn', {
                disabled: otp.length !== 5,
              })}
              onClick={() => navigate(homePath)}
            >
              {t('login')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OTP
