import { CaretLeft } from '@phosphor-icons/react';
import { Header } from '../../components/Header'

import { Container, Content, DishInfo, Tags } from "./styles";
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Details() {
  const [dish, setDish] = useState({})

  const navigate = useNavigate()
  const dishParams = useParams()

  const imageURL = `${api.defaults.baseURL}/files/${dish.avatar}`

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`/dishes/${dishParams.id}`, {
          withCredentials: true
        })

        const { dish } = response.data
        setDish(dish)
        // setPrice(response.data.dish.price)
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert('Não foi possível encontrar o pratos.')
        }
      }
    }

    getDish()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <button onClick={handleBack}>
          <CaretLeft size={32} weight="bold" />
          voltar
        </button>

        <DishInfo>
          <img src={imageURL} alt="" />

          <div>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <Tags>
              <span>alface</span>
              <span>cebola</span>
              <span>pepino</span>
              <span>rabanete</span>
            </Tags>
            <button>Editar prato</button>
          </div>
        </DishInfo>
      </Content>
      <Footer />
    </Container>
  )
}