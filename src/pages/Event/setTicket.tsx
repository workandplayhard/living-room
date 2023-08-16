import React, { useState } from 'react'

import { Button, Counter, Modal } from '@/components'
import { t } from '@/i18n'

import SetAtendeeDetails from './setAtendeeDetails'

import { ISetTicket } from './types'

const SetTicket: React.FC<ISetTicket> = ({
  counter,
  openModal,
  handleCounter,
}) => {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <Modal onClose={() => openModal(null)}>
      <div className="modal-title">
        <h3>{t('numberOfTickets')}</h3>
      </div>
      <Counter
        handleCounter={(val: number) => handleCounter(val)}
        counter={counter}
      />
      <div className="modal-btn">
        <Button
          type="button"
          className="main-btn"
          onClick={() => setModal(true)}
        >
          {t('next')}
        </Button>
      </div>
      {modal && <SetAtendeeDetails openModal={val => setModal(val)} />}
    </Modal>
  )
}

export default SetTicket
