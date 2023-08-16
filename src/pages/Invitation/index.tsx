import React from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/components'
import { t } from '@/i18n'
import { invitationDetailPath } from '@/utils'

import welcomeImg from '@/assets/images/welcome-bg.png'
import logoImg from '@/assets/images/logo.png'

const Invitation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="welcome-box">
      <div className="bg-box">
        <img src={welcomeImg} alt="" />
      </div>
      <div className="container">
        <div className="box-wrap">
          <div className="intro-text small">
            <div className="logo">
              <img src={logoImg} alt="" />
            </div>
            <div className="title">
              <h1>
                {t('gotInvite')}
                <br />
                {t('marketingTeam')}
              </h1>
            </div>
            <div className="btn">
              <Button
                className="main-btn white"
                onClick={() => navigate(invitationDetailPath)}
              >
                {t('showMeTheDetails')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Invitation
