import { Container } from './styles'

export function Ingredients({ textLabel, children }) {
  return (
    <Container>
      <label>{textLabel}</label>
      <div>
        {children}
      </div>

    </Container>
  )
}