import * as S from './styles'
import RegistrationCard from '../RegistrationCard'
import Registration, { Status } from '~/entities/Registration'
import { filterRegistrationsByStatus } from '~/utils/registrationsUtils'
import SkeletonColumn from './SkeletonColumn'

const allColumns = [
  { status: Status.REVIEW, title: 'Pronto para revisar' },
  { status: Status.APPROVED, title: 'Aprovado' },
  { status: Status.REPROVED, title: 'Reprovado' },
]

type Props = {
  registrations: Registration[]
  loading: boolean
}

const Collumns = (props: Props) => {
  if (props.loading) {
    return (
      <S.Container>
        <SkeletonColumn></SkeletonColumn>
        <SkeletonColumn></SkeletonColumn>
        <SkeletonColumn></SkeletonColumn>
      </S.Container>
    )
  }
  return (
    <S.Container>
      {allColumns.map((collum) => {
        const filteredRegistrations = filterRegistrationsByStatus(
          props.registrations,
          collum.status
        )

        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {filteredRegistrations.map((registration) => (
                  <RegistrationCard
                    registration={registration}
                    key={registration.id}
                  />
                ))}
              </S.CollumContent>
            </>
          </S.Column>
        )
      })}
    </S.Container>
  )
}
export default Collumns
