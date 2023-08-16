import React, { InputHTMLAttributes } from 'react'

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  className?: string
  // eslint-disable-next-line no-unused-vars
  onChangeText: (v: string) => void
  children?: React.ReactNode
  mask?: string
}
