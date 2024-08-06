import * as S from './styles'

type ModalProps = {
  show: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  actions?: React.ReactNode
}

export default function ConfirmModal({
  show,
  onClose,
  title,
  children,
  actions,
}: ModalProps) {
  if (!show) return null

  return (
    <S.ModalBackdrop>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
        {title && <S.ModalTitle>{title}</S.ModalTitle>}
        <div>{children}</div>
        {actions && <S.ModalActions>{actions}</S.ModalActions>}
      </S.ModalContent>
    </S.ModalBackdrop>
  )
}
