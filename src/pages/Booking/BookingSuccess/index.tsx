import React, { useCallback } from 'react'

import { Button, Modal, NavHeader } from '@/components'

import Confirmation from './confirmation'

interface IBookingSuccess {
  onClose: () => void
}

const BookingSuccess: React.FC<IBookingSuccess> = ({ onClose }) => {
  const _onClose = useCallback(() => {
    document.body.classList.remove('ReactModal__Body--open')
    onClose?.()
  }, [onClose])

  return (
    <Modal
      onClose={() => onClose()}
      className="modal-content confirmation-page"
    >
      <div className="toolbar">
        <NavHeader canBack={false}>
          <div className="btn-box right">
            <Button className="main-btn" onClick={() => _onClose()}>
              <span className="icon-close" />
            </Button>
          </div>
        </NavHeader>
      </div>

      <Confirmation />
    </Modal>
  )
}

export default BookingSuccess
