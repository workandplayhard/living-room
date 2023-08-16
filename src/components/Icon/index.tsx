import React from 'react'

import { IIconProps } from './types'

export const Icon: React.FC<IIconProps> = ({ name, onClick }) => {
  return <span className={name} onClick={() => onClick?.()} />
}

export default Icon
