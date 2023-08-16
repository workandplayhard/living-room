import React from 'react'

import { IRadioProps } from './types'

export const Radio: React.FC<IRadioProps> = ({
  checked,
  label,
  disabled,
  className,
  ...rest
}) => {
  return (
    <label className={className}>
      <input type="radio" disabled={disabled} checked={checked} {...rest} />
      <span>{label}</span>
    </label>
  )
}

export default Radio
