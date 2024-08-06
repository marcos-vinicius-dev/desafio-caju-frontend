import * as S from './styles'
import { SearchBar } from '../../components/Searchbar'
import { ConfirmModalProvider } from '~/context/ConfirmModalContext'
import Collumns from '~/components/Columns'
import { HiRefresh } from 'react-icons/hi'
import Button from '~/components/ui/Buttons'
import { IconButton } from '~/components/ui/Buttons/IconButton'

import { useNavigate } from 'react-router-dom'
import routes from '~/router/routes'

import {
  DashboardProvider,
  useDashboardContext,
} from '~/context/DashboardContext'

const Page = () => {
  const navigate = useNavigate()
  const { data, loading, refetch } = useDashboardContext()
  const goToNewAdmissionPage = () => {
    navigate(routes.newUser)
  }

  return (
    <ConfirmModalProvider>
      <S.Container>
        <S.Wrapper>
          <SearchBar />
          <S.Actions>
            <IconButton aria-label='refetch' onClick={refetch}>
              <HiRefresh />
            </IconButton>
            <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
          </S.Actions>
        </S.Wrapper>
        <Collumns loading={loading} registrations={data || []} />
      </S.Container>
    </ConfirmModalProvider>
  )
}

const DashboardPage = () => {
  return (
    <DashboardProvider>
      <Page />
    </DashboardProvider>
  )
}

export default DashboardPage
