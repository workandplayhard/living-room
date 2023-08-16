import React, { useCallback, useMemo, useState } from 'react'
import moment from 'moment'

import { Button, NavHeader, TextLink } from '@/components'
import { t } from '@/i18n'
import { ITab } from '@/types'

import BookingItem from './bookingItem'

import { IBook } from './types'

import mock from './mock'

const tabs: ITab[] = [
  { id: 'upcoming', label: t('upcoming') },
  { id: 'past', label: t('past') },
]

const perPage = 4

const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('upcoming')
  const [upcomingPage, setUpcomingPage] = useState<number>(1)
  const [pastPage, setPastPage] = useState<number>(1)

  const [upcomingData, pastData] = useMemo(() => {
    const now = moment()
    const _upcoming: IBook[] = []
    const _past: IBook[] = []
    mock.availableBookingsList.forEach(item => {
      if (moment(item.startTime).isAfter(now)) {
        _past.push(item)
      } else {
        _upcoming.push(item)
      }
    })

    return [_upcoming, _past]
  }, [])

  const onLoadMore = useCallback(() => {
    if (activeTab === 'upcoming') {
      setUpcomingPage(prev => prev + 1)
    }
    if (activeTab === 'past') {
      setPastPage(prev => prev + 1)
    }
  }, [activeTab])

  return (
    <div className="bookings">
      <div className="toolbar">
        <div className="container">
          <NavHeader canBack title={t('myBooking')} />
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="tabs-box">
            <div className="tabs-menu">
              <ul>
                {tabs.map(tab => (
                  <li
                    key={tab.id}
                    className={tab.id === activeTab ? 'active' : 'inactive'}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <TextLink>{tab.label}</TextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tabs-content">
              <div className="available-booking">
                {activeTab === 'upcoming' && (
                  <>
                    <ul>
                      {upcomingData.slice(0, upcomingPage * perPage).map(d => (
                        <BookingItem key={d.id} item={d} />
                      ))}
                    </ul>
                    {upcomingData.slice(0, upcomingPage * perPage).length <
                      upcomingData.length && (
                      <div className="action-btn">
                        <Button
                          className="main-btn white outline"
                          onClick={() => onLoadMore()}
                        >
                          {t('loadMore')}
                        </Button>
                      </div>
                    )}
                  </>
                )}
                {activeTab === 'past' && (
                  <>
                    <ul>
                      {pastData.slice(0, pastPage * perPage).map(d => (
                        <BookingItem key={d.id} item={d} />
                      ))}
                    </ul>
                    {pastData.slice(0, pastPage * perPage).length <
                      pastData.length && (
                      <div className="action-btn">
                        <Button
                          className="main-btn white outline"
                          onClick={() => onLoadMore()}
                        >
                          {t('loadMore')}
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookings
