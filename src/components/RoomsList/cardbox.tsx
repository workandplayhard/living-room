import React from 'react'

import { TextLink } from '@/components'

interface ICardBox {
  id: number
  imgURL: string
  title: string
  iconNames: string[]
  iconTitle?: string
  // eslint-disable-next-line no-unused-vars
  onClick?: (roomId: number) => void
}

const CardBox: React.FC<ICardBox> = ({
  id,
  imgURL,
  title,
  iconNames,
  iconTitle,
  onClick,
}) => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <div className="card-box" onClick={onClick ? () => onClick?.(id) : () => {}}>
    <div className="img">
      <TextLink>
        <img src={imgURL} alt="" />
      </TextLink>
    </div>
    <div className="name">
      <h3>{title}</h3>
      <p>
        {iconNames.map((iconName, index) => (
          <span key={index} className={iconName} />
        ))}
        {!!iconTitle && iconTitle}
      </p>
    </div>
  </div>
)

export default CardBox
