import React from 'react'

export interface IModal {
  title?: string
  shouldCloseOnOverlayClick?: boolean
  children?: React.ReactNode
  className?: string
  placement?: 'bottom' | 'top' | 'middle'
  onClose?: () => void
  titleAlign?: 'left' | 'center' | 'right'
  _delete?: boolean
}
