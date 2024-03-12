import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from 'swiper/modules';

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

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')
  const [mealsEdge, setMealsEdge] = useState({ isBeginning: true, isEnd: false })

  async function getDishes() {
    try {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`, { withCredentials: true })
      setDishes(response.data)
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
        localStorage.removeItem('@foodexplorer:user')
      } else {
        alert('Não foi possível encontrar os pratos.')
      }
    }
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
              {/* <div style={{ position: 'relative', marginTop: '2.4rem' }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  width: '30%',
                  height: '100%',
                  transition: 'all 1s',
                  opacity: 0,
                  ...(mealsEdge.isBeginning && {
                    background: 'linear-gradient(to right, rgba(0, 10, 15, 0.85), transparent)',
                    opacity: 1
                  }
                  )
                }}
                /> */}
              <Swiper
                slidesPerView={3.5}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={28}
                navigation
                onToEdge={({ isBeginning, isEnd }) => setMealsEdge({
                  isBeginning, isEnd
                })}
              >
                {mealDishes.map(dish => (
                  <SwiperSlide key={dish.id}>
                    <Card dish={dish} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  zIndex: 10,
                  width: '30%',
                  height: '100%',
                  transition: 'all 1s',
                  opacity: 0,
                  ...(mealsEdge.isEnd && {
                    background: 'linear-gradient(to right, rgba(0, 10, 15, 0.8), transparent)',
                    opacity: 1
                  }
                  )
                }}
                /> */}
              {/* </div> */}
            </Section>
          }

          {dessertDishes.length > 0 &&
            <Section title='Sobremesas'>
              <Swiper
                slidesPerView={3.5}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={27}
                navigation
              >
                {dessertDishes.map(dish => (
                  <SwiperSlide key={dish.id}>
                    <Card dish={dish} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
          }

          {drinkDishes.length > 0 &&
            <Section title='Bebidas'>
              <Swiper
                slidesPerView={3.5}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={27}
                navigation
              >
                {drinkDishes.map(dish => (
                  <SwiperSlide key={dish.id}>
                    <Card dish={dish} />
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