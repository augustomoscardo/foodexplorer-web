import { Container } from './styles'

export function Button({ icon, text, ...rest }) {
  return (
    <Container  {...rest}>
      {icon && 'tem icone'}
      {text}
    </Container>
  )
}