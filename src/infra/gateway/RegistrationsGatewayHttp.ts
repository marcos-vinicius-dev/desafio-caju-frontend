import Registration, { Status } from '~/entities/Registration'
import HttpClient from '../http/HttpClient'
import RegistrationsGateway from './RegistrationsGateway'

export default class RegistrationGatewayHttp implements RegistrationsGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getRegistrations(cpf: string | null): Promise<Registration[]> {
    const apiURL = import.meta.env.VITE_API_URL
    const url = cpf
      ? `${apiURL}/registrations?cpf=${encodeURIComponent(cpf)}`
      : `${apiURL}/registrations`
    return await this.httpClient.get(url)
  }

  async createRegistration(registration: Registration): Promise<Registration> {
    const apiURL = import.meta.env.VITE_API_URL
    return await this.httpClient.post(`${apiURL}/registrations`, registration)
  }

  async updateRegistration(
    id: string,
    registration: Partial<Registration>
  ): Promise<Registration> {
    const apiURL = import.meta.env.VITE_API_URL
    return await this.httpClient.put(
      `${apiURL}/registrations/${id}`,
      registration
    )
  }

  async updateRegistrationStatus(
    id: string,
    status: Status
  ): Promise<Registration> {
    const apiURL = import.meta.env.VITE_API_URL
    return await this.httpClient.patch(`${apiURL}/registrations/${id}`, {
      status,
    })
  }

  async deleteRegistration(id: string): Promise<void> {
    const apiURL = import.meta.env.VITE_API_URL
    return await this.httpClient.delete(`${apiURL}/registrations/${id}`)
  }
}
