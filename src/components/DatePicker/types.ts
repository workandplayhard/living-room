export interface IDatePickerProps {
  label?: string
  error?: string
  value?: string
  format?: string
  // eslint-disable-next-line no-unused-vars
  onChange: (v: string | null) => void
  className?: string
}
