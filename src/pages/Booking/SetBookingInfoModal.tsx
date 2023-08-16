import React, { useCallback, useState, useImperativeHandle } from 'react'
import { useNavigate } from 'react-router-dom'

import { t } from '@/i18n'
import { Modal, DateTimePicker, Button } from '@/components'
import { useBooking } from '@/hooks'
import { meetingDetailsPath, chooseLivingRoomPath } from '@/utils'

import SetGuest from './setGuest'

interface IBookingInfoControl {
  // eslint-disable-next-line no-unused-vars
  start: (modal?: string) => void
}

const occupiedDates: string[] = [
  '2023-04-09 7:30:00',
  '2023-04-10 6:20:00',
  '2023-04-30 12:30:00',
  '2023-05-01 11:00:00',
  '2023-05-04 11:00:00',
  '2023-06-03 11:00:00',
  '2023-06-18 11:00:00',
]

const SetBookingInfoModal = React.forwardRef<IBookingInfoControl, any>(
  (_, controlRef) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState<string | null>('')
    const { bookingInfo, onChangeBookingInfo } = useBooking()

    useImperativeHandle(controlRef, () => ({
      start(modal = 'datetime') {
        setModal(modal)
      },
    }))

    const onDateTimeSet = useCallback(() => {
      console.log({ aa: bookingInfo.guests })
      if (bookingInfo.guests === undefined) {
        setModal('guest')
      } else {
        setModal('')
        navigate(chooseLivingRoomPath)
      }
    }, [bookingInfo.guests, navigate])

    const onGuestSet = useCallback(() => {
      if (!bookingInfo.startTime || !bookingInfo.endTime) {
        setModal('datetime')
        return
      }
      setModal('')
      if (bookingInfo.roomId) {
        navigate(`/booking/${meetingDetailsPath}`)
      } else {
        navigate(chooseLivingRoomPath)
      }
    }, [
      bookingInfo.endTime,
      bookingInfo.roomId,
      bookingInfo.startTime,
      navigate,
    ])

    if (!modal) return null

    return (
      <Modal onClose={() => setModal(null)}>
        {modal === 'datetime' && (
          <>
            <DateTimePicker
              occupiedDates={occupiedDates}
              onSelect={(s: string, e: string) =>
                onChangeBookingInfo({ startTime: s, endTime: e })
              }
            />
            <Button className="main-btn" onClick={onDateTimeSet}>
              {t('next')}
            </Button>
          </>
        )}
        {modal === 'guest' && (
          <>
            <SetGuest
              handleCounter={(num: number) =>
                onChangeBookingInfo({ guests: num })
              }
              counter={bookingInfo.guests ?? 0}
            />

            <div className="modal-btn">
              <Button type="button" className="main-btn" onClick={onGuestSet}>
                {t('next')}
              </Button>
            </div>
          </>
        )}
      </Modal>
    )
  },
)

export default SetBookingInfoModal
