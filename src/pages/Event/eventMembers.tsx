import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { t } from '@/i18n'

import { Button, UsersList } from '@/components'
import { IUsersList } from '@/components/UsersList/types'
import { useEvent } from '@/hooks'

import SetTicket from './setTicket'

const EventMembers: React.FC<IUsersList> = ({ users, showNum }) => {
  const [modal, setModal] = useState<string | null>(null)
  const [counter, setCounter] = useState<number>(0)
  const { id } = useParams()
  const { onChangeEventInfo } = useEvent()

  useEffect(() => {
    onChangeEventInfo({ eventId: +(id ?? 0) })
  }, [id, onChangeEventInfo])

  return (
    <>
      <div className="event-members">
        <div className="data-box">
          <h4>{t('eventMembers', { number: 97 })}</h4>
          <p>{t('planToCome')}</p>
        </div>
        <div className="list-box">
          <UsersList users={users} showNum={showNum} />
        </div>
      </div>
      <div className="book-btn">
        <Button className="main-btn" onClick={() => setModal('SetTicket')}>
          {t('registration')}
        </Button>
      </div>

      {modal === 'SetTicket' && (
        <SetTicket
          openModal={v => setModal(v)}
          counter={counter}
          handleCounter={val => setCounter(val)}
        />
      )}
    </>
  )
}

export default EventMembers
