import { MagnifyingGlass } from '@phosphor-icons/react'
import { Container } from './styles'

export function Search() {
  return (
    <Container>
      <MagnifyingGlass size={24} />

      <input type="text" placeholder='Busque por pratos ou ingredientes' />
    </Container>
  )
}