import { InputHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

const commonStyles = `
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 8px;
  width: 100%;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Input = styled.input`
  ${commonStyles}
`

const StyledMaskedInput = styled(MaskedInput)`
  ${commonStyles}
`

type Props = {
  label?: string
  error?: string
  mask?: Array<string | RegExp>
} & InputHTMLAttributes<HTMLInputElement>

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, error, mask, ...rest }, ref) => {
    const InputComponent: React.ElementType = mask ? StyledMaskedInput : Input

    return (
      <InputWrapper>
        {label && <label htmlFor={rest.id}>{label}</label>}
        <InputComponent {...rest} mask={mask} ref={ref} />
        {error && <span style={{ fontSize: 12, color: 'red' }}>{error}</span>}
      </InputWrapper>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
