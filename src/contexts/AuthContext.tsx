import React, { useCallback, useState, useMemo } from 'react'
import {
  useNavigate,
  useLocation,
  NavigateFunction,
  Location,
} from 'react-router-dom'

import { ISignInPayload } from '@/types'
import { homePath } from '@/utils'

interface IAuthContext {
  authenticated: boolean
  // eslint-disable-next-line no-unused-vars
  onSignIn: (payload: ISignInPayload) => void
  onSignOut: () => void
}

export const AuthContext = React.createContext<IAuthContext>({
  authenticated: false,
  onSignIn: () => null,
  onSignOut: () => null,
})

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate: NavigateFunction = useNavigate()
  const { state: rootState }: Location = useLocation()
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  const onSignIn = useCallback(
    (payload: ISignInPayload) => {
      if (payload.email && payload.password) {
        setAuthenticated(true)
        navigate(rootState?.from?.pathname || homePath, { replace: true })
      }
    },
    [navigate, rootState?.from?.pathname],
  )

  const onSignOut = useCallback(() => {
    setAuthenticated(false)
  }, [])

  const values = useMemo(
    () => ({
      authenticated,
      onSignIn,
      onSignOut,
    }),
    [authenticated, onSignIn, onSignOut],
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
