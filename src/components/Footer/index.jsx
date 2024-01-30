import { Container, Logo, Copyright } from './styles'

import logoGrayImg from '../../assets/logo-gray.svg'

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={logoGrayImg} alt='Logo da trilha Explorer da Rocketseat' />
        <h3>food explorer</h3>
      </Logo>

      <Copyright>
        © 2023 - Todos os direitos reservados.
      </Copyright>
    </Container>
  )
}