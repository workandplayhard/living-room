import React from 'react'
import classNames from 'classnames'

import { ITextLinkProps } from './types'

export const TextLink: React.FC<ITextLinkProps> = ({
  label,
  className,
  href,
  children,
  ...rest
}) => {
  return (
    <a
      href={href}
      className={classNames({
        [className || '']: !!className,
      })}
      {...rest}
    >
      {children}
      {label}
    </a>
  )
}

export default TextLink
