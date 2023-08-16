import React from 'react'
import classNames from 'classnames'

import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  disabled,
  loading,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(className, {
        disabled,
      })}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
    </button>
  )
}
