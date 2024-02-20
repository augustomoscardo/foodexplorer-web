import bannerImg from '../../assets/banner.png'
import { Container } from './styles'

export function Banner() {
  return (
    <Container>
      <img src={bannerImg} alt="Imagem de hamburgueres como banner da página inicial." />

      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  )
}