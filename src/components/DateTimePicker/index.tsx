import React, { useState, useEffect, useCallback, useMemo } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import { t } from '@/i18n'
import { getEnabledDates } from '@/utils'
import TimePicker from './timePicker'

import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  occupiedDates: string[]
  // eslint-disable-next-line no-unused-vars
  onSelect: (start: string, end: string) => void
}

const dateFormat = 'YYYY-MM-DD HH:mm:00'

export const DateTimePicker: React.FC<Props> = ({
  occupiedDates,
  onSelect,
}) => {
  const [curDate, setCurDate] = useState<Date | null>(new Date())
  const [enabledDates, setEnabledDates] = useState<Date[] | null>(null)
  const [startTime, setStartTime] = useState<string>('')
  const [endTime, setEndTime] = useState<string>('')

  useEffect(() => {
    if (enabledDates === null) {
      setEnabledDates(getEnabledDates(curDate))
    }
  }, [curDate, enabledDates])

  useEffect(() => {
    if (!curDate) return
    if (!startTime) {
      const min = moment(curDate).minutes()
      setStartTime(
        moment(curDate)
          .add(30 - (min % 30), 'minutes')
          .format(dateFormat),
      )
    }
  }, [curDate, startTime])

  useEffect(() => {
    if (!startTime || endTime) return
    setEndTime(moment(startTime).add(30, 'minutes').format(dateFormat))
  }, [endTime, startTime])

  useEffect(() => {
    if (startTime && endTime) {
      onSelect(startTime, endTime)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTime, startTime])

  const onChangeMonth = useCallback((d: Date) => {
    const _dates = getEnabledDates(d)
    setEnabledDates(_dates)
  }, [])

  const onSelectDate = useCallback(
    (d: Date | null) => {
      if (!d) return
      setCurDate(d)
      const day = moment(d).format('YYYY-MM-DD')
      setStartTime(`${day} ${moment(startTime).format('HH:mm:00')}`)
      setEndTime(`${day} ${moment(endTime).format('HH:mm:00')}`)
    },
    [endTime, startTime],
  )

  const isValid = useMemo(() => {
    const res = { start: true, end: true }
    if (!curDate) return res
    if (startTime && moment().isSame(curDate, 'day')) {
      res.start = moment(curDate).isBefore(startTime)
    }

    if (endTime) {
      res.end = moment(endTime).isAfter(startTime)
    }

    return res
  }, [curDate, endTime, startTime])

  return (
    <div className="datetime-picker">
      <div className="date-picker">
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={
            occupiedDates.some(t => moment(t).isSame(moment(curDate), 'day'))
              ? undefined
              : curDate
          }
          onChange={date => onSelectDate(date)}
          inline
          className="date-picker"
          includeDates={enabledDates || []}
          forceShowMonthNavigation
          withPortal
          dayClassName={d =>
            occupiedDates.some(t => moment(t).isSame(moment(d), 'day'))
              ? 'occupied'
              : null
          }
          onMonthChange={(d: Date) => onChangeMonth(d)}
        />
      </div>
      <div className="time">
        <TimePicker
          className="start-time-picker"
          title={t('startTime')}
          value={startTime}
          isValid={isValid.start}
          onChange={(v: string) => setStartTime(v)}
        />
        <span>{t('until')}</span>
        <TimePicker
          className="end-time-picker"
          title={t('endTime')}
          value={endTime}
          isValid={isValid.end}
          onChange={(v: string) => setEndTime(v)}
        />
      </div>
    </div>
  )
}

export default DateTimePicker
