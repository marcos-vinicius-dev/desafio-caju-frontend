import Registration from '~/entities/Registration'
import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'

export default class getRegistrations {
  constructor(private registrationGateway: RegistrationsGateway) {}

  async execute(cpf: string | null): Promise<Registration[]> {
    return this.registrationGateway.getRegistrations(cpf)
  }
}
