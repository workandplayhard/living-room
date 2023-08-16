import React, { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  iconName?: string
  children?: React.ReactNode
}
