import { HiRefresh } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '~/components/Buttons'
import { IconButton } from '~/components/Buttons/IconButton'
import TextField from '~/components/TextField'
import routes from '~/router/routes'
import * as S from './styles'

export const SearchBar = () => {
  const navigate = useNavigate()

  const goToNewAdmissionPage = () => {
    navigate(routes.newUser)
  }

  return (
    <S.Container>
      <TextField placeholder='Digite um CPF válido' />
      <S.Actions>
        <IconButton aria-label='refetch'>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  )
}
