import React from 'react'
import { useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { NavHeader, Button, TextLink } from '@/components'
import { signInPath } from '@/utils'

const MembershipRequest: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack />
        </div>
      </div>

      <div className="form-page">
        <div className="container">
          <div className="page-wrap">
            <div className="content-box">
              <div className="title-box">
                <h1>{t('request')}</h1>
              </div>
              <div className="request-text">
                <h2>{t('dear')}</h2>
                <p>{t('review')}</p>
                <p>{t('club')}</p>
                <h3>
                  <TextLink
                    label="membership@livingroom.house"
                    href="mailto:membership@livingroom.house"
                  />
                </h3>
                <p>{t('thankyou')}</p>
              </div>
            </div>
            <div className="action-btn">
              <Button className="main-btn" onClick={() => navigate(signInPath)}>
                {t('ok')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MembershipRequest
