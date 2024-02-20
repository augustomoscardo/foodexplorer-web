import { Container } from './styles'

export function Input({ textLabel, inputId, ...rest }) {
  return (
    <Container>
      <label htmlFor={inputId}>{textLabel}</label>
      <input id={inputId} {...rest} />
    </Container>
  )
}