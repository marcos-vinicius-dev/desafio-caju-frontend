import * as S from './styles'

import { HiOutlineArrowLeft } from 'react-icons/hi'
import { IconButton } from '~/components/ui/Buttons/IconButton'
import { useNavigate } from 'react-router-dom'
import routes from '~/router/routes'
import CreateEmployeeForm from '~/components/CreateEmployeeForm'

const useNavigation = () => {
  const navigate = useNavigate()
  const goToHome = () => navigate(routes.dashboard)
  return { goToHome }
}

const NewEmployeePage = () => {
  const { goToHome } = useNavigation()

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={goToHome} aria-label='Voltar para o Dashboard'>
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <CreateEmployeeForm />
      </S.Card>
    </S.Container>
  )
}

export default NewEmployeePage
