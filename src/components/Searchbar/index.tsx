import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import TextField from '~/components/ui/TextField'

import { cpfMask } from '~/utils/masks'
import { clearCPF } from '~/utils/validateCPF'

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [cpf, setCpf] = useState<string>('')

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const cpfFromQuery: string = queryParams.get('cpf') || ''
    setCpf(cpfFromQuery)
  }, [location.search])

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('cpf', clearCPF(term))
    } else {
      params.delete('cpf')
    }
    setSearchParams(params)
    navigate(`${location.pathname}?${params.toString()}`)
  }, 600)

  return (
    <TextField
      mask={cpfMask}
      placeholder='Digite um CPF válido'
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
      value={cpf}
      defaultValue={cpf}
    />
  )
}
