import React from 'react'
import PhoneNumberInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import { IPhoneInputProps } from './types'

export const PhoneInput: React.FC<IPhoneInputProps> = ({
  value,
  disabled,
  error,
  onChange,
}) => {
  return (
    <div className="number-box">
      <PhoneNumberInput
        value={value}
        onChange={val => onChange(val)}
        disabled={disabled}
        defaultCountry={'IL'}
      />
      {error && <span className="error">{error}</span>}
    </div>
  )
}

export default PhoneInput
