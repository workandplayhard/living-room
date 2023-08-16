import { InputHTMLAttributes } from 'react'

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  disabled?: boolean
  checked?: boolean
  className?: string
  // eslint-disable-next-line no-unused-vars
  onChangeChecked: (v: boolean) => void
}
