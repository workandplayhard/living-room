import React from 'react'

import { IUsersList } from './types'

export const UsersList: React.FC<IUsersList> = ({ users, showNum = 5 }) => {
  const avatars = users.slice(0, showNum).map((url, index) => (
    <li key={index}>
      <img src={url} alt="" />
    </li>
  ))

  const difference = users.length - showNum

  return (
    <ul>
      {avatars}
      {difference > 0 && (
        <li>
          <span>+{difference}</span>
        </li>
      )}
    </ul>
  )
}

export default UsersList
