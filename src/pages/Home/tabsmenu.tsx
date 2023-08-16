import React, { useState } from 'react'
import classNames from 'classnames'

import { t } from '@/i18n'

import mock from './mock'

interface ItabsMenu {
  // eslint-disable-next-line no-unused-vars
  changeTab: (val: number) => void
}

const TabsMenu: React.FC<ItabsMenu> = ({ changeTab }) => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className="tabs-menu">
      <ul>
        {mock.tabList.map((item, index) => (
          <li
            key={index}
            className={classNames({ active: index === active })}
            onClick={() => {
              setActive(index)
              changeTab(index)
            }}
          >
            {t(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TabsMenu
