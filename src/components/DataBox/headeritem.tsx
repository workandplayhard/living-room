import React from 'react'

interface IHeaderItem {
  iconName: string
  content: string
}

const HeaderItem: React.FC<IHeaderItem> = ({ iconName, content }) => (
  <li>
    <span className={iconName} />
    {content}
  </li>
)

export default HeaderItem
