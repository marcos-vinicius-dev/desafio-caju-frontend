import { render, screen } from '@testing-library/react'
import { IconButton } from './IconButton.tsx'

describe('IconButton', () => {
  test('renders with children', () => {
    render(<IconButton>Click Me</IconButton>)
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('applies custom styles', () => {
    const { container } = render(<IconButton>Styled Button</IconButton>)
    const buttonElement = container.firstChild as HTMLElement
    expect(buttonElement).toHaveStyle('cursor: pointer')
    expect(buttonElement).toHaveStyle('border: 2px solid #64a98c')
    expect(buttonElement).toHaveStyle('background-color: transparent')
  })

  test('passes additional props to the button', () => {
    render(<IconButton aria-label='Test button'>Test</IconButton>)
    const buttonElement = screen.getByLabelText(/Test button/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
