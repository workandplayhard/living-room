import React from 'react'
import { useLocation, Navigate, Location, Outlet } from 'react-router-dom'

import { homePath, signInPath } from '@/utils/index'
import { useAuth } from '@/hooks'

const AuthWrapper: React.FC = () => {
  const { authenticated } = useAuth()
  const location: Location = useLocation()

  if (!authenticated) {
    return (
      <Navigate
        to={signInPath}
        state={{ from: location || homePath }}
        replace
      />
    )
  }

  return <Outlet />
}

export default AuthWrapper
