import { parsePhoneNumber } from 'react-phone-number-input'

const USregex = /^(?:\+1)?[2-9]\d{2}[2-9](?!11)\d{6}$/
const UKregex = /^(?:\+44|0)7\d{9}$/
const CANregex = /^(?:\+1)?[2-9]\d{2}[2-9]\d{2}\d{4}$/
const AUSregex = /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/
const INDregex = /^(?:\+91|0)?[6-9]\d{9}$/
const ISRregex = /^(?:\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/

export const validPhoneNumber = (phoneNumber: string) => {
  const parsed = parsePhoneNumber(phoneNumber)
  const country = parsed?.country || ''

  if (!phoneNumber || phoneNumber.length < 10) return false
  if (phoneNumber === undefined) return true
  switch (country) {
    case 'IL':
      return ISRregex.test(phoneNumber)
    case 'US':
      return USregex.test(phoneNumber)
    case 'IN':
      return INDregex.test(phoneNumber)
    case 'GB':
      return UKregex.test(phoneNumber)
    case 'CA':
      return CANregex.test(phoneNumber)
    case 'AU':
      return AUSregex.test(phoneNumber)
    default:
      return true
  }
}
