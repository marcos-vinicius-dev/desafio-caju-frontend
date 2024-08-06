import GetRegistrations from '~/usecases/GetRegistrations'
import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'
import Registration, { Status } from '~/entities/Registration'

describe('GetRegistrations', () => {
  let getRegistrations: GetRegistrations
  let registrationsGatewayMock: jest.Mocked<RegistrationsGateway>

  beforeEach(() => {
    registrationsGatewayMock = {
      getRegistrations: jest.fn(),
    } as unknown as jest.Mocked<RegistrationsGateway>

    getRegistrations = new GetRegistrations(registrationsGatewayMock)
  })

  test('should call getRegistrations with the correct CPF', async () => {
    const cpf = '123.456.789-00'
    const expectedRegistrations: Registration[] = [
      {
        id: '1',
        admissionDate: '2024-01-01',
        email: 'johndoe@example.com',
        employeeName: 'John Doe',
        status: Status.APPROVED,
        cpf: '123.456.789-00',
      },
    ]

    registrationsGatewayMock.getRegistrations.mockResolvedValueOnce(
      expectedRegistrations
    )

    const result = await getRegistrations.execute(cpf)

    expect(registrationsGatewayMock.getRegistrations).toHaveBeenCalledWith(cpf)
    expect(registrationsGatewayMock.getRegistrations).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expectedRegistrations)
  })

  test('should handle cases where CPF is null', async () => {
    const cpf = null
    const expectedRegistrations: Registration[] = []

    registrationsGatewayMock.getRegistrations.mockResolvedValueOnce(
      expectedRegistrations
    )

    const result = await getRegistrations.execute(cpf)

    expect(registrationsGatewayMock.getRegistrations).toHaveBeenCalledWith(cpf)
    expect(registrationsGatewayMock.getRegistrations).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expectedRegistrations)
  })

  test('should handle errors from getRegistrations', async () => {
    const cpf = '123.456.789-00'
    const error = new Error('Failed to get registrations')

    registrationsGatewayMock.getRegistrations.mockRejectedValueOnce(error)

    await expect(getRegistrations.execute(cpf)).rejects.toThrow(
      'Failed to get registrations'
    )
  })
})
