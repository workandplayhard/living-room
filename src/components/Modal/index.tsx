import React, { useCallback, useEffect } from 'react'
import ReactModal from 'react-modal'
import classNames from 'classnames'

import { IModal } from './types'
import Icon from '../Icon'

import { customStyles } from './styles'

export const Modal: React.FC<IModal> = ({
  title,
  titleAlign = 'left',
  shouldCloseOnOverlayClick = true,
  children,
  placement = 'bottom',
  className = 'modal-content',
  onClose,
}) => {
  useEffect(() => {
    ReactModal.setAppElement('#root')
  }, [])

  useEffect(
    () => () => {
      document.body.classList.remove('ReactModal__Body--open')
    },
    [],
  )

  const _onClose = useCallback(() => {
    document.body.classList.remove('ReactModal__Body--open')
    onClose?.()
  }, [onClose])

  return (
    <ReactModal
      isOpen
      onRequestClose={_onClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      ariaHideApp={false}
      className={classNames(className, placement)}
      overlayClassName="modal-overlay"
      style={customStyles}
    >
      <div className="modal-box open">
        <div className={className}>
          <div className="close-modal">
            <button type="button">
              <Icon name="icon-close" onClick={_onClose} />
            </button>
          </div>
          {title && (
            <div className={`modal-title ${titleAlign}`}>
              <span>{title}</span>
            </div>
          )}
          <div className="scroll-wrap">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

export default Modal
