import Registration, { Status } from '~/entities/Registration'

export const filterRegistrationsByStatus = (
  registrations: Registration[],
  status: Status
): Registration[] => {
  return registrations.filter((registration) => registration.status === status)
}
