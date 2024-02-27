import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'

import { Container, Content, Menu } from './styles'

import { api } from '../../services/api'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')


  async function getDishes() {
    const response = await api.get(`/dishes?title=${search}&ingredients=${search}`, { withCredentials: true })
    setDishes(response.data)
  }

  function handleSearch(e) {
    e.preventDefault()

    setSearch(e.target.value)
  }

  useEffect(() => {
    getDishes()
  }, [])

  const mealDishes = dishes.filter(dish => dish.category === 'refeicao')
  const dessertDishes = dishes.filter(dish => dish.category === 'sobremesa')
  const drinkDishes = dishes.filter(dish => dish.category === 'bebida')

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <Content>
        <Banner />

        <Menu>
          {mealDishes.length > 0 &&
            <Section title='Refeições'>
              <Swiper
                slidesPerView={3}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={27}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                effect='fade'
              >
                {mealDishes.map(dish => (
                  <SwiperSlide>
                    <Card dish={dish} key={dish.id} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
          }

          {dessertDishes.length > 0 &&
            <Section title='Sobremesas'>
              <Swiper
                slidesPerView={3}
              >
                {dessertDishes.map(dish => (
                  <SwiperSlide>
                    <Card dish={dish} key={dish.id} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
          }

          {drinkDishes.length > 0 &&
            <Section title='Bebidas'>
              <Swiper
                slidesPerView={3}
              >
                {drinkDishes.map(dish => (
                  <SwiperSlide>
                    <Card dish={dish} key={dish.id} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
          }
        </Menu>
      </Content>
      <Footer />
    </Container>
  )
}