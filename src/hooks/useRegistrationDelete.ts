import { useCallback, useMemo } from 'react'
import AxiosAdapter from '~/infra/http/AxiosAdapter'
import RegistrationGatewayHttp from '~/infra/gateway/RegistrationsGatewayHttp'
import toast from 'react-hot-toast'

const useRegistrationDelete = () => {
  const axiosAdapter = useMemo(() => new AxiosAdapter(), [])
  const notify = (msg: string) => toast(msg)

  const registrationsGateway = useMemo(
    () => new RegistrationGatewayHttp(axiosAdapter),
    [axiosAdapter]
  )

  const onDelete = useCallback(
    async (id: string) => {
      try {
        await registrationsGateway.deleteRegistration(id)
        notify('Registro deletado com sucesso')
      } catch (error) {
        notify('Erro ao deletar registro.')
      }
    },
    [registrationsGateway]
  )

  return { onDelete }
}

export default useRegistrationDelete
