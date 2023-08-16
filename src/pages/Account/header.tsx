import React from 'react'

import { Button, NavHeader } from '@/components'
import { t } from '@/i18n'

const Header: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="container">
        <NavHeader canBack title={t('myProfile')}>
          <div className="btn-box right">
            <Button className="main-btn">
              <span className="icon-edit" />
            </Button>
          </div>
        </NavHeader>
      </div>
    </div>
  )
}

export default Header
