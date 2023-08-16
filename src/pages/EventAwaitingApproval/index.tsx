import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button, NavHeader } from '@/components'
import { t } from '@/i18n'
import { eventSharePath, paymentPath } from '@/utils'

import welcomeImg from '@/assets/images/welcome-bg.png'

const EventAwaitingApproval: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader
            canBack
            title={t('awaitingApproval')}
            onBack={() => navigate(`/booking/${paymentPath}`)}
          />
        </div>
      </div>
      <div className="letter-box">
        <div className="container">
          <div className="box-wrap">
            <div className="bg-box">
              <img src={welcomeImg} alt="" />
            </div>
            <div className="approval">
              <div className="content">
                <h2>{t('greetings', { name: 'John Doe' })}</h2>
                <p>{t('upcomingWeekendParty')}</p>
                <p>{t('orderReceived')}</p>
                <p>{t('confirmation')}</p>
                <p>{t('letYouKnow')}</p>
                <p>{t('choosingYourService')}</p>
              </div>
              <div className="signature">
                <p>
                  {t('bestRegards')},
                  <br />
                  {t('livingRoomTeam')}
                </p>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <Button
              className="main-btn"
              onClick={() => navigate(eventSharePath.replace(':id', id || ''))}
            >
              {t('ok')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventAwaitingApproval
