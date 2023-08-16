import React, { useCallback, useMemo } from 'react'

import { t } from '@/i18n'

import HeaderItem from './headeritem'

import moment from 'moment'

interface IDataBox {
  startTime?: string
  endTime?: string
  guests?: number
}

export const DataBox: React.FC<IDataBox> = ({ startTime, endTime, guests }) => {
  const formatted = useCallback(
    (value: string, format: string) => moment(value).format(format),
    [],
  )

  const _startTime = useMemo(
    () => formatted(startTime || '', 'ddd D MMM, h:mmA').toString(),
    [startTime, formatted],
  )
  const _endTime = useMemo(
    () => formatted(endTime || '', 'h:mmA').toString(),
    [endTime, formatted],
  )

  const headerData = useMemo(() => {
    return [
      {
        iconName: 'icon-group',
        content: t('guestsNum', {
          postProcess: 'interval',
          count: guests ?? 0,
        }),
      },
      {
        iconName: 'icon-calendar',
        content: _startTime + ' - ' + _endTime,
      },
    ]
  }, [guests, _endTime, _startTime])

  return (
    <div className="data-box">
      <ul>
        {headerData.map((row, index) => (
          <HeaderItem
            key={index}
            iconName={row.iconName}
            content={row.content}
          />
        ))}
      </ul>
    </div>
  )
}

export default DataBox
