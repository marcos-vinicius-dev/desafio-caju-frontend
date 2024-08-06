import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'
import Registration, { Status } from '~/entities/Registration'
import CreateRegistration from '~/usecases/CreateRegistration'
import EmployeeFormData from '~/entities/Employee'

describe('CreateRegistration', () => {
  let createRegistration: CreateRegistration
  let registrationsGatewayMock: jest.Mocked<RegistrationsGateway>

  beforeEach(() => {
    registrationsGatewayMock = {
      createRegistration: jest.fn(),
    } as unknown as jest.Mocked<RegistrationsGateway>

    createRegistration = new CreateRegistration(registrationsGatewayMock)
  })

  test('should call createRegistration with the correct registration object', async () => {
    const registration: EmployeeFormData = {
      admissionDate: '2024-01-01',
      email: 'johndoe@example.com',
      name: 'John Doe',
      cpf: '123.456.789-00',
    }

    const expectedRegistration: Registration = {
      id: 'fake-id',
      admissionDate: '2024-01-01',
      email: 'johndoe@example.com',
      employeeName: 'John Doe',
      status: Status.REVIEW,
      cpf: '123.456.789-00',
    }

    registrationsGatewayMock.createRegistration.mockResolvedValueOnce(
      expectedRegistration
    )

    const result = await createRegistration.execute(registration)

    expect(registrationsGatewayMock.createRegistration).toHaveBeenCalledWith(
      registration
    )
    expect(registrationsGatewayMock.createRegistration).toHaveBeenCalledTimes(1)
    expect(result).toEqual(expectedRegistration)
  })

  test('should handle errors from createRegistration', async () => {
    const registration = {
      admissionDate: '2024-01-01',
      email: 'johndoe@example.com',
      employeeName: 'John Doe',
      status: Status.REVIEW,
      cpf: '123.456.789-00',
    }
    const error = new Error('Failed to create registration')

    registrationsGatewayMock.createRegistration.mockRejectedValueOnce(error)

    await expect(createRegistration.execute(registration)).rejects.toThrow(
      'Failed to create registration'
    )
  })
})
