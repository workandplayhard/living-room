import React, { useState, useRef } from 'react'
import { DatePicker as DatePickerModule } from 'react-responsive-datepicker'
import moment from 'moment'

import { useClickOutside } from '@/hooks'
import { IDatePickerProps } from './types'
import 'react-responsive-datepicker/dist/index.css'

export const DatePicker: React.FC<IDatePickerProps> = ({
  label,
  value,
  className,
  format = 'YYYY-MM-DD',
  error,
  onChange,
}) => {
  const containerRef = useRef<HTMLLabelElement | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useClickOutside(containerRef, !visible, () => setVisible(false))

  return (
    <>
      <label className={`date-field ${className}`} ref={containerRef}>
        <span className="icon-calendar" onClick={() => setVisible(true)} />
        <input
          type="text"
          value={value ? moment(value).format(format) : ''}
          placeholder={label}
        />
        <DatePickerModule
          isOpen={visible}
          onClose={() => setVisible(false)}
          defaultValue={value ? moment(value, format).toDate() : undefined}
          headerFormat="DD, MM dd"
          onChange={val => onChange(moment(val).format(format))}
        />
      </label>
      {error && <span className="error birth-error-pos">{error}</span>}
    </>
  )
}

export default DatePicker
