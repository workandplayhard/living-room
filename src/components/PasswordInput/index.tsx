import React, { useState } from 'react'

import { IPasswordInputProps } from './types'

export const PasswordInput: React.FC<IPasswordInputProps> = ({
  className,
  onChangeText,
  label,
  error,
  ...rest
}) => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <label className={className}>
      <span
        className={visible ? 'icon-eye' : 'icon-eye'}
        onClick={() => setVisible(!visible)}
      />
      <input
        type={visible ? 'text' : 'password'}
        placeholder={label}
        onChange={e => onChangeText(e.target.value)}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </label>
  )
}

export default PasswordInput
