import React from 'react'
import { useNavigate } from 'react-router'

import { homePath } from '@/utils'

import { INavHeaderProps } from './types'

export const NavHeader: React.FC<INavHeaderProps> = ({
  title,
  children,
  onBack,
  canBack = true,
}) => {
  const navigate = useNavigate()

  return (
    <div className="nav-box">
      {canBack && (
        <div className="btn-box left">
          <button type="button" className="main-btn">
            <span
              className="icon-left"
              onClick={() => (onBack ? onBack() : navigate(homePath))}
            />
          </button>
        </div>
      )}
      {!!title && (
        <div className="title-box">
          <h1>{title}</h1>
        </div>
      )}
      {children}
    </div>
  )
}

export default NavHeader
