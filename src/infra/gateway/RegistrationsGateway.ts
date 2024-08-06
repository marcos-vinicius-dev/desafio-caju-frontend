import Registration from '~/entities/Registration'

export default interface RegistrationsGateway {
  getRegistrations(cpf: string | null): Promise<Registration[]>
  createRegistration(registration: Registration): Promise<Registration>
  updateRegistration(
    id: string,
    registration: Partial<Registration>
  ): Promise<Registration>
  deleteRegistration(id: string): Promise<void>
}
