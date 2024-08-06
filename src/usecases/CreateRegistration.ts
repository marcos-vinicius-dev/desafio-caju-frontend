import Registration from '~/entities/Registration'
import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'

export default class CreateRegistration {
  constructor(private registrationsGateway: RegistrationsGateway) {}

  async execute(registration: Registration): Promise<Registration> {
    return this.registrationsGateway.createRegistration(registration)
  }
}
