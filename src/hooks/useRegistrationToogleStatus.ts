import { useCallback, useMemo } from 'react'
import AxiosAdapter from '~/infra/http/AxiosAdapter'
import RegistrationGatewayHttp from '~/infra/gateway/RegistrationsGatewayHttp'
import { Status } from '~/entities/Registration'
import { useDashboardContext } from '~/context/DashboardContext'

const useRegistrationToogleStatus = () => {
  const { refetch } = useDashboardContext()
  const axiosAdapter = useMemo(() => new AxiosAdapter(), [])

  const registrationsGateway = useMemo(
    () => new RegistrationGatewayHttp(axiosAdapter),
    [axiosAdapter]
  )

  const updateStatus = useCallback(
    async (id: string, status: Status) => {
      try {
        await registrationsGateway.updateRegistrationStatus(id, status)
        refetch()
      } catch (error) {
        console.error('Erro ao atualizar status:', error)
      }
    },
    [registrationsGateway]
  )

  const reprove = useCallback(
    (id: string) => updateStatus(id, Status.REPROVED),
    [updateStatus]
  )
  const approve = useCallback(
    (id: string) => updateStatus(id, Status.APPROVED),
    [updateStatus]
  )
  const review = useCallback((id: string) => updateStatus(id, Status.REVIEW), [
    updateStatus,
  ])

  return { reprove, approve, review }
}

export default useRegistrationToogleStatus
