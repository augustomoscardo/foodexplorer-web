import { Container } from './styles'

export function Button({ icon, text, ...rest }) {
  return (
    <Container  {...rest}>
      {icon && icon}
      {text}
    </Container>
  )
}