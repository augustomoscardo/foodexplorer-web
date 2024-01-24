import { Container } from './styles'

export function Input({ textLabel, ...rest }) {
  return (
    <Container>
      <label>{textLabel}</label>
      <input type="text" {...rest} />
    </Container>
  )
}