import { useContext } from 'react'

import { EventContext } from '@/contexts'

export const useEvent = () => useContext(EventContext)
