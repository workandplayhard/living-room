import React, { useState } from 'react'

import { Button, Icon } from '@/components'
import { t } from '@/i18n'

import Header from './header'
import PersonalDetails from './personalDetails'
import CreditCards from './creditCards'
import DeleteModal from './deleteModal'

const Account: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false)

  return (
    <>
      <Header />
      <div className="page-content">
        <div className="container">
          <div className="profile-data">
            <PersonalDetails />
            <CreditCards />
            <div className="delete-account">
              <Button
                className="main-btn red"
                onClick={() => setDeleteModal(true)}
              >
                <Icon name="icon-delete" />
                {t('deleteAccount')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} />}
    </>
  )
}

export default Account
