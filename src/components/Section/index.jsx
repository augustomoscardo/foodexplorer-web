import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'


export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>

      {children}
    </Container >
  )
}