import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { NavHeader, Button, PhoneInput } from '@/components'
import { t } from '@/i18n'
import { otpPath, validPhoneNumber, signInPath } from '@/utils'

const PhoneInputPage: React.FC = () => {
  const [phone, setPhone] = useState<string | undefined>('')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  const isValid = useMemo(() => validPhoneNumber(phone || ''), [phone])

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack onBack={() => navigate(signInPath)} />
        </div>
      </div>
      <div className="form-page">
        <div className="container">
          <div className="title-box align-center">
            <h1>{t('enter')}</h1>
            <p>
              {t('confirm')}
              <br />
              {t('yourPhoneNumber')}
            </p>
            <p>
              {t('tap')}
              <br />
              {t('from')}
            </p>
          </div>
          <PhoneInput value={phone} error={error} onChange={setPhone} />
          <div className="action-btn">
            <Button
              className={classNames('main-btn', {
                disabled: !isValid,
              })}
              disabled={!isValid}
              onClick={() =>
                navigate({
                  pathname: otpPath,
                  search: phone,
                })
              }
            >
              {t('sendCode')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneInputPage
