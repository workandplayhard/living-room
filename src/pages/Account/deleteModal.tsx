import React from 'react'

import { Button, Icon, Modal } from '@/components'
import { t } from '@/i18n'

interface IDeleteModal {
  onClose: () => void
}

const DeleteModal: React.FC<IDeleteModal> = ({ onClose }) => {
  return (
    <Modal
      onClose={() => onClose()}
      className="confirm-delete delete-account-modal"
    >
      <div className="modal-title">
        <h3>{t('areYouSure')}</h3>
        <p>{t('deletePermanently')}</p>
      </div>
      <div className="modal-btn">
        <Button className="main-btn red">
          <Icon name="icon-delete" />
          {t('deleteAccount')}
        </Button>
        <Button className="main-btn white">
          <Icon name="icon-back" />
          {t('goBack')}
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteModal
