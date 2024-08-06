import { Status } from '~/entities/Registration'
import { ButtonSmall } from '~/components/ui/Buttons'
import useRegistrationToogleStatus from '~/hooks/useRegistrationToogleStatus'
import { useContext } from 'react'
import { ConfirmModalContext } from '~/context/ConfirmModalContext'

type Props = {
  status: Status
  registrationId: string
}

export const colors = {
  reprove: 'rgb(255, 145, 154)',
  approve: 'rgb(155, 229, 155)',
  review: '#ff8858',
}

export function ToggleStatus({ status, registrationId }: Props) {
  const { reprove, approve, review } = useRegistrationToogleStatus()

  const confirmModalContext = useContext(ConfirmModalContext)

  const handleReprove = () =>
    confirmModalContext.showConfirm(
      'Você tem certeza de que deseja reprovar esta inscrição?',
      () => reprove(registrationId)
    )
  const handleApprove = () =>
    confirmModalContext.showConfirm(
      'Tem certeza de que deseja aprovar esta inscrição?',
      () => approve(registrationId)
    )
  const handleReview = () =>
    confirmModalContext.showConfirm(
      'Você deseja revisar esta inscrição novamente?',
      () => review(registrationId)
    )

  switch (status) {
    case 'REVIEW':
      return (
        <>
          <ButtonSmall $bgcolor={colors.reprove} onClick={handleReprove}>
            Reprovar
          </ButtonSmall>
          <ButtonSmall $bgcolor={colors.approve} onClick={handleApprove}>
            Aprovar
          </ButtonSmall>
        </>
      )
    case 'REPROVED':
    case 'APPROVED':
      return (
        <>
          <ButtonSmall $bgcolor={colors.review} onClick={handleReview}>
            Revisar novamente
          </ButtonSmall>
        </>
      )
    default:
      return null
  }
}
