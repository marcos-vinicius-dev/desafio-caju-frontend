import UpdateRegistration from '~/usecases/UpdateRegistration'
import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'
import Registration, { Status } from '~/entities/Registration'

describe('UpdateRegistration', () => {
  let updateRegistration: UpdateRegistration
  let registrationsGatewayMock: jest.Mocked<RegistrationsGateway>

  beforeEach(() => {
    registrationsGatewayMock = {
      getRegistrations: jest.fn(),
      createRegistration: jest.fn(),
      updateRegistration: jest.fn(),
      deleteRegistration: jest.fn(),
    } as unknown as jest.Mocked<RegistrationsGateway>

    updateRegistration = new UpdateRegistration(registrationsGatewayMock)
  })

  test('should call updateRegistration with the correct parameters and return updated registration', async () => {
    const id = '1'
    const updatedData: Partial<Registration> = {
      email: 'newemail@example.com',
      status: Status.APPROVED,
    }

    const updatedRegistration: Registration = {
      id: '1',
      admissionDate: '2024-01-01',
      email: 'newemail@example.com',
      employeeName: 'John Doe',
      status: Status.APPROVED,
      cpf: '123.456.789-00',
    }

    registrationsGatewayMock.updateRegistration.mockResolvedValueOnce(
      updatedRegistration
    )

    const result = await updateRegistration.execute(id, updatedData)

    expect(registrationsGatewayMock.updateRegistration).toHaveBeenCalledWith(
      id,
      updatedData
    )
    expect(registrationsGatewayMock.updateRegistration).toHaveBeenCalledTimes(1)
    expect(result).toEqual(updatedRegistration)
  })

  test('should handle errors from updateRegistration', async () => {
    const id = '1'
    const updatedData: Partial<Registration> = {
      email: 'newemail@example.com',
      status: Status.APPROVED,
    }
    const error = new Error('Failed to update registration')

    registrationsGatewayMock.updateRegistration.mockRejectedValueOnce(error)

    await expect(updateRegistration.execute(id, updatedData)).rejects.toThrow(
      'Failed to update registration'
    )
  })
})
