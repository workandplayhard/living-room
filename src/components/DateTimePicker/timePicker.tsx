import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { Modal, Button } from '@/components'

interface ITimeSelect {
  className?: string
  title: string
  value?: string
  isValid?: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (val: string) => void
}

export const TimePicker: React.FC<ITimeSelect> = ({
  className,
  title,
  value,
  isValid,
  onChange,
}) => {
  const [showPicker, setShowPicker] = useState<boolean>(false)

  const timeList = useMemo(() => {
    const res: moment.Moment[] = []
    const date = moment(value).startOf('day')
    const currentDate = moment(value)
    while (date.isSame(currentDate, 'day')) {
      res.push(moment(date.format('YYYY-MM-DD HH:mm:ss')))
      date.add(30, 'minutes')
    }

    return res
  }, [value])

  return (
    <>
      <Button
        className={classNames('main-btn calendar-button', {
          error: !isValid,
        })}
        onClick={() => setShowPicker(true)}
      >
        <span>{value ? moment(value).format('h:mm a') : ''}</span>
      </Button>
      {showPicker && (
        <Modal
          onClose={() => setShowPicker(false)}
          className={`modal-content time-modal ${className}`}
          title={title}
        >
          <div className="time-list">
            {timeList.map((item, index) => (
              <div
                key={index}
                className={classNames('time-item', {
                  selected:
                    value &&
                    item.format('h:mm a') === moment(value).format('h:mm a'),
                })}
                onClick={() => {
                  onChange(item.format('YYYY-MM-DD HH:mm:00'))
                  setShowPicker(false)
                }}
              >
                <span>{item.format('h:mm a')}</span>
                <span className="icon-check" />
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  )
}

export default TimePicker
