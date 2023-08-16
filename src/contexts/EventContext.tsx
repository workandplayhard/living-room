import React, { useCallback, useMemo, useState } from 'react'

interface IEventInfo {
  eventId?: number
}

interface IEventContext {
  eventInfo: IEventInfo
  // eslint-disable-next-line no-unused-vars
  onChangeEventInfo: (val: Partial<IEventInfo>) => void
}

export const EventContext = React.createContext<IEventContext>({
  eventInfo: { eventId: 0 },
  onChangeEventInfo: () => null,
})

export const EventContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [eventInfo, setEventInfo] = useState<IEventInfo>({
    eventId: 0,
  })

  const onChangeEventInfo = useCallback((data: Partial<IEventInfo>) => {
    setEventInfo(perv => ({ ...perv, ...data }))
  }, [])

  const values = useMemo(
    () => ({ eventInfo, onChangeEventInfo }),
    [eventInfo, onChangeEventInfo],
  )

  return (
    <EventContext.Provider value={values}>{children}</EventContext.Provider>
  )
}
