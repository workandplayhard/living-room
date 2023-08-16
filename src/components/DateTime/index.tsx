import React from 'react'
import moment from 'moment'

import { IDateTimeProps } from './types'

export const DateTime: React.FC<IDateTimeProps> = ({
  value,
  format,
  className,
  children,
}) => {
  const formatted = moment(value).format(format)

  if (children) {
    return <span className={className}>{children(formatted)}</span>
  }

  if (className === 'date-time') return <>{formatted}</>
  return <span className={className}>{formatted}</span>
}

export default DateTime
