import { RefObject, useEffect } from 'react'

type OnClose = () => void

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  shouldRemoveListeners: boolean | null,
  onClose: OnClose,
) => {
  useEffect(() => {
    const clickListener = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    }
    const escapeListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('click', clickListener)
    document.addEventListener('mouseup', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      if (shouldRemoveListeners) {
        document.removeEventListener('click', clickListener)
        document.removeEventListener('mouseup', clickListener)
        document.removeEventListener('keyup', escapeListener)
      }
    }
  }, [shouldRemoveListeners, onClose, ref])
}

export default useClickOutside
