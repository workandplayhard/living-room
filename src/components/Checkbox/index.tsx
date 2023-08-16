import React from 'react'

import { ICheckboxProps } from './types'

export const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
  disabled,
  className,
  onChangeChecked,
  ...rest
}) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={() => onChangeChecked(!checked)}
        {...rest}
      />
      <span>{label}</span>
    </label>
  )
}

export default Checkbox
