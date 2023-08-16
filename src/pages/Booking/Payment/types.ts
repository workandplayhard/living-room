import { CardInfo } from '@/pages/Payment/types'

export interface ICreditCards {
  selectedCard?: CardInfo | null
  // eslint-disable-next-line no-unused-vars
  onSelectCard?: (v: CardInfo) => void
  // eslint-disable-next-line no-unused-vars
  onClose?: (v: string | null) => void
  creditCards?: CardInfo[]
  selectedCardIndex?: number | null
}
