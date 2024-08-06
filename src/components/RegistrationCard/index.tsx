import * as S from './styles'
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi'
import Registration from '~/entities/Registration'
import { ToggleStatus } from '../ToggleStatus'
import useRegistrationDelete from '~/hooks/useRegistrationDelete'
import { ConfirmModalContext } from '~/context/ConfirmModalContext'
import { useContext } from 'react'
import { useDashboardContext } from '~/context/DashboardContext'

type Props = {
  registration: Registration
}

const RegistrationCard = (props: Props) => {
  const { onDelete } = useRegistrationDelete()
  const { showConfirm } = useContext(ConfirmModalContext)
  const { refetch } = useDashboardContext()

  const handleDelete = async (id: string) => {
    showConfirm('Tem certeza que deseja deletar este item?', async () => {
      await onDelete(id)
      refetch()
    })
  }

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{props.registration.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{props.registration.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{props.registration.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <ToggleStatus
          registrationId={props.registration.id}
          status={props.registration.status}
        />
        <HiOutlineTrash onClick={() => handleDelete(props.registration.id)} />
      </S.Actions>
    </S.Card>
  )
}

export default RegistrationCard
