import { Container } from './styles'

export function Select({ textLabel, ...rest }) {
  return (
    <Container>
      <label>{textLabel}</label>
      <select name="categoria" id="">
        <option value="">Selecione uma categoria</option>
        <option value="refeicao">Refeição</option>
        <option value="sobremesa">Sobremesa</option>
        <option value="bebida">Bebida</option>
      </select>
    </Container>
  )
}