import React from 'react'
import InputMask from 'react-input-mask'

import { ITextInputProps } from './types'

export const TextInput: React.FC<ITextInputProps> = ({
  label,
  className,
  onChangeText,
  error,
  mask,
  ...rest
}) => {
  return (
    <label className={className}>
      {!mask ? (
        <input
          placeholder={label}
          onChange={e => onChangeText(e.target.value)}
          {...rest}
        />
      ) : (
        <InputMask
          placeholder={label}
          onChange={(e: any) => onChangeText(e.target.value)}
          mask={mask}
          maskChar=""
          {...rest}
        />
      )}

      {error && <span className="error">{error}</span>}
    </label>
  )
}

export default TextInput
