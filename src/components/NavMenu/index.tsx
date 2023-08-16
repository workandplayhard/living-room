import React, { useState } from 'react'
import classNames from 'classnames'

import { Button, Icon, NavHeader, TextLink } from '@/components'
import { t } from '@/i18n'
import { homePath, bookingsPath, accountPath } from '@/utils'

const menus = [
  {
    iconName: 'icon-home',
    title: 'homePage',
    path: homePath,
  },
  {
    iconName: 'icon-bookmark',
    title: 'myBookings',
    path: bookingsPath,
  },
  {
    iconName: 'icon-user',
    title: 'myProfile',
    path: accountPath,
  },
]

export const NavMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="toolbar">
      <div className="container">
        <NavHeader canBack={false}>
          <div className="btn-box right">
            <Button className="main-btn" onClick={() => setOpen(true)}>
              <span className="icon-menu" />
            </Button>
          </div>
        </NavHeader>
      </div>

      <div
        className={classNames('nav-menu', {
          open,
        })}
      >
        <div className="close-menu">
          <Button className="main-btn white" onClick={() => setOpen(false)}>
            <Icon name="icon-close" />
          </Button>
        </div>
        <div className="menu-box">
          <ul>
            {menus.map((item, index) => (
              <li key={index}>
                <TextLink href={item.path}>
                  <Icon name={item.iconName} />
                  {t(item.title)}
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="exit-box">
          <TextLink>
            <Icon name="icon-logout" />
            {t('logout')}
          </TextLink>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
