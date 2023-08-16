export const notFoundPath = '/404'
export const homePath = '/home'
export const signInPath = '/sign-in'
export const applyMembershipPath = '/apply-membership'
export const chooseLivingRoomPath = '/choose-living-room'
export const phoneInputPath = '/phone-input'
export const otpPath = '/otp'
export const membershipRequestPath = '/membership-request'
export const roomDetailsPath = '/rooms/:id'
export const invitationPath = '/invitation'
export const invitationDetailPath = '/invitation-detail'
export const eventPath = '/events/:id'
export const eventAwaitingApprovalPath = '/events/:id/awaiting-approval'
export const eventSharePath = '/events/:id/share'
export const bookingsPath = '/bookings'
export const accountPath = '/account'
export const bookingDetailPath = '/bookings/:id'
export const meetingDetailsPath = 'meeting-details'
export const guestDetailsPath = 'guest-details'
export const paymentPath = 'payment'
export const bookingPaymentPath = '/booking/payment'

export const isActiveLink = (locationPath: string, path: string): boolean => {
  const _path = locationPath.split('/')

  return _path.includes(path)
}

export const generatePath = (
  path: string,
  params: { [x: string]: string | number | undefined | null } = {},
): string => {
  let newPath: string = path
  Object.keys(params).forEach(param => {
    newPath = newPath.replace(`:${param}`, `${params[param] || ''}`)
  })

  return newPath
}
