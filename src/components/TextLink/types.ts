import { AnchorHTMLAttributes } from 'react'

export interface ITextLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string
  className?: string
}
