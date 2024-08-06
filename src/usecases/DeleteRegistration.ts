import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'
'~/infra/gateway/RegistrationsGateway'

export default class DeleteRegistration {
  constructor(private registrationsGateway: RegistrationsGateway) {}

  async execute(id: string): Promise<void> {
    return this.registrationsGateway.deleteRegistration(id)
  }
}
