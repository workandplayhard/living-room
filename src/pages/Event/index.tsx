import React from 'react'

import { Button, NavHeader } from '@/components'

import EventText from './eventText'
import Header from './header'
import EventMembers from './eventMembers'

import mock from './mock'

const Event: React.FC = () => {
  return (
    <>
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack title="Details">
            <div className="btn-box right">
              <Button className="main-btn">
                <span className="icon-share" />
              </Button>
            </div>
          </NavHeader>
        </div>
      </div>
      <div className="room-details">
        <div className="container">
          <Header date={new Date()} />
          <EventText />
          <EventMembers users={mock.avatarURLs} />
        </div>
      </div>
    </>
  )
}

export default Event
