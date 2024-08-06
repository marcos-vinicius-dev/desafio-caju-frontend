import RegistrationsGateway from '~/infra/gateway/RegistrationsGateway'
import DeleteRegistration from '~/usecases/DeleteRegistration'

describe('DeleteRegistration', () => {
  let deleteRegistration: DeleteRegistration
  let registrationsGatewayMock: jest.Mocked<RegistrationsGateway>

  beforeEach(() => {
    registrationsGatewayMock = {
      deleteRegistration: jest.fn(),
    } as unknown as jest.Mocked<RegistrationsGateway>

    deleteRegistration = new DeleteRegistration(registrationsGatewayMock)
  })

  test('should call deleteRegistration with the correct id', async () => {
    const id = 'test-id'

    registrationsGatewayMock.deleteRegistration.mockResolvedValueOnce(undefined)

    await deleteRegistration.execute(id)

    expect(registrationsGatewayMock.deleteRegistration).toHaveBeenCalledWith(id)
    expect(registrationsGatewayMock.deleteRegistration).toHaveBeenCalledTimes(1)
  })

  test('should handle errors from deleteRegistration', async () => {
    const id = 'test-id'
    const error = new Error('Failed to delete registration')

    registrationsGatewayMock.deleteRegistration.mockRejectedValueOnce(error)

    await expect(deleteRegistration.execute(id)).rejects.toThrow(
      'Failed to delete registration'
    )
  })
})
