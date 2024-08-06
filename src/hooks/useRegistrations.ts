import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RegistrationsGatewayHttp from '~/infra/gateway/RegistrationsGatewayHttp'
import AxiosAdapter from '~/infra/http/AxiosAdapter'
import GetRegistrations from '~/usecases/GetRegistrations'
import { validateCPF } from '~/utils/validateCPF'

const useRegistrations = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [cpf, setCpf] = useState<string | null>(null)
  const location = useLocation()

  const fetchData = useCallback(async (cpfLocal: string | null) => {
    try {
      setLoading(true)

      const axiosAdapter = new AxiosAdapter()
      const registrationsGateway = new RegistrationsGatewayHttp(axiosAdapter)
      const getRegistrations = new GetRegistrations(registrationsGateway)

      const result = await getRegistrations.execute(cpfLocal)
      setData(result)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const cpf = queryParams.get('cpf')

    setCpf(cpf)

    if (validateCPF(cpf || '') || cpf === null) {
      fetchData(cpf)
    }
  }, [location.search, fetchData])

  const refetch = useCallback(() => {
    fetchData(cpf)
  }, [fetchData, cpf])

  return { data, loading, error, refetch }
}

export default useRegistrations
