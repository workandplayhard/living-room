import { InputHTMLAttributes } from 'react'

export interface IPasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  className?: string
  label?: string
  // eslint-disable-next-line no-unused-vars
  onChangeText: (v: string) => void
}
