import Registration from '~/entities/Registration'
import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'

export default class UpdateRegistration {
  constructor(private registrationsGateway: RegistrationsGateway) {}

  async execute(
    id: string,
    registration: Partial<Registration>
  ): Promise<Registration> {
    return this.registrationsGateway.updateRegistration(id, registration)
  }
}
