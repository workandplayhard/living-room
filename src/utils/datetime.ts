import moment from 'moment'

export const getEnabledDates = (date?: Date | null): Date[] => {
  if (!date) return []
  const prevMonth = moment(date).subtract(1, 'month').startOf('month')
  const currentMonth = moment(date).startOf('month')
  const nextMonth = moment(date).add(1, 'month').endOf('month')

  const res: Date[] = []
  const currDate = prevMonth.clone()
  while (currDate.add(1, 'days').diff(nextMonth) < 0) {
    if (currDate.isSame(currentMonth, 'month')) {
      res.push(currDate.clone().toDate())
    }
  }

  return res
}
