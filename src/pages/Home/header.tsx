import React from 'react'
import { useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { Button, Icon } from '@/components'
import { chooseLivingRoomPath } from '@/utils'

import imgURL from '@/assets/images/intro-bg.png'

interface IHeader {
  // eslint-disable-next-line no-unused-vars
  onSetModal: (modalName: string) => void
}

const Header: React.FC<IHeader> = ({ onSetModal }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-box">
        <img src={imgURL} alt="" />
      </div>
      <div className="intro-box">
        <div className="container">
          <div className="title-box">
            <h1>{t('hello', { name: 'John' })}</h1>
            <p>{t('pleasure')}</p>
          </div>
          <div className="data-btn">
            <Button
              className="main-btn outline"
              onClick={() => onSetModal('datetime')}
            >
              <Icon name="icon-calendar" />
              {t('chooseDateAndTime')}
            </Button>
            <Button
              className="main-btn outline"
              onClick={() => onSetModal('guest')}
            >
              <Icon name="icon-group" />
              {t('selectNumberOfGuests')}
            </Button>
          </div>
          <div className="book-btn">
            <Button
              className="main-btn white"
              onClick={() => navigate(chooseLivingRoomPath)}
            >
              {t('bookSalon')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
