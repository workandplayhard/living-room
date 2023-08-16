/* eslint-disable no-unused-vars */

export interface CardInfo {
  name?: string
  cardNumber?: string
  expiryDate?: string
  cvc?: string
}

export interface IAddNewCard {
  // eslint-disable-next-line no-unused-vars
  onClose: (v: boolean) => void
  onAddCard: (v: CardInfo | null) => void
}

export interface IAddCard {
  data: CardInfo | null
  setData: (v: CardInfo | null) => void
  setCreditCards: () => void
  setOpenAddNewCard: (v: boolean) => void
}
