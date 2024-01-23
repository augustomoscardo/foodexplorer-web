import { Container } from './styles'

export function Input(textLabel, ...rest) {
  return (
    <Container>
      <label htmlFor={textLabel}></label>
      <input type="text" {...rest} />
    </Container>
  )
}