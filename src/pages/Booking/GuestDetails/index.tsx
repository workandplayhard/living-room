import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NavHeader, DataBox, ExtraDetails } from '@/components'
import { meetingDetailsPath } from '@/utils'
import { useBooking } from '@/hooks'

import DetailsForm from './detailsform'

const GuestDetails: React.FC = () => {
  const navigate = useNavigate()
  const { bookingInfo } = useBooking()

  return (
    <>
      <div className="toolbar dark">
        <div className="container">
          <NavHeader
            canBack
            onBack={() => navigate(`/booking/${meetingDetailsPath}`)}
          />
          <DataBox
            startTime={bookingInfo.startTime}
            endTime={bookingInfo.endTime}
            guests={bookingInfo.guests}
          />
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <DetailsForm />
          <ExtraDetails />
        </div>
      </div>
    </>
  )
}

export default GuestDetails
