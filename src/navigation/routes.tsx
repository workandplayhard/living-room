import React, { useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import { AuthWrapper } from '@/layout'
import {
  HomePage,
  SignInPage,
  NotFoundPage,
  ApplyMembershipPage,
  ChooseLivingRoomPage,
  PhoneInputPage,
  OTPPage,
  MembershipRequestPage,
  RoomsDetailsPage,
  MeetingDetailsPage,
  GuestDetailsPage,
  PaymentPage,
  InvitationPage,
  InvitationDetailPage,
  EventAwaitingApprovalPage,
  EventPage,
  EventSharePage,
  BookingsPage,
  BookingPage,
  AccountPage,
} from '@/pages'

import {
  signInPath,
  homePath,
  notFoundPath,
  applyMembershipPath,
  chooseLivingRoomPath,
  phoneInputPath,
  otpPath,
  membershipRequestPath,
  roomDetailsPath,
  meetingDetailsPath,
  guestDetailsPath,
  paymentPath,
  invitationPath,
  invitationDetailPath,
  eventAwaitingApprovalPath,
  eventPath,
  eventSharePath,
  bookingsPath,
  bookingDetailPath,
  accountPath,
} from '@/utils'

const AppRoutes: React.FC = () => {
  const onError = useCallback((e: Error) => {
    console.log({ appError: e })
  }, [])

  return (
    <ErrorBoundary onError={onError} fallback={<div />}>
      <Routes>
        <Route path="/" element={<Navigate to={homePath} />} />
        <Route path={signInPath} element={<SignInPage />} />
        <Route path={applyMembershipPath} element={<ApplyMembershipPage />} />
        <Route path={chooseLivingRoomPath} element={<ChooseLivingRoomPage />} />
        <Route path={phoneInputPath} element={<PhoneInputPage />} />
        <Route path={otpPath} element={<OTPPage />} />
        <Route
          path={membershipRequestPath}
          element={<MembershipRequestPage />}
        />
        <Route path={notFoundPath} element={<NotFoundPage />} />
        <Route element={<AuthWrapper />}>
          <Route path={homePath} element={<HomePage />} />
          <Route path={roomDetailsPath} element={<RoomsDetailsPage />} />
          <Route path={invitationPath} element={<InvitationPage />} />
          <Route path={eventPath} element={<EventPage />} />
          <Route path={bookingsPath} element={<BookingsPage />} />
          <Route path={eventSharePath} element={<EventSharePage />} />
          <Route path={bookingDetailPath} element={<BookingPage />} />
          <Route path={accountPath} element={<AccountPage />} />
          <Route
            path={eventAwaitingApprovalPath}
            element={<EventAwaitingApprovalPage />}
          />
          <Route
            path={invitationDetailPath}
            element={<InvitationDetailPage />}
          />
          <Route path="/booking/*">
            <Route path={meetingDetailsPath} element={<MeetingDetailsPage />} />
            <Route path={guestDetailsPath} element={<GuestDetailsPage />} />
            <Route path={paymentPath} element={<PaymentPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default AppRoutes
