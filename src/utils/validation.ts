export const nameTest = (fullName: string) => {
  const reg = /^[A-Za-z\s]*$/

  return reg.test(fullName)
}

export const cardNumberTest = (cardNumber: string) => {
  if (cardNumber.length === 16) return true

  return false
}

export const expiryDateTest = (input: string) => {
  const regex = /^\d+\/\d+$/

  return regex.test(input)
}

export const cvcTest = (input: string) => {
  if (input.length === 3) return true

  return false
}
