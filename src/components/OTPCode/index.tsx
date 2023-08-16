import React from 'react'
import OtpInput from 'react18-input-otp'

import { IOTPCodeProps } from './types'

export const OTPCode: React.FC<IOTPCodeProps> = ({
  value,
  count = 5,
  disabled,
  onChange,
}) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={count}
      separator={<span>&nbsp;</span>}
      isDisabled={disabled}
      isInputNum
    />
  )
}
