import { useCallback, useMemo } from 'react'
import AxiosAdapter from '~/infra/http/AxiosAdapter'
import RegistrationGatewayHttp from '~/infra/gateway/RegistrationsGatewayHttp'

const useRegistrationDelete = () => {
  const axiosAdapter = useMemo(() => new AxiosAdapter(), [])

  const registrationsGateway = useMemo(
    () => new RegistrationGatewayHttp(axiosAdapter),
    [axiosAdapter]
  )

  const onDelete = useCallback(
    async (id: string) => {
      try {
        await registrationsGateway.deleteRegistration(id)
      } catch (error) {
        // toast.error('Erro ao deletar registro')
      }
    },
    [registrationsGateway]
  )

  return { onDelete }
}

export default useRegistrationDelete
