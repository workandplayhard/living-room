export interface IDateTimeProps {
  value: Date | string
  format: string
  className?: string
  // eslint-disable-next-line no-unused-vars
  children?: (text: string) => React.ReactNode
}
