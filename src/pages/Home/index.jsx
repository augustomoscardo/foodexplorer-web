import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello from Home</h1>
      </Container>
      <Footer />
    </>
  )
}