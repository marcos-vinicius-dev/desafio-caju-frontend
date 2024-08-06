import { createContext, useState, ReactNode } from 'react'
import { ButtonSmall } from '~/components/ui/Buttons'
import ConfirmModal from '~/components/ConfirmModal'

type ConfirmModalContextProps = {
  showConfirm: (message: string, onConfirm: () => void) => void
}

export const ConfirmModalContext = createContext<ConfirmModalContextProps>({
  showConfirm: () => {},
})

type ConfirmModalProviderProps = {
  children: ReactNode
}

export const ConfirmModalProvider = ({
  children,
}: ConfirmModalProviderProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [onConfirm, setOnConfirm] = useState<() => void>(() => {})

  const showConfirm = (message: string, onConfirm: () => void) => {
    setMessage(message)
    setOnConfirm(() => onConfirm)
    setIsVisible(true)
  }

  const handleConfirm = () => {
    onConfirm()
    setIsVisible(false)
  }

  const handleCancel = () => {
    setIsVisible(false)
  }

  return (
    <ConfirmModalContext.Provider value={{ showConfirm }}>
      {children}
      <ConfirmModal
        show={isVisible}
        onClose={handleCancel}
        title='Confirmação'
        actions={
          <div className='flex gap-4'>
            <ButtonSmall onClick={handleCancel}>Não</ButtonSmall>
            <ButtonSmall
              bgcolor='#e80537'
              color='white'
              onClick={handleConfirm}
            >
              Sim
            </ButtonSmall>
          </div>
        }
      >
        {message}
      </ConfirmModal>
    </ConfirmModalContext.Provider>
  )
}
