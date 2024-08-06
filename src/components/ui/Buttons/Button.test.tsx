import { render, screen } from '@testing-library/react'
import Button, { ButtonSmall } from './index'

describe('Button', () => {
  test('renders Button with default styles', () => {
    render(<Button>Click Me</Button>)
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveStyle('background-color: #64a98c')
    expect(buttonElement).toHaveStyle('font-size: 16px')
  })

  test('renders Button with correct styles when passed as props', () => {
    render(
      <Button style={{ backgroundColor: 'red', color: 'black' }}>
        Click Me
      </Button>
    )
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveStyle('background-color: red')
    expect(buttonElement).toHaveStyle('color: black')
  })
})

describe('ButtonSmall', () => {
  test('renders ButtonSmall with default styles', () => {
    render(<ButtonSmall>Small Button</ButtonSmall>)
    const buttonElement = screen.getByText(/Small Button/i)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveStyle('font-size: 12px')
    expect(buttonElement).toHaveStyle('color: #000')
  })

  test('renders ButtonSmall with custom background color', () => {
    render(<ButtonSmall $bgcolor='blue'>Small Button</ButtonSmall>)
    const buttonElement = screen.getByText(/Small Button/i)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveStyle('background-color: blue')
  })

  test('renders ButtonSmall with custom text color', () => {
    render(<ButtonSmall color='white'>Small Button</ButtonSmall>)
    const buttonElement = screen.getByText(/Small Button/i)
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveStyle('color: white')
  })
})
