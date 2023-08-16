import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Icon, NavHeader, TextLink } from '@/components'
import { t } from '@/i18n'
import { otpPath } from '@/utils'

import mock from './mock'

import welcomeImg from '@/assets/images/welcome-bg.png'

const InvitationDetail: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack onBack={() => navigate(otpPath)} />
        </div>
      </div>
      <div className="letter-box">
        <div className="container">
          <div className="box-wrap">
            <div className="bg-box">
              <img src={welcomeImg} alt="" />
            </div>
            <div className="invitation">
              <div className="intro">
                <h1>{t('greetings', { name: 'John Doe' })}</h1>
                <p>
                  {t('invited')}
                  <br />
                  {t('meeting')}
                </p>
              </div>
              <div className="details">
                <h3>{t('atTheLivingRoom')}</h3>
                <ul>
                  {mock.detailsList.map((item: any, index: number) => (
                    <li key={index}>
                      <Icon name={item.iconName} />
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="signature">
                <p>{t('seeYouSoon')}</p>
                <p>{t('bestRegards')}</p>
                <p>{t('noa')}</p>
              </div>
              <div className="notice">
                <p>
                  {t('emailForQuestions')}
                  <TextLink
                    href="mailto:cyberfuze@gmail.com"
                    label="cyberfuze@gmail.com"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <Button className="main-btn">
              <Icon name="icon-calendar" />
              {t('addToCalendar')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvitationDetail
