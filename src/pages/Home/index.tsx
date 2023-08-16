import React, { useCallback, useRef, useState } from 'react'

import { RoomsList, NavMenu } from '@/components'

import SetBookingInfoModal from '../Booking/SetBookingInfoModal'
import Header from './header'
import TabsMenu from './tabsmenu'
import ContentTitle from './contenttitle'

const HomePage: React.FC = () => {
  const bookingInfoRef =
    useRef<React.ElementRef<typeof SetBookingInfoModal>>(null)
  const [tab, setTab] = useState<number>(0)

  const onSetModal = useCallback((modal: string) => {
    bookingInfoRef.current?.start(modal)
  }, [])

  return (
    <>
      <div className="user-intro">
        <NavMenu />
        <Header onSetModal={onSetModal} />
      </div>
      <div className="page-content">
        <div className="container">
          <div className="tabs-box">
            <TabsMenu changeTab={(tab: number) => setTab(tab)} />
            <div className="tabs-content">
              <ContentTitle />
              {tab === 0 ? <RoomsList choose /> : <RoomsList />}
            </div>
          </div>
        </div>
      </div>
      <SetBookingInfoModal ref={bookingInfoRef} />
    </>
  )
}

export default HomePage
